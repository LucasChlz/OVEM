const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const RegisterRoute = require('./Routes/RegisterUser.route');
app.use('/register', RegisterRoute);

app.listen(PORT, () => {
    console.log("OVEM API IS RUNNING");
})