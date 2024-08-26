import { it, expect, describe } from "vitest";

import { transformToNumber } from "./numbers";

describe("transformToNumber()", () => {
	it("should test if it transforms a string to number", () => {
		// Arrange
		const number = "1";

		// Act
		const result = transformToNumber(number);

		// Assert
		expect(result).toBe(1);
	});

	it("should test if it transforms a number", () => {
		// Arrange
		const number = 1;

		// Act
		const result = transformToNumber(number);

		// Assert
		expect(result).toBe(1);
	});

	it("should test if it throws an error if unvalid", () => {
		// Arrange
		const number = "a";
		const obe = {};

		// Act
		const result = transformToNumber(number);
		const result2 = transformToNumber(obe);

		// Assert
		expect(result).toBeNaN();
		expect(result2).toBeNaN();
	});
});
