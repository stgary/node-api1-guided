// import express from 'express' // ES2015 modules
const express = require('express'); // CommonJS modules, similar to above

const server = express();

server.use(express.json());

const hubs= [
    {
        id: 1,
        name: 'node intro',
        lessonId: 1,
        cohort: 'node 33',
    },
    {
        id: 2,
        name: 'node server side routing',
        lessonId: 2,
        cohort: 'node 33',
    },
];

server.get('/', (req, res) => {
    res.status(200).json({ hello: 'Node 33' });
});

server.get('/hubs', (req, res) => {
    res.status(200).json({ data: hubs });
});

server.post('/hubs', (req, res) => {
    const hub = req.body;
    hubs.push(hub);
    res.status(201).json({ data: hubs });
});

const port = 8000;
server.listen(port, () => console.log(`***Server is running on port ${port}***`));