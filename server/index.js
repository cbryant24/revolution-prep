const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
const path = require('path');


const db_connect = 'mongodb://rev_prep:abc12345@ds145790.mlab.com:45790/revolution-prep'
const Courses = require('./courses')

mongoose.connect(db_connect, {
    useMongoClient: true
})

app.use(cors());

app.use(express.static(path.resolve(__dirname, '..', 'server', 'public')))

app.get('/', (req, res) => {
    res.end()
})

app.get('/get-courses', (req, res) => {
    Courses.find( (err, courses) => {
        if (err) console.log('Their has been an error', err)

        res.send(courses);
    })
})

app.listen(3005, console.log('listening on port 3005'))