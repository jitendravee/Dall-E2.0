import express from "express";
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';
import post from '../mongodb/models/post.js';

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
    apiKey: process.env.OPEN_API_KEY,
})

const openai= new OpenAIApi(configuration);
router.route('/').get((req,res) => {
    res.send('Hello from dalle');
});

export default router;