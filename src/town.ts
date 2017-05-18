
import {Town} from './aliases';

import * as classicData from './data/classic';

import * as selectors from './selectors';

export function classic(): Town {
	const townBuilders = [
		(town: Town) => town.set('Population', {name: "Population", value: "Village"}),
		(town: Town) => selectors.chooseOne('Ruling attitude', classicData.rulingAttitudes, town),
	];

	return townBuilders.reduce((town, builder) => builder(town), new Map());
}