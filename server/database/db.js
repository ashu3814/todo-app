import mongoose from 'mongoose';

const connection = () => {
    const MONGODB_URL ='mongodb://127.0.0.1:27017/todo';
    mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

    mongoose.connection.on('connected', () => {
        console.log('Database Connected Successfully..');
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    });

    mongoose.connection.on('error', (error) => {
        console.log('Error while connecting with the database', error.message);
    });
};

export default connection;
