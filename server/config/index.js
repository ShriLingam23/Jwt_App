/*
Dotenv is just a dependency module that loads environment variables from a .env file into process.env.
JWT needs a secret, so we put this secret on the .env file. 

We've already created the variables on .env file, now we need to bring them from process.env.
*/

require('dotenv').config()

module.exports = {
    env: process.env.NODE_ENV,
    mongoUri: process.env.MONGODB_URI,
    masterDb: process.env.MASTER_DB,
    serverPort: process.env.SERVER_PORT,
    serverDb: process.env.SERVER_DB,
    JWTSecret: process.env.JWT_SECRET,
}