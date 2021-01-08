import dotenv from 'dotenv'
import mongoose, { ConnectOptions } from 'mongoose'

dotenv.config()

const options: ConnectOptions = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
    autoIndex: true,
    poolSize: 10,
    bufferMaxEntries: 0,
}

export default (db: string) => {
    const connect = () => {
        mongoose
            .connect(db, options)
            .then(() => {
                return console.log(`Successfully connected to ${db}`)
            })
            .catch((error) => {
                console.log('Error connecting to database: ', error)
                return process.exit(1)
            })
    }
    connect()

    mongoose.connection.on('disconnected', connect)
}
