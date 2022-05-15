const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const PORT = 3000;

app.use(session({secret: 'myrandomsecret'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/*+json' }));

const UserRoute = require('./Routes/User.route');
const LoginRoute = require('./Routes/LoginUser.route');

app.use('/user', UserRoute);


app.listen(PORT, () => {
    console.log("OVEM API IS RUNNING");
})