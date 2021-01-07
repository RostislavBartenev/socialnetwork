import express, { Application, Request, Response, NextFunction } from 'express'

const app: Application = express()

app.get('/', (req, res) => res.send('hello'))


export default app
