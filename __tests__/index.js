//import * as rtg from "../src/index.ts";

const rtg = require("../src/index.ts");

it('Should generate something', () => {
	const town = rtg.generate();
	expect(town.size).toBe(4);
});

it('Should contain the expected town elements', () => {
	const keys = Array.from(rtg.generate().keys());

	const expectedKeys = [
		"Population",
		"Government",
		"Ruling attitude",
		"Environment",
	];

	expect(keys).toEqual(expect.arrayContaining(expectedKeys));
});