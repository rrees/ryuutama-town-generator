import * as town from './town';

import {TownElement} from './interfaces';

export function generate(): Map<string, TownElement> {
	return town.classic()
}
