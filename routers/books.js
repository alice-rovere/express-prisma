//Base url : /books
import express from "express";
import prisma from '../lib/prisma.js';

const router = express.Router();
//index
router.get('/', async (req,res, )=> {
    const limit = Number(req.query.limit) || 10;
    const books = await prisma.book.findMany({
        take: limit,
        include: { category: { select: { id: true, name: true } } },
        omit: {categoryId: true }
    });
    res.json(books);
});

//show
router.get('/:id', async  (req,res)=> {
    const id = Number(req.params.id);
    const book = await prisma.book.findUnique({
        where: {id},
        include: { category: {
            select: { id: true, name: true }
        } },
        omit: {categoryId: true }
    });
    res.json(book);
});

//store 
router.post('/', async   (req,res)=> {
    const { title, publishedYear, price, categoryId } = req.body;
    const newBook = await prisma.book.create({
        data: { title, publishedYear, price, categoryId }
    ,
    select: { id: true, title: true, publishedYear: true, price: true, categoryId: true } ,   
});
    res.status(201).json(newBook);
});

//update
router.put('/:id', async (req,res)=> {
    const { title, publishedYear, price, categoryId } = req.body;
    const updatedBook = await prisma.book.update({
        where: { id: Number(req.params.id) },
        data: { title, publishedYear, price, categoryId }
    });
    res.json(updatedBook);
});

//modify
router.patch('/:id', async (req,res)=> {
    const { title, publishedYear, price, categoryId } = req.body;
    const id = Number(req.params.id);
    const updatedBook = await prisma.book.update({
        where: { id },
        data: { title, publishedYear, price, categoryId }
    });
    res.json(updatedBook);
});

//destroy
router.delete('/:id', async (req,res)=> {
    const id = Number(req.params.id);
    const deletedBook = await prisma.book.delete({
        where: { id }
    });
    res.sendStatus(204);
});

export default router;