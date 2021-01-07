import dotenv from 'dotenv'
import connect from './db'
import app from './app'

dotenv.config()

const { PORT } = process.env

const dbUri = `${process.env.DB_URI}` || 'mongodb://localhost:27017/socialnetwork'

connect(dbUri)

app.listen(PORT, () => console.log('App has been started http://localhost:' + PORT))
