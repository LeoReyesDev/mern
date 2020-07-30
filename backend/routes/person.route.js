let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Person Model
let personSchema = require('../models/Person');

// CREATE Person
router.route('/create-person').post((req, res, next) => {
  personSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ Persons
router.route('/').get((req, res) => {
  personSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Person
router.route('/edit-person/:id').get((req, res) => {
  personSchema.findById(req.params.id, (error, data) => {
    if (error) {
      console.error("DAMN!")
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Person
router.route('/update-person/:id').put((req, res, next) => {
  personSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Person was updated successfully !')
    }
  })
})

// Delete Person
router.route('/delete-person/:id').delete((req, res, next) => {
  personSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;