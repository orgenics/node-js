const mongoose = require('mongoose');

const dbConnect = () =>{
    mongoose.connect('mongodb+srv://organics:Heer2005@cluster0.bp0a5oh.mongodb.net/Exam')
    .then(() => console.log('Data Base Connected'))
    .catch(err => console.log(err))
}

module.exports = dbConnect;