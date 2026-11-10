import express from "express";
import booksRouter from "./routers/books.js"
import notFound from "./middlewares/notFound.js";
import errorsHandler from "./middlewares/errorsHandlers.js";
//setup
const app = express();
const port = 3000;
app.use(express.json());
//routing
app.get('/', (req, res)=>{
    res.send('List of items here')
})

app.use('/books', booksRouter);



app.use(notFound);
app.use(errorsHandler);
//start del server
app.listen(port, ()=> console.log(`Server started at http://localhost:${port}`));