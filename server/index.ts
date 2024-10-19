import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
dotenv.config()
import connectToDB from './models/db/connect-to-db'
import userRouter from './routes/user.route'
import restaurantRouter from './routes/restaurant.route'
import menuRouter from './routes/menu.route'
import orderRouter from './routes/order.route'

const app = express()
const PORT = process.env.PORT || 8000
const corsOptions = {
	origin: 'http://localhost:5173',
	credentials: true,
}

app.use(express.json())
app.use(express.urlencoded({ extended: true, limit: '10mb' }))
app.use(bodyParser.json({ limit: '10mb' }))
app.use(cookieParser())
app.use(cors(corsOptions))

app.use('/api/v1/user', userRouter)
app.use('/api/v1/restaurant', restaurantRouter)
app.use('/api/v1/menu', menuRouter)
app.use('/api/v1/order', orderRouter)

app.listen(PORT, async () => {
	await connectToDB()
	console.log(`Server listen on PORT ${PORT}`)
})
