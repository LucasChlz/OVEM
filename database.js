const mongoose = require('mongoose');
const mongoURI = process.env.mongoURI

mongoose.connect("URL", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


module.exports = mongoose;  