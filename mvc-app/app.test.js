// app.test.js
// import supertest and the express app
// const request = require('supertest');
// const app = require('./app');
// describe('Calculator Routes', () => {
//     // generate some random numbers to test the calculator
//     let number1 = Math.floor(Math.random() * 1_000_000);
//     let number2 = Math.floor(Math.random() * 1_000_000);
//     test('GET /calculator/add => sum of numbers', () => {
//         return request(app)
//             .get(`/calculator/add?num1=${number1}&num2=${number2}`)
//             .expect('Content-Type', /json/)
//             .expect(200)
//             .then((response) => {
//                 expect(response.body).toEqual({
//                     result: (number1 + number2)
//                 });
//             });
//     });
// });


const request = require('supertest');
const app = require('./app');

describe('Calculator Routes', () => {
    // generate some random numbers to test the calculator
    let number1 = Math.floor(Math.random() * 1_000_000);
    let number2 = Math.floor(Math.random() * 1_000_000);

    test('GET /calculator/add => sum of numbers', () => {
        return request(app)
            .get(`/ calculator / add ? num1 = ${number1}& num2=${number2} `)
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual({
                    result: (number1 + number2)
                });
            });
    });

    test('GET /calculator/subtract => difference of numbers', () => {
        return request(app)
            .get(`/ calculator / subtract ? num1 = ${number1}& num2=${number2} `)
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual({
                    result: (number1 - number2)
                });
            });
    });

    test('GET /calculator/multiply => product of numbers', () => {
        return request(app)
            .get(`/ calculator / multiply ? num1 = ${number1}& num2=${number2} `)
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual({
                    result: (number1 * number2)
                });
            });
    });

    test('GET /calculator/divide => quotient of numbers', () => {
        // Ensure number2 is not 0 to avoid division by zero error
        if (number2 === 0) {
            number2 = 1;
        }

        return request(app)
            .get(`/ calculator / divide ? num1 = ${number1}& num2=${number2} `)
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual({
                    result: (number1 / number2)
                });
            });
    });
});
```

//These tests ensure that each calculator operation(addition, subtraction, multiplication, and division) is functioning correctly and returning the expected response.Running these tests will verify that all routes are working successfully.