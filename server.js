const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 4000;

const todosRouter = require('./Routes/ToDos')
app.set('view engine', 'ejs');
app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));


app.use('/todos',todosRouter)


app.listen(PORT, ()=>{
    console.log(`App runing on port ${PORT}`);
})