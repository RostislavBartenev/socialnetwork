import express, { Application, Request, Response } from "express"
import cors from "cors"

import newsRouter from "./routes/news.router"


const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => res.send('hello'))

app.use('/news', newsRouter)


export default app
