import express from 'express';
import mongoose from 'mongoose';
import Videos from './dbModel.js'
import Cors from 'cors'



// App config
const app = express();
const port = process.env.PORT || 9000;
const connectionURL = 'mongodb+srv://admin:JPCzHPM730AdSi6U@cluster0.nxft9.mongodb.net/tiktok?retryWrites=true&w=majority'



// Middelware 
app.use(express.json());
app.use(Cors());

// db config
mongoose.connect(connectionURL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// api endpoints 
app.get('/', (req, res) => {
    res.status(200).send('hello World')
})


app.post('/db/posts', (req, res) => {
    const dbVideos = req.body;
    
    Videos.create(dbVideos, (err, data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)  
        }
    })
})

app.get('/db/posts', (req, res) => {   
    Videos.find((err, data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})


// listner
app.listen(port, ()=> console.log(`Listening on local host ${port}`) )