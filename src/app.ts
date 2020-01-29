import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();

const addNums = (a: number, b: number): number => a + b;

const multiNums = (a: number, b: number): number => a * b;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
	console.log(addNums(5, 6));
	res.send('Hello Node ' + multiNums(5, 5));
	next();
});

app.listen(5000, () => { console.log('Server Running') });

