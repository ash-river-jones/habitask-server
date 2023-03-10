require('dotenv').config()
const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const app = express()
const PORT = process.env.PORT || 8080

app.use(cors())
app.use(express.static('public'))
app.use(express.json())



app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`)
})