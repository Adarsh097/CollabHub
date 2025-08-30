import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 4000;
const DATABASE_URL = process.env.DATABASE_URL;
const NODE_ENV = process.env.NODE_ENV || 'development';
const JWT_SECRET = process.env.JWT_SECRET;
const CLERK_PUBLISHABLE_KEY = process.env.CLERK_PUBLISHABLE_KEY;
const CLERK_SECRET_KEY = process.env.CLERK_SECRET_KEY;
const STREAM_API_KEY = process.env.STREAM_API_KEY;
const STREAM_SECRET_KEY = process.env.STREAM_SECRET_KEY;
const SENTRY_DSN = process.env.SENTRY_DSN;
const INGEST_EVENT_KEY = process.env.INGEST_EVENT_KEY;
const INTGEST_SIGNING_KEY = process.env.INTGEST_SIGNING_KEY;
const CLIENT_URL = process.env.CLIENT_URL;

export{
    PORT,
    DATABASE_URL,
    NODE_ENV,
    JWT_SECRET,
    CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY,
    STREAM_API_KEY,
    STREAM_SECRET_KEY,
    SENTRY_DSN,
    INGEST_EVENT_KEY,
    INTGEST_SIGNING_KEY,
    CLIENT_URL
}