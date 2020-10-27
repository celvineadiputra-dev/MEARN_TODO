import express, {Request, Response} from 'express';

const APP = express();
const PORT = 8080;

APP.get("/", (req:Request, res:Response) => {
    res.send("HELLO, WORLD")
})

APP.get("/about",(req:Request, res:Response)=>{
    res.send("Hello This Route About")
})

APP.listen(PORT,()=>{
    console.info(`App Listening in https://localhost:${PORT}`);
})