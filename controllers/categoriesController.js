const knex = require('knex')(require('../knexfile'));
const { v4: uuidv4 } = require('uuid')

exports.getCategories = (req, res) => {
    knex('categories')
        .select('*')
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({message: `there was an error getting category infomration`, error: err})
        })
}

exports.postCategory = (req,res) => {
    if(!req.body.name || !req.body.color) {
        res.status(400).json({messaage: `Error: Invalid/Incomplete Request`})
    } else {
        knex('categories')
            .insert({
                category_id: uuidv4(),
                name: req.body.name,
                color: req.body.color
            })
            .then(() => {
                res.status(201).json({message: `Cateogry created`})
            })
            .catch((err) => {
                res.status(400).json({
                    message:' Error creating giftee',
                    error: err
                })
            })
    }
    
    knex('categories')
        
}

exports.getCategory = (req, res) => {
    knex('categories')
        .where({category_id: req.params.category_id})
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({message: `there was an error getting category infomration`, error: err})
        })
}

exports.putCategory = (req, res) => {
    if (!req.params.category_id) {
        res.status(400).json({message: `Error: Invalid/Incomplete request`})
    } else {
        knex('categories')
            .where({category_id: req.params.category_id})
            .update(req.body)
            .then((data) => {
                res.status(200).json({message: `Category updated`})
            })
            .catch((err) => {
                res.status(400).json({message: `Error updating category`, error: err})
            })
    }
}

exports.deleteCategory = (req, res) => {
    knex('categories')
        .where({category_id : req.params.category_id})
        .delete()
        .then(() => {
            res.status(200).json({message: 'Category deleted'})
        })
}