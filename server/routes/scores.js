import express from 'express';

import { getPosts, getPostsBySearch, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';

const router = express.Router();
import auth from "../middleware/auth.js";

app.put('/:id', async function(req, res) {
    let { name, score } = req.body;
    // check if the username already exists
    const alreadyExisting = await db
        .collection(id)
        .findOne({ name: name });
    if (alreadyExisting) {
        // Update player object with the username
        await db
            .collection(id)
            .updateOne({ name }, { $set: { name, score } });
        console.log(`Player ${name} score updated to ${score}`);
        res.send({ status: true, msg: “score updated” });
    } else {
        res.send({ status: false, msg: “username not found” });
    }
 });

export default router;