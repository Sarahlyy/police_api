import express from 'express';
import statementRouter from "./routes/statement.js"
import 'dotenv/config'
import { dbConnection } from './config/db.js';

const app =express();

app.use(express.json());

app.use(statementRouter)
dbConnection()

let port = 3000;
app.listen(port, ()=> {
    console.log('Listen on port 3000')
})


