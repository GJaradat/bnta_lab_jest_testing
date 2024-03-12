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

  test('can add two negative numbers', () => {
    expect(sum(-2, -3)).toBe(-5);
  });

  test('can add zero', () => {
    expect(sum(0, 2)).toBe(2);
  });

});

describe('subtract', () => {

});

describe('multiply', () => {

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
