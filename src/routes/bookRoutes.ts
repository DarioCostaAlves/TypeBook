import express from 'express';
import Book from '../models/book';

const router = express.Router();

//get all books
router.get('/', async (req, res) => {
    try{
        const books = await Book.find();
        res.json(books);
    } catch(error){
        res.status(500).json({ error: 'Internal Server Error'});
    }
});

//get a specific book
router.get('/:id', async (req,res) => {
    try{
        const book = await Book.findById(req.params.id);
        if(!book){
            res.status(404).json({error: 'Book not found'});
        } else {
            res.json(book);
        } 

    } 
    catch(error)
    {
        res.status(500).json({error: 'Internal Server Error'});
    }    
});

//create a book
router.post('/', async (req, res) => {
    try {
      const newBook = await Book.create(req.body);
      res.status(201).json(newBook);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

//update a book
router.put('/:id', async (req, res) => {
    try {
      const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedBook) {
        res.status(404).json({ error: 'Book not found' });
      } else {
        res.json(updatedBook);
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

//delete a book
router.delete('/:id', async (req, res) => {
    try {
      const deletedBook = await Book.findByIdAndDelete(req.params.id);
      if (!deletedBook) {
        res.status(404).json({ error: 'Book not found' });
      } else {
        res.json(deletedBook);
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

export { router };