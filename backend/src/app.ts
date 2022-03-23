const cors = require('cors')
require('dotenv').config()
import config from 'config'
import db from '../config/db'
import express from 'express'
import RoutesPost from './routes/RoutesPost'
import RoutesCreator from './routes/RoutesCreator'
const app = express()


app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//routes
app.use('/post',RoutesPost)
app.use('/creator',RoutesCreator)

const port = config.get('port')
app.listen(port,async()=>{
    await db()
    console.log('rodando na porta '+port)
})
