const express = require('express');
const route = express.Router();
const postController = require('../controller/postController')
const commentController = require('../controller/commentController')
route.get('/', postController.getPosts);
route.post('/create-post', postController.createPost)
route.post('/posts/:id/delete', postController.deletePost)
route.post('/posts/:id/edit', postController.editPost)
route.post('/posts/:id/update', postController.updatePost)
route.get('/posts/:id/comment', commentController.createComment);
route.post('/posts/:id/addComment', commentController.addComment)
module.exports = route;
