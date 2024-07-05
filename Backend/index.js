const express = require('express')
const mongoose = require('mongoose')
const auth = require('./routes/auth')
const note = require('./routes/note')
const app = express()


mongoose.connect('mongodb://127.0.0.1:27017/inotebook',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>
{
    console.log(" mongo connection open");
})
.catch(err=>{
    console.log("oh no error mongo connection error");
    console.log(err);
})

app.use(express.json())


// routes

app.use('/api/auth', auth)
app.use('/api/notes',note)



app.listen(3000,() => {
    console.log("port 3000 listening")
})