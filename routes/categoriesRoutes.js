const express = require('express')
const router = express.Router()
const categoriesController = require('../controllers/categoriesController')

const jwt = require('jsonwebtoken')

router
    .route('/')
    .get(categoriesController.getCategories) // done
    .post(categoriesController.postCategory) // done

router
    .route('/:category_id')
    .get(categoriesController.getCategory) // done
    .put(categoriesController.putCategory) // done
    .delete(categoriesController.deleteCategory) //done

module.exports = router