import express, { Application, Request, Response, NextFunction } from 'express';

const greeting: string = "Hello"

const numbers: number[] = [1, 2, 3];

const app: Application = express();

const add = (a: number, b: number): number => a + b;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    console.log('Sum is', add(2, 3));
    res.send('Hello from 9000');
});

app.listen(9000, () => {
    console.log('App is listening on port 9000');
})