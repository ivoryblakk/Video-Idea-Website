/*jslint es6 */
const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const mongoose = require('mongoose');
//require("babel-core").transform("code", options);

// connect to mongoose
mongoose.connect('mongodb://localhost/video-idea-website-dv', {
    useMongoClient: true
});
///////////////////////////////////////////////////////////////////////////////////////////
//
//			 MIDDLEWARE
//
///////////////////////////////////////////////////////////////////////////////////////////
app.engine('handlebars', exphbs(
    {
        defaultLayout: 'main'
    }
));
app.set('view engine', 'handlebars');

// How middle ware works
app.use( function ( req ,res, next){
   //  console.log(Date.now());
     // the value below can be passed to get and puts
     req.num = 1; 
     req.num++;
     // Sends 

     next();
}); 


///////////////////////////////////////////////////////////////////////////////////////////
//
//			 Routing
//
///////////////////////////////////////////////////////////////////////////////////////////
// This is a get request
app.get('/', (req ,res) => {
    //let test = req.num.toString();
    const title = "Welcome" 
    res.render('index', {
        title
    });
    //res.send(test);
    //req.num++;
    //res.send('INDEX');
    //console.log(req.num);
});

app.get('/about', (req ,res) => {
    res.render('about');
});


// Use put to update
//app.put()
const port = 5000;

app.listen(port, () =>{
    console.log(`Server started on ${port}`);
})