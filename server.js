const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan')
const path = require('path');
const api = require('./server/routes/api');

const port = process.env.PORT || 3000;

const app = express();
// console.log(process.env.PORT);
app.use(logger('dev'))
app.use(express.static(path.join(__dirname,'dist')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api',api)

app.get('*',(req,res) => {
	res.sendFile(path.join(__dirname,'dist/index.html'));
});

app.listen(port,function(){
	console.log(`Server Running on localhost: ${port}`);
});

