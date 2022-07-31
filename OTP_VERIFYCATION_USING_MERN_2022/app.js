import express from 'express';
const app = express();
import dotenv from 'dotenv'
import web from './routes/web.js'


dotenv.config();

// app.get('/',(req,res)=>{
//         res.send('hello world')
// })

app.use('/api/user',web);

app.use(express.json());

// app.use(express.urlencoded({extended:false}));

app.listen(process.env.PORT,()=>{
        console.log(`server is running at the http://localhost:${process.env.PORT}`);
})