import express from 'express'

import { isAuthenticated } from '../lib/middlewares/is-authenticated'
import {
	createCheckoutSession,
	getOrders,
	stripeWebhook,
} from '../controllers/order.controller'

const router = express.Router()

router.route('/').get(isAuthenticated, getOrders)
router
	.route('/checkout/create-checkout-session')
	.post(isAuthenticated, createCheckoutSession)
router
	.route('/webhook')
	.post(express.raw({ type: 'application/json' }), stripeWebhook)

export default router
