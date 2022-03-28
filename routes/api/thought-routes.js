const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    newThought,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controller')

router
    .route('/')
    .get(getAllThought)
    .post(newThought);

router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);
    
module.exports = router;