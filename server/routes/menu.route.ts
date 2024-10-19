import express from 'express'

import upload from '../lib/middlewares/multer'
import { isAuthenticated } from '../lib/middlewares/is-authenticated'
import { addMenu, editMenu } from '../controllers/menu.controller'

const router = express.Router()

router.route('/').post(isAuthenticated, upload.single('image'), addMenu)
router.route('/:id').put(isAuthenticated, upload.single('image'), editMenu)

export default router
