import express from 'express'
import {newsGet} from '../controllers/news.controller'
const router = express.Router()

router
    .route('/:page')
    .get(newsGet)

export = router
