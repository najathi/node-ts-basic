"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const addNums = (a, b) => a + b;
const multiNums = (a, b) => a * b;
app.get('/', (req, res, next) => {
    console.log(addNums(5, 6));
    res.send('Hello Node ' + multiNums(5, 5));
    next();
});
app.listen(5000, () => { console.log('Server Running'); });
