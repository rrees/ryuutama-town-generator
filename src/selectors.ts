
import {Town, TableEntry} from './aliases';
import {TownElement, Table, ModifiedPick} from './interfaces';

function select(upperLimit: number, lowerLimit: number = 0): number {
	return lowerLimit + Math.floor(Math.random() * upperLimit);
}

export function chooseOne(key: string, choices: Array<string>, town: Town): Town {
	return town.set(key, {
		name: key,
		value: choices[select(choices.length)]
	});
}

export function chooseFromTable(key, table: Table, town: Town): Town {
	const choice = table.modifier ? select(table.upperLimit, 1) + table.modifier(town) : select(table.upperLimit, 1);

	return town.set(key, {
		name: key,
		value: table.choices.find((row: TableEntry) => row[0] <= choice && choice <= row[1])[2]
	});
}

export function chooseOneWithModifier(key, table: ModifiedPick, town: Town): Town {
	const choice = table.modifier ? select(table.upperLimit) + table.modifier(town) : select(table.upperLimit);

	return town.set(key, {
		name: key,
		value: table.choices[choice]
	});
}