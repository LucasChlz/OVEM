const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/*+json' }));

const RegisterRoute = require('./Routes/RegisterUser.route');
app.use('/create', RegisterRoute);

app.listen(PORT, () => {
    console.log("OVEM API IS RUNNING");
})