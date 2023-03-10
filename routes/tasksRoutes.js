const express = require('express')
const router = express.Router()
const tasksController = require('../controllers/tasksController')
const jwt = require('jsonwebtoken')

router
    .route('/')
    .get(tasksController.getTasks)
    .post(tasksController.postTask)

router
    .route('/:id')
    // .get(tasksController.getTask)
    // .put(tasksController.putTask)
    // .delete(tasksController.deleteTask)

module.exports = router