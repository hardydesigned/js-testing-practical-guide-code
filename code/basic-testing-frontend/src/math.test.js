import { it, expect } from 'vitest';

import { add, subtract } from './math';

it('adds numbers', () => {
  // Arrange
  const numbers = [1, 2, 3];

  // Act
  const result = add(numbers);

  // Assert
  const expectedResult = numbers.reduce((a, b) => a + b, 0);
  expect(result).toBe(expectedResult);

});

it('should yield Nan if atleast one invalid number is provided', () => {
  // Arrange
  const numbers = [1, 2, 'a'];

  // Act
  const result = add(numbers);

  // Assert
  expect(result).toBeNaN();
});

it('should yield a correct sum if an array of numeric strings is provided', () => {
  // Arrange
  const numbers = ['1', '2', '3'];

  // Act
  const result = add(numbers);

  // Assert
  const expectedResult = numbers.reduce((a, b) => Number(a) + Number(b), 0);
  expect(result).toBe(expectedResult);
});

it('should yield 0 if an empty array is provided', () => {
  // Arrange
  const numbers = [];

  // Act
  const result = add(numbers);

  // Assert
  expect(result).toBe(0);
});

it('should throw an error if no numbers are provided', () => {
  // Arrange

  // Act
  const result = () => add();

  // Assert
  expect(result).toThrow(/is not iterable/);
});