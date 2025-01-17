const express = require('express');
const router = express.Router();
const calculatorController = require("../controllers/calculatorController");

router.get("/add", (req, res) => {
    calculatorController.addNumbers(req, res);
});

router.get("/subtract", (req, res) => {
    calculatorController.subtractNumbers(req, res);
});

router.get("/divide", (req, res) => {
    calculatorController.divideNumbers(req, res);
});

router.get("/multiply", (req, res) => {
    calculatorController.multiplyNumbers(req, res);
});

// new route for adding two numbers
// router.get('/add', (req, res) => {
//     let number1 = parseInt(req.query.num1);
//     let number2 = parseInt(req.query.num2);
//     let sum = number1 + number2
//     console.log(sum)
//     res.status(200)
//     res.json({ result: sum })
// });


// router.get('/divide', (req, res) => {
//     let number1 = parseInt(req.query.num1);
//     let number2 = parseInt(req.query.num2);
//     let subtract = number1 / number2
//     console.log(divide)
//     res.status(200)
//     res.json({ result: divide })
// });

// router.get('/difference', (req, res) => {
//     let number1 = parseInt(req.query.num1);
//     let number2 = parseInt(req.query.num2);
//     let subtract = number1 - number2
//     console.log(difference)
//     res.status(200)
//     res.json({ result: difference })
// });

// router.get('/multiplication', (req, res) => {
//     let number1 = parseInt(req.query.num1);
//     let number2 = parseInt(req.query.num2);
//     let subtract = number1 * number2
//     console.log(multiplication)
//     res.status(200)
//     res.json({ result: multiplication })
// });

module.exports = router;