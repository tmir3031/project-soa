const express = require('express')
const app = express()
const port = 80
const mongoose = require('mongoose');
const {Course} = require("../utils/database-models.js");

mongoose.connect(process.env.DATABASE_URL);

app.use(express.json())

app.get('/courses', (req, res) => {
    res.send('courses-service')
})

app.get('/courses/courses', async (req, res) => {
    try {
        const courses = await Course.find(undefined, undefined, undefined);
        res.send(courses);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

app.get(`/courses/courses/:courseId`, async (req, res) => {
    try {
        const course = await Course.findOne({_id: req.params.courseId});
        res.send(course);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
