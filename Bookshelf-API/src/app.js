const express = require('express');
const app = express();
const  cors = require('cors')
require('./db/mongoose');
const userRouter =require('./router/user');
const bookRouter = require('./router/book')
const port = process.env.port||3001;

app.use(express.json());
app.use(cors())
app.use('/user/',userRouter);
app.use('/book/',bookRouter)


app.listen(port,()=>{
    console.log(`Server is Running ${port}`);
})
