import express from 'express'

const app = express()

app.use(express.json())

app.get( "/",
    (req, res)=>{
        console.log("Get request received")
        console.log(req.body)
        res.json({
            message : "Good morning"+ req.body.name
        })
    }
)

app.get("/about",
    (req, res)=>{
        console.log("About request received")
        console.log(req.body)
    }
)

app.post("/",
    (req, res)=>{
        console.log("Post request received")
        console.log(req.body)
    }
)

app.delete("/",
    (req, res)=>{
        console.log("Delete request received")
        console.log(req.body)
    }
)

app.put("/",
    (req, res)=>{
        console.log("Put request received")
        console.log(req.body)
    }
)

app.listen(3000, 
    ()=>{
        console.log("server is running!")
    }
)