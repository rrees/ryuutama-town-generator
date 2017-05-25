import {TableEntry} from '../aliases';

import {Table, ModifiedPick} from '../interfaces';

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

export const buildings = {
	upperLimit: 6,
	choices: [
		"Bridge",
		"Market",
		"Shrine",
		"Speciality production",
		"Civic center",
		"Monument",
		"Castle",
	],
	modifier: function(state) {
		const population = state.get('Population');
		if(population.value === "City"
			|| population.value === "Large city") {
			return 1;
		}

		return 0;
	}
} as ModifiedPick;

export const specialityGoods = {
	upperLimit: 10,
	choices: [
		"Cotton, wool and flax",
		"Grain, vegetables and staples",
		"Raw metal",
		"Lumber",
		"Wine, ale and spirits",
		"Furs, hides, cloth",
		"Livestock and pets",
		"Leather goods",
		"Wooden goods",
		"Housewares",
		"Herbs, salt, spices and sugar",
		"Clothing, armour and weapons",
		"Exotic fruits",
		"Painting and sculpture",
		"Jewelery",
		"Perfumes and potions",
		"Scrolls and books",
		"Magical items",
	],
	modifier: function(state) {
		const modifiers = [
			["Town", 2],
			["City", 5],
			["Large city", 8]
		];
		const population = state.get('Population');

		function reducer(currentModifer, [size, modifier]) {
			if(population.value === size) {
				return modifier;
			}
			
			return currentModifer;
		}

		return modifiers.reduce(reducer, 0);
	}	
} as ModifiedPick;


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

export const smells = [
	"Animals",
	"Cookfires",
	"Forest",
	"Water",
	"Speciality goods",
	"Waste"
];

export const threats = [
	'Famine',
	'Drought',
	'Monsters',
	"Natural disaster",
	"Bandits",
	"Plague",
	"Unfair treatment",
	"Missing people",
	"Vermin",
	"Isolated"
];