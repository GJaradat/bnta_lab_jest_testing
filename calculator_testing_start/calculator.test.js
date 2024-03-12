const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  oddOrEven
} = require("./calculator");

describe("sum", () => { 
  
  test("can add two small positive numbers", () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test("can add two large positive numbers", () => { 
    expected = 1_000_000_000;
    actual = sum(900_000_000, 100_000_000);
    expect(actual).toBe(expected);
  });
  
  //Sorry but I can"t be bothered with the longer writing
  test("can add two negative numbers", () => {
    expect(sum(-2, -3)).toBe(-5);
  });

  test("can add zero", () => {
    expect(sum(0, 2)).toBe(2);
  });

  //Have to test this way because of floating point arithmetic
  test("can use .toBeCloseTo for adding floats", () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });
    
});

describe("subtract", () => {

  test("can subtract two small positive numbers", () => {
    expect(subtract(3, 2)).toBe(1);
  });

  test("can subtract two large positive numbers", () => {
    expect(subtract(900_000_000, 100_000_000)).toBe(800_000_000);
  });
  
  test("can subtract two negative numbers", () => {
    expect(subtract(-2, -3)).toBe(1);
    expect(subtract(-3, -2)).toBe(-1);
  });

  test("can subtract zero", () => {
    expect(subtract(2, 0)).toBe(2);
  });

});

describe("multiply", () => {

  test("can multiply two small positive numbers", () => {
    expect(multiply(2, 3)).toBe(6);
  });

  test("can multiply two large positive numbers", () => {
    expect(multiply(900_000_000, 900_000)).toBe(810_000_000_000_000);
  });

  test("can multiply negative numbers", () => {
    expect(multiply(-2, -3)).toBe(6);
    expect(multiply(-3, 2)).toBe(-6);
  });

  test("can multiply zero", () => {
    expect(multiply(0, 99999)).toBe(0);
  });

});

describe("divide", () => {

  test("can divide two small positive numbers", () => {
    expect(divide(6, 3)).toBe(2);
  });

  test("can divide two large positive numbers", () => {
    expect(divide(900_000_000, 900_000)).toBe(1_000);
  });

  test("can divide negative numbers", () => {
    expect(divide(-6, -3)).toBe(2);
    expect(divide(6, -2)).toBe(-3);
  });
  
  test("can NOT divide by zero", () => {
    expect(divide(99999, 0)).toBe(Infinity);
  });

});

describe("modulus", () => {

  test("can modulus two small positive numbers", () => {
    expect(modulus(6, 3)).toBe(0);
    expect(modulus(3, 6)).toBe(3);
  });

  test("can modulus two large positive numbers", () => {
    expect(modulus(810_000_000, 900_000)).toBe(0);
  });

  test("can modulus negative numbers", () => {
    expect(modulus(-3, -2)).toBe(1);
  });

});

describe("oddOrEven", () => {

  test("can determine if a number is odd or even", () => {
    expect(oddOrEven(1)).toBe("odd");
    expect(oddOrEven(2)).toBe("even");
  });
  
  //This test group will be used to try different assertions

  test("can determine if large number is NOT odd", () => {
    expect(oddOrEven(900_000_000_000_001)).not.toBe("even");
  });

  //Not a useful test, but still......
  test("can pass in a String", () => {
    expect(oddOrEven("hello")).toEqual(expect.anything());
  });

  //Can throw expected error - TRIED IMPLEMENTING, Test suite fails to run
                            //I tried implementing a try/catch block but then the test was failing due to the error being circumvented
  // test("can throw expected error", () => {
  //   expect(() => oddOrEven(0.5)).toThrow("Floats are not whole numbers!");
  // })
  //Wanted to find a way to implement expect.arrayContaining() but it will take too much time
});
