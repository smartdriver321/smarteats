import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectToDB from './db/connect-to-db'

const app = express()
const PORT = process.env.PORT || 8000

app.listen(PORT, async () => {
	await connectToDB()
	console.log(`Server listen on PORT ${PORT}`)
})
