const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 1_000_000_000;
    actual = sum(900_000_000, 100_000_000);
    expect(actual).toBe(expected);
  });
  
  //Sorry but I can't be bothered with the longer writing
  test('can add two negative numbers', () => {
    expect(sum(-2, -3)).toBe(-5);
  });

  test('can add zero', () => {
    expect(sum(0, 2)).toBe(2);
  });

});

describe('subtract', () => {

  test('can subtract two small positive numbers', () => {
    expect(subtract(3, 2)).toBe(1);
  });

  test('can subtract two large positive numbers', () => {
    expect(subtract(900_000_000, 100_000_000)).toBe(800_000_000);
  });
  
  test('can subtract two negative numbers', () => {
    expect(subtract(-2, -3)).toBe(1);
    expect(subtract(-3, -2)).toBe(-1);
  });

  test('can subtract zero', () => {
    expect(subtract(2, 0)).toBe(2);
  });

});

describe('multiply', () => {

  test('can multiply two small positive numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  test('can multiply two large positive numbers', () => {
    expect(multiply(900_000_000, 900_000)).toBe(810_000_000_000_000);
  });

  test('can multiply negative numbers', () => {
    expect(multiply(-2, -3)).toBe(6);
    expect(multiply(-3, 2)).toBe(-6);
  });

  test('can multiply zero', () => {
    expect(multiply(0, 99999)).toBe(0);
  });

});

describe('divide', () => {

  test('can divide two small positive numbers', () => {
    expect(divide(6, 3)).toBe(2);
  });

  test('can divide two large positive numbers', () => {
    expect(divide(900_000_000, 900_000)).toBe(1_000);
  });

  test('can divide negative numbers', () => {
    expect(divide(-6, -3)).toBe(2);
    expect(divide(6, -2)).toBe(-3);
  });
  
  test('can NOT divide by zero', () => {
    expect(divide(99999, 0)).toBe(Infinity);
  });

});

describe('modulus', () => {

  test('can modulus two small positive numbers', () => {
    expect(modulus(6, 3)).toBe(0);
    expect(modulus(3, 6)).toBe(3);
  });

  test('can modulus two large positive numbers', () => {
    expect(modulus(810_000_000, 900_000)).toBe(0);
  });

  test('can modulus negative numbers', () => {
    expect(modulus(-3, -2)).toBe(2);
  });

});

describe('even', () => {

  test('can check small numbers', () => {
    expect(even(2)).toBe(true);
    expect(even(3)).toBe(false);
  });

  test('can check large numbers', () => {
    expect(even(810_000_000)).toBe(true);
    expect(even(9_000_000_001)).toBe(false);
  });

  test('can check negative numbers', () => {
    expect(even(-2)).toBe(true);
    expect(even(-3)).toBe(false);
  });
});

describe('odd', () => {

  test('can check small numbers', () => {
    expect(odd(2)).toBe(false);
    expect(odd(3)).toBe(true);
  });

  test('can check large numbers', () => {
    expect(odd(810_000_000)).toBe(false);
    expect(odd(9_000_000_001)).toBe(true);
  });

  test('can check negative numbers', () => {
    expect(odd(-2)).toBe(false);
    expect(odd(-3)).toBe(true);
  });

});
