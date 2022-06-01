const router = require('express').Router();
const { 
    createUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
    addFriendById,
    deleteFriendToUser,
 } = require('../../../controllers/userController');

router.route('/')
    .post(createUser)
    .get(getAllUsers);

router.route('/:userId')
    .get(getUserById)
    .put(updateUserById)
    .delete(deleteUserById);

router.post('/:userId/friends/:friendId', addFriendById);
router.delete('/:userId/friends/:friendId', deleteFriendToUser);

module.exports = router;