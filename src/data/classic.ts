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