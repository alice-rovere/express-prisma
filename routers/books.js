//Base url : /books
import express from "express";

const router = express.Router();
//index
router.get('/', (req,res, )=> {
    res.send('Lista dei books')
    });

//show
router.get('/:id', (req,res, next)=> {
    res.send(`Dettaglio del libro con id ${req.params.id}`)
    })

//store 
router.post('/', (req,res, next)=> {
    res.send(`Creazione del nuovo book`)
    });

//update
router.put('/:id', (req,res, next)=> {
    res.send(`Modifica integrale del book con id ${req.params.id}`)
    })

//modify
router.patch('/:id', (req,res)=> {
    res.send(`Modifica parziale del book con id ${req.params.id}`)
    })

//destroy
router.delete('/:id', (req,res, next)=> {
    res.send(`Eliminazione del book con id ${req.params.id}`)
    })

export default router;