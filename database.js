const mongoose = require('mongoose');

mongoose.connect("URL", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


module.exports = mongoose;  