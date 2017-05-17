
import {Town} from './aliases';

export function classic(): Town {
	const townBuilders = [
		(town: Town) => town.set('Population', {name: "Population", value: "Village"})
	];

	return townBuilders.reduce((town, builder) => builder(town), new Map());
}