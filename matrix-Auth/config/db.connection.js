const mongoose = require('mongoose');

const dbconnect = () => {
    mongoose.connect("mongodb+srv://organics:Heer2005@cluster0.bp0a5oh.mongodb.net/blog")
        .then(() => console.log('kya be ladale.. 😀 !!'))
        .catch((err) => console.log(err))
}

module.exports = dbconnect;