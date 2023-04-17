import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connection = async (username, password) => {

    //const URL = `mongodb+srv://${username}:${password}@crud-app.demzffi.mongodb.net/?retryWrites=true&w=majority`;
    const URL = process.env.DB_URL;
    //const URL = `mongodb://db:27017/users`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database', error);
    }
}

export default connection;