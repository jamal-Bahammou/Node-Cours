const express = require('express');
const router = express.Router();

const tourController = require('../controllers/tourController');

const {
  getAllTours,
  addTour,
  getSingleTour,
  updateTour,
  deleteTour,
  checkID,
  checkBody
} = tourController;

router.param('id', checkID);

router
  .route('/')
  .get(getAllTours)
  .post(checkBody, addTour);

router
  .route('/:id')
  .get(getSingleTour)
  .patch(updateTour)
  .delete(deleteTour);

module.exports = router;
