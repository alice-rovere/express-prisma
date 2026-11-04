import express from "express";
import booksRouter from "./routers/books.js"
//setup
const app = express();
const port = 3000;

//routing
app.get('/', (req, res)=>{
    res.send('List of items here')
})

app.use('/books', booksRouter);

//start del server
app.listen(port, ()=> console.log(`Server started at http://localhost:${port}`));