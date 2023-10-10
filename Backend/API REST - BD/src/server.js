import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const server = express();

server.use(express.static(path.join('../public')));
server.use(express.urlencoded({extended: true}));

server.use((req, res) => {
    res.status(404);
    res.json({error: 'Endpoint não encontrado.'});
});

server.listen(process.env.PORT);