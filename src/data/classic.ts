import {TableEntry} from '../aliases';

import {Table} from '../interfaces';

export const populationTable = {
	choices: [
		[1, 3, 'Village'],
		[4, 7, 'Town'],
		[8, 9, 'City'],
		[10, 10, 'Large city']
	],
	upperLimit: 10,
	modifier: undefined
} as Table;

export const governmentTable = {
	choices: [
		[0, 0, "As needed"],
		[1, 2, "Eldest"],
		[3, 4, "Elected Head"],
		[5, 6, "Elected council"],
		[7, 7, "Lottery"],
		[8, 9, "Hereditary council"],
		[10, 11, "Hereditary ruler"]
	],
	upperLimit: 10,
	modifier: (state) => {
		if(state.Population === "Village") {
			return -1;
		}

		if(state.Population === "City"
			|| state.Population === "Large city") {
			return 1;
		}

		return 0;
	}
} as Table;

export const rulingAttitudes = [
	"Resistant to change",
	"Secretive",
	"Cynical",
	"Lazy",
	"Inexperienced",
	"Crude",
	"Forgetful",
	"Generous",
	"Meticulous",
	"Idealistic"
];

export const environment = [
	'Forest',
	'Valley',
	'Coast',
	'Cliff',
	'Wasteland',
	'Plains',
	'Trees',	
	'Hills'
];

export const sights = [
	'Greenery',
	'Festive colours',
	'Drab buildings',
	'Gleaming buildings',
	"Organic shapes",
	"Geometric designs"
];


export const sounds = [
	'Running water',
	'Birds',
	'Market hawkers',
	'Clanging metal',
	'Children',
	'Livestock'
];