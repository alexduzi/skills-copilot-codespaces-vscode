// Create web server
// Import express
const express = require('express');
// Import comment controller
const commentController = require('../controllers/commentController');
// Create router
const router = express.Router();

// Create route for get all comments
router.get('/', commentController.getAllComments);
// Create route for get comment by id
router.get('/:id', commentController.getCommentById);
// Create route for create comment
router.post('/', commentController.createComment);
// Create route for update comment
router.put('/:id', commentController.updateComment);
// Create route for delete comment
router.delete('/:id', commentController.deleteComment);

// Export module
module.exports = router;