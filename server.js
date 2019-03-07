import express from 'express';
import expressGraphQL from 'express-graphql';
import mongoose, { mongo } from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const db = process.env.mongoURI;

mongoose.connect(
    db,
    {
        useCreateIndex: true,
        useNewUrlParser: true
    }
)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use(
    "/graphql",
    cors(),
    bodyParser.json(),
    expressGraphQL({
        schema,
        graphiql: true
    })
);
// const express = require('express');
// const expressGraphQL = require('express-graphql');
// const schema = require('./schema.js');

// const app = express();
// const PORT = process.env.PORT || 4000;

// app.use('/graphql', expressGraphQL({
//     schema: schema,
//     graphiql: true
// }))

app.listen(4000, () => {
    console.log(`Server is running on port ${PORT}`);
});