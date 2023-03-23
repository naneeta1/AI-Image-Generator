import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongdb/connect.js';
import postRoutes from './routes/postRoutes.js';
import generalRoutes from './routes/generalRoutes.js';


dotenv.config();


const app= express();
app.use(cors());
app.use(express.json({limit:'50mb'}));

app.use('/api/v1/post',postRoutes);
app.use('/api/v1/general',generalRoutes);

app.get('/',async(req,res)=>{
    res.send('Hello World!!');
})


const startServer =()=>{
    try{
        connectDB(process.env.MONGO_URL);
        app.listen(7000, ()=> console.log('server has started on port 7000'));
    }
    catch(error){
        console.log(error);
    }
    
}

startServer();