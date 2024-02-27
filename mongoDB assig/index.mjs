import express from "express"
import routes from "./routs/index.mjs"
import db from './config/db.mjs'
const app = express( )

app.listen(3001 ,function(){
    console.log("3001 run seccessfully")
})

db.connection.once('open', () => console.log("connected to db")).on("error", (err) => console.log("error connecting db -->", err))



app.use(express.json())

app.use('/' , routes)
