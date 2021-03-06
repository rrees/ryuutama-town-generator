
import {Town} from './aliases';

import * as classicData from './data/classic';

import * as selectors from './selectors';

export function classic(): Town {
	const townBuilders = [
		(town: Town) => selectors.chooseFromTable('Population', classicData.populationTable, town),
		(town: Town) => selectors.chooseFromTable('Government', classicData.governmentTable, town),
		(town: Town) => selectors.chooseOne('Ruling attitude', classicData.rulingAttitudes, town),
		(town: Town) => selectors.chooseOne('Environment', classicData.environment, town),
		(town: Town) => selectors.chooseOneWithModifier('Building', classicData.buildings, town),
		(town: Town) => selectors.chooseOneWithModifier('Speciality goods', classicData.specialityGoods, town),
		(town: Town) => selectors.chooseOne('Sights', classicData.sights, town),
		(town: Town) => selectors.chooseOne('Sounds', classicData.sounds, town),
		(town: Town) => selectors.chooseOne('Smells', classicData.smells, town),
		(town: Town) => selectors.chooseOne('Threats', classicData.threats, town),
	];

	return townBuilders.reduce((town, builder) => builder(town), new Map());
}