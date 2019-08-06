const fs = require('fs');

// 💯 CheckID MIDLEWARE function: ---------------------------------
exports.checkID = (req, res, next, val) => {
  console.log(`Tour id is: ${val}`);
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'Fail ❌',
      message: 'Invalid Id'
    });
  }
  next();
};

// 💯 CheckBody MIDLEWARE function: -------------------------------
exports.checkBody = (req, res, next) => {
  console.log(`This is the cherkBody ✌️`);
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'Faill ❌',
      message: !req.body.name ? 'Missing name' : 'MIssing price'
    });
  }
  next();
};
// 🗽🗽🗽 Read the tours from json file: --------------------------
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

// 🗽 GET all tours: ----------------------------------------------
exports.getAllTours = (req, res) => {
  console.log(`${req.requestTime} ⏰ `);
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: tours.length,
    data: {
      tours
    }
  });
};

// 🗽 GET single tour: --------------------------------------------
exports.getSingleTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find(el => el.id === id);

  res.status(200).json({
    status: 'success ✔️',
    data: {
      tour
    }
  });
};

// 🗽 POST a new tour: --------------------------------------------
exports.addTour = (req, res) => {
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

// 🗽 PATCH update a tour: ----------------------------------------
exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success ✔️',
    data: {
      tour: '<Updated tour here...>'
    }
  });
};

// 🗽 DELETE a tour: ----------------------------------------------
exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success ✔️',
    data: null
  });
};
