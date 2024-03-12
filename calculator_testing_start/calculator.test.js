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
  })

  test('can multiply two negative numbers', () => {
    expect(multiply(-2, -3)).toBe(6);
  });

  test('can multiply zero', () => {
    expect(multiply(0, 99999)).toBe(0);
  })

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
