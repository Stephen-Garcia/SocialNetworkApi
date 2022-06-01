const router = require('express').Router();
const {
    createThought,
    getAllThoughts, 
    getThoughtById,
    updateThoughtById,
    deleteThoughtById,
    createReaction,
    deleteReaction
} = require('../../../controllers/thoughtController');

router.route('/')
    .post(createThought)
    .get(getAllThoughts);

router.route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThoughtById)
    .delete(deleteThoughtById);

router.post('/:thoughtId/reactions', createReaction);
router.delete('/:thoughtId/reactions/:reactionId', deleteReaction);

module.exports = router;