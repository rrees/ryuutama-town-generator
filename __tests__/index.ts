import * as rtg from "../src/index.ts";

it('Should generate something', () => {
	const town = rtg.generate();
	expect(town.size).toBe(1);
});