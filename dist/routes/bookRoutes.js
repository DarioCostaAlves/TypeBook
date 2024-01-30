"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const book_1 = __importDefault(require("../models/book"));
const router = express_1.default.Router();
exports.router = router;
//get all books
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield book_1.default.find();
        res.json(books);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
//get a specific book
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield book_1.default.findById(req.params.id);
        if (!book) {
            res.status(404).json({ error: 'Book not found' });
        }
        else {
            res.json(book);
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
//create a book
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newBook = yield book_1.default.create(req.body);
        res.status(201).json(newBook);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
//update a book
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedBook = yield book_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBook) {
            res.status(404).json({ error: 'Book not found' });
        }
        else {
            res.json(updatedBook);
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
//delete a book
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedBook = yield book_1.default.findByIdAndDelete(req.params.id);
        if (!deletedBook) {
            res.status(404).json({ error: 'Book not found' });
        }
        else {
            res.json(deletedBook);
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
