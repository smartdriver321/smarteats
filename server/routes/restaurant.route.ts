import express from 'express'

import upload from '../lib/middlewares/multer'
import { isAuthenticated } from '../lib/middlewares/is-authenticated'
import {
	createRestaurant,
	getRestaurant,
	getRestaurantOrder,
	getSingleRestaurant,
	searchRestaurant,
	updateOrderStatus,
	updateRestaurant,
} from '../controllers/restaurant.controller'

const router = express.Router()

router
	.route('/')
	.post(isAuthenticated, upload.single('imageFile'), createRestaurant)
router.route('/').get(isAuthenticated, getRestaurant)
router
	.route('/')
	.put(isAuthenticated, upload.single('imageFile'), updateRestaurant)
router.route('/order').get(isAuthenticated, getRestaurantOrder)
router.route('/order/:orderId/status').put(isAuthenticated, updateOrderStatus)
router.route('/search/:searchText').get(isAuthenticated, searchRestaurant)
router.route('/:id').get(isAuthenticated, getSingleRestaurant)

export default router
