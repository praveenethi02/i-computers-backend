// import dns from 'node:dns';

// dns.setServers(["1.1.1.1", "8.8.8.8"]);

// import express from 'express'
// import mongoose from 'mongoose'
// import studentRouter from './routes/studentRouter.js'
// import userRouter from './routes/userRouter.js'


// const mongoUri = "mongodb://admin:ptb1234@ac-hxdgxkv-shard-00-00.kgyezxs.mongodb.net:27017,ac-hxdgxkv-shard-00-01.kgyezxs.mongodb.net:27017,ac-hxdgxkv-shard-00-02.kgyezxs.mongodb.net:27017/?ssl=true&replicaSet=atlas-ijb8qa-shard-0&authSource=admin&appName=Cluster0";
// mongoose.connect(mongoUri)
//     .then(() => {
//         console.log("Connected to mongoDB successfully!");
//     })
//     .catch((err) => {
//         console.error("Initial connection error to mongoDB:", err.message);
//     });

// mongoose.connection.on('error', (err) => {
//     console.error("MongoDB runtime error:", err);
// });

// const app = express()

// app.use(express.json())

// app.use("/students", studentRouter)
// app.use("/users", userRouter)


// app.listen(3000,
//     () => {
//         console.log("server is running!")
//     }
// )


import dns from 'node:dns';

dns.setServers(["1.1.1.1", "8.8.8.8"]);

import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/userRouter.js';
import authenticate from './middlewares/authenticates.js';
import productRouter from './routes/productRouter.js';

const mongoUri = "mongodb+srv://admin:ptb1234@cluster0.kgyezxs.mongodb.net/?appName=Cluster0";

mongoose.connect(mongoUri).then(() => {
    console.log("Connected to mongoDB");
    
}).catch((err) => {
    console.error("MongoDB connection error:", err);
});

const app = express();

app.use(express.json());
app.use(authenticate);

app.use("/users", userRouter);
app.use("/products", productRouter);

app.listen(3000, () => {
    console.log("server is running!");
});
