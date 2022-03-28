const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    newThought,
    updateThought,
    deleteThought,
    newReaction,
    deleteReaction
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

router
    .route('/:thoughtId/reactions')
    .post(newReaction);

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);
    
module.exports = router;