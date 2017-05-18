import * as rtg from "../src/index.ts";

it('Should generate something', () => {
	const town = rtg.generate();
	expect(town.size).toBe(2);
});

it('Should contain the expected town elements', () => {
	const keys = Array.from(rtg.generate().keys());
	console.log(keys);
	const expectedKeys = [
		"Population",
		"Ruling attitude",
	];

	expect(keys).toEqual(expect.arrayContaining(expectedKeys));
});