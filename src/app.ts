import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import { router as bookRoutes} from './routes/bookRoutes';

const app = express();
const PORT = process.env.PORT || 4000;

//Middleware
app.use(cors());
app.use(bodyParser.json());

//connect to mongo
mongoose.connect('mongodb+srv://dario:dario@cluster0.kc50qef.mongodb.net/?retryWrites=true&w=majority');

//routes
app.use('/api/books', bookRoutes);

//start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});