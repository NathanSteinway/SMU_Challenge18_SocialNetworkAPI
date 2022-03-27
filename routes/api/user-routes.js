const router = require('express').Router();
const {
    getAllUser,
    getUserById,
    newUser,
    updateUser,
    deleteUser,
} = require('../../controllers/user-controller')

router
    .route('/')
    .get(getAllUser)
    .post(newUser);

router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;