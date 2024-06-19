const { square, squareRoot } = require("../square");

// 1. Describe
// 2. Test
// 3. Expect

describe("square function", () => {
    test("squares 5 to get 25", () => {
        expect(square(5)).toBe(25);
    });

    test("squares a negative number correctly", () => {
        expect(square(-4)).toBe(16);
    });

    test("squares 0 to get 0", () => {
        expect(square(0)).toBe(0);
    });

    test("returns null", () => {
        expect(() => squareRoot(-1).toThrow());
    });
});

// describe("squareRoot function", () => {
//     test("calculates the square root of 25 correctly", () => {
//         expect(squareRoot(25)).toBe(5);
//     });

//     // test("returns null or throws an error if the number is negative", () => {
//     //   expect(squareRoot(-1)).toThrow("Error");
//     // });
// });