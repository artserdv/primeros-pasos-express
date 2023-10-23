import Express from 'express';

const app: Express.Application = Express();
const PORT: number = 3000;

app.get("/", (req: Express.Request, res: Express.Response) => {
    res.send("Hola Mundo");  // metodos: send, render, jason
})

app.listen(PORT, () => {
    console.log(`App is listening at por ${PORT}`);
});

