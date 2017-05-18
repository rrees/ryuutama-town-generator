import {Town} from './aliases';

export interface TownElement {
	name: string,
	value: string
}

export interface Table {
	choices: Array<[number, number, string]>,
	upperLimit: number,
	modifier: (Town) => number
}