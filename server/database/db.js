import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@blog-website-shard-00-00.762v9.mongodb.net:27017,blog-website-shard-00-01.762v9.mongodb.net:27017,blog-website-shard-00-02.762v9.mongodb.net:27017/?ssl=true&replicaSet=atlas-ky25rc-shard-0&authSource=admin&retryWrites=true&w=majority&appName=blog-website`;
    try {
         mongoose.connect(URL, {useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;