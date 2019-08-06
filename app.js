const express = require('express');
const app = express();

const morgan = require('morgan');

const tourRouter = require('./routes/tourRouters');
const userRouter = require('./routes/userRouters');

// ADD A MIDLEWARE: --------------------------------------------

app.use(express.json());

// 🚧 🚧 🚧
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Hello from the midleware ⚡️ ⚡️ ');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// MAIN ROUTERS: ----------------------------------------------
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;

// MAIN function: ----------------------------------------------
// app.get('/api/v1/tours', getAllTours);
// app.post('/api/v1/tours', addTour);
// app.get('/api/v1/tours/:id', getSingleTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

// TEST HOW Postman WORK: GET & POST ---------------------------
// app.get('/', (req, res) => {
//    res.status(200).json({
//       message: 'Hello from the server side!',
//       app: 'Natours'
//    });
// });

// app.post('/', (req, res) => {
//    res.send('You can post to this URL....');
// });
