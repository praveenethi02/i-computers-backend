import express from 'express'

let app = express()

function go(){
    console.log("Server is running")
}

app.listen(3000, go)