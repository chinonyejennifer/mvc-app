
const Calculator =
    require('../libraries/Calculator.js');
let myCalc = new Calculator()


const addNumbers = (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let sum = myCalc.add(num1, num2)
    // console.log(sum)
    res.status(200)
    res.json({ result: sum })
}


const subtractNumbers = (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let sum = myCalc.subtract(num1, num2)
    console.log(sum)
    res.status(200)
    res.json({ result: sum })
}


const divideNumbers = (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let sum = myCalc.divide(num1, num2)
    console.log(sum)
    res.status(200)
    res.json({ result: sum })
}


const multiplyNumbers = (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let sum = myCalc.multiply(num1, num2)
    console.log(sum)
    res.status(200)
    res.json({ result: sum })
}


module.exports = {
    addNumbers,
    subtractNumbers,
    divideNumbers,
    multiplyNumbers,


};