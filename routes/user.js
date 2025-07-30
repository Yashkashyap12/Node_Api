const express = require("express");
const {
  handleGetAllUSers,
  handlegetUserById,
  handleUpdateUserById,
  handleDeleteById,
  handleNewCreateUser,
} = require('../controllers/user');

const router = express.Router();

// Routes...
router.route('/').get(handleGetAllUSers).post(handleNewCreateUser);

router
  .route("/:id")
  .get(handlegetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteById);

module.exports = router;
