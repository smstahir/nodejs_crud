require('./models/db');

//create an express function
const express = require('express');

const app = express();
const employeeController = require('./controllers/employeeController');
const path = require('path');
const expressHandlebars = require('express-handlebars');
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));

app.engine('hbs', expressHandlebars({  extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/'  }));

app.set('view engine', 'hbs');

//in order to start server
app.listen(5000, (err) => {
    if (!err) console.log('express server started at port: ', 5000);
    else {
        console.log('server not started :', err);
    }
});

//addding route to employee controller and base uri
app.use('/employee', employeeController);
