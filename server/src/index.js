const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 3001
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/appointments', require('./routes/appointmentRoutes'))

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
