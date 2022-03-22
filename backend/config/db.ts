const mongoose = require('mongoose')
import config from 'config'
const dbUrl = config.get<string>('dbUrl')
async function connect(){
    try {
        mongoose.connect(dbUrl)
        console.log('conectado ao mongo')
        
    } catch (error) {
        console.log(error)
    }
}
export default connect