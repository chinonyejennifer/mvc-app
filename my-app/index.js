
// const express = require('express')

//Application 1//
// const app1 = express()
// const port1 = 7000


// //Application 2//
// const app2 = express()
// const port2 = 8000

// //Application 3//
// const app3 = express()
// const port3 = 9000

// //Initialise all the functions 

// // app1.get('/', (req, res) => {
// //     res.send('Hello from App1!')
// // })

// app2.get('/', (req, res) => {
//     res.send('Hello from App2!')
// })

// app3.get('/', (req, res) => {
//     res.send('Hello from App3!')
// })
// //----------------------------------//

// app1.get('/test', (req, res) => {
//     res.send('This is a test')
// })

// app2.get('/test', (req, res) => {
//     res.send('This is a test')
// })

// app3.get('/test', (req, res) => {
//     res.send('This is a test')
// })

// //-----------------------------------//

// app1.listen(port1, () => {
//     console.log(`Example app listening
// at http://localhost:${port1}`)
// })

// app1.use("/mytest", testRoutes);
// app1.use('/', express.static('public'));

// app2.listen(port2, () => {
//     console.log(`Example app listening
// at http://localhost:${port2}`)
// })

// app3.listen(port3, () => {
//     console.log(`Example app listening
// at http://localhost:${port3}`)
// })
// //-----------------
// // import all calculator routes (up the top)
// const calculatorRoutes =
//     require('./routes/calculatorRoutes');

// // map the calculator routes to our app
// app1.use('/calculator', calculatorRoutes);

// index.js - updated version
// import the app
const app = require('./app');
const port = 7000

const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);

// start the app to listen on the right port
app.listen(port, () => {
    console.log(`Example app listening at
http://localhost:${port}`)
});

