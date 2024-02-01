"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const bookRoutes_1 = require("./routes/bookRoutes");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
//Middleware
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
//connect to mongo
mongoose_1.default.connect('mongodb+srv://dario:dario@cluster0.kc50qef.mongodb.net/?retryWrites=true&w=majority');
//routes
app.use('/api/books', bookRoutes_1.router);
//start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
