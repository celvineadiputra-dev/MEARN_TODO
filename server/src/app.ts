import express, {Request, Response} from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const {MONGODB_ATLAS_USERNAME,MONGODB_ATLAS_PASSWORD,MONGODB_ATLAS_DBNAME} = process.env

const URL = `mongodb+srv://celvine:${MONGODB_ATLAS_PASSWORD}@cluster0.rhwyt.mongodb.net/${MONGODB_ATLAS_DBNAME}?retryWrites=true&w=majority`
const OPTIONS = {
    userNewUrlParser: true,
    useUnifiedTopology : true
}


const APP = express();
const PORT = 8080;

APP.use(cors())

APP.get("/", (req:Request, res:Response) => {
    res.send("HELLO, WORLD")
})

APP.get("/about",(req:Request, res:Response)=>{
    res.send("Hello This Route About")
})

mongoose.set('useFindAndModify', true)
mongoose.connect(URL, OPTIONS).then(()=>{
    APP.listen(PORT, ()=>{
        console.info(`App Listening in https://localhost:${PORT}`);
    });
})
.catch(error=>{
    throw error
})