const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/finTracker';

export const connectToDB = () => {
    mongoose.connect(URL, (err, db) => {
        if (!err) {
            console.log('Successful connected to MongoDB')
        }
    });
    mongoose.Promise = global.Promise;
    var db = mongoose.connection;
    db.on('error', (error) => {
        console.log('MongoDB connection error:', error)
    });
}