// lib/mongodb.js
import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://xander:<xander4>@dropship.0sagt.mongodb.net/?retryWrites=true&w=majority&appName=dropship"; // Store your connection string in an environment variable

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so the MongoClient is not constantly created
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

clientPromise.then(() => console.log('Connected to Mongodb ')).catch((err) => console.error('Failed !!', err )) ;


export default clientPromise;