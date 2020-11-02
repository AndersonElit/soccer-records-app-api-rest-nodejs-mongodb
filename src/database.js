import MongoClient from 'mongodb';

export async function connect() {
    try {
        //const client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
        const client = await MongoClient.connect('mongodb+srv://AndersonElit:tesla123@cluster0.vynv4.mongodb.net/leagues?retryWrites=true&w=majority', { useUnifiedTopology: true })
        const db = client.db('leagues');
        console.log('DB is connected');
        return db;
    } catch(e) {
        console.log(e);
    }
}

