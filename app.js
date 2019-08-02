const fs = require('fs');

const express = require('express');
const app = express();

// ADD A MIDLEWARE:
app.use(express.json());

// Take the tours from json file: --------------------------------
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

// GET all tours: ----------------------------------------------
const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours: tours
    }
  });
};

// GET single tour: --------------------------------------------
const getSingleTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find(el => el.id === id);

  if (!tour) {
    return res.status(404).json({
      status: 'Fail ❌',
      message: 'Invalid Id'
    });
  }

  res.status(200).json({
    status: 'success ✔️',
    data: {
      tour
    }
  });
};

// POST a new tour: --------------------------------------------
const addTour = (req, res) => {
  const newID = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newID }, req.body);

  // Add the new tour to the array of tours from json file: 💯
  tours.push(newTour);

  // Add the new tour to the json file: 💯
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    err => {
      res.status(201).json({
        status: 'success ✔️',
        data: {
          tour: newTour
        }
      });
    }
  );
};

// PATCH update a tour: ----------------------------------------
const updateTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'Fail ❌',
      message: 'Invalid Id'
    });
  }

  res.status(200).json({
    status: 'success ✔️',
    data: {
      tour: '<Updated tour here...>'
    }
  });
};
// DELETE a tour: ----------------------------------------------
const deleteTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'Fail ❌',
      message: 'Invalid Id'
    });
  }

  res.status(204).json({
    status: 'success ✔️',
    data: null
  });
};

// MAIN function: ----------------------------------------------

app
  .route('/api/v1/tours')
  .get(getAllTours)
  .post(addTour);

app
  .route('/api/v1/tours/:id')
  .get(getSingleTour)
  .patch(updateTour)
  .delete(deleteTour);

// LUNCH the server to work: -----------------------------------
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}....`);
});

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
