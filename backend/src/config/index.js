import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 4000;
const DATABASE_URL = process.env.DATABASE_URL;
const NODE_ENV = process.env.NODE_ENV || 'development';
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

export{
    PORT,
    DATABASE_URL,
    NODE_ENV,
    JWT_SECRET
}