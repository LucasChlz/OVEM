const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const PORT = 3000;

app.use(session({secret: 'myrandomsecret'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/*+json' }));

const RegisterRoute = require('./Routes/RegisterUser.route');
const LoginRoute = require('./Routes/LoginUser.route');

app.use('/create', RegisterRoute);
app.use('/login', LoginRoute);


app.listen(PORT, () => {
    console.log("OVEM API IS RUNNING");
})