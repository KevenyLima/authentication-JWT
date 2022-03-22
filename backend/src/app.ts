const cors = require('cors')
require('dotenv').config()
import config from 'config'
import db from '../config/db'
import express from 'express'
import Router from './routes/RoutesPost'
const app = express()


app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/post',Router)

const port = config.get('port')
app.listen(port,async()=>{
    await db()
    console.log('rodando na porta '+port)
})
