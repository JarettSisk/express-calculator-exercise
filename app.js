
const express = require('express');
const { isNull } = require('lodash');

const ExpressError = require('./expressError.js');

const operations = require('./operations.js')

// Instantiate the app
const app = express();

// Routes
app.get('/mean', (req, res, next) => {
    try {
        // Get the average
        let avg = operations.mean(req.query.nums);
        // If NaN, then throw a new Express Error
        if(isNull(avg)) {
            throw new ExpressError('Invalid query input. Please only user numbers!', 400);
        }
        console.log(`The mean is ${avg}`)
        return res.send(`The mean is ${avg}`);

    } catch (error) {
        // If error is thrown, send it to the error handler below.
        next(error);
    }
        
})

app.get('/median', (req, res, next) => {
    try {
        // Get the average
        let median = operations.median(req.query.nums);
        // If NaN, then throw a new Express Error
        if(isNull(median)) {
            throw new ExpressError('Invalid query input. Please only user numbers!', 400);
        }
        console.log(`The median is ${median}`)
        return res.send(`The median is ${median}`);

    } catch (error) {
        // If error is thrown, send it to the error handler below.
        next(error);
    }
        
})

app.get('/mode', (req, res, next) => {
    try {
        // Get the average
        let mode = operations.mode(req.query.nums);
        // If NaN, then throw a new Express Error
        if(isNull(mode)) {
            throw new ExpressError('Invalid query input. Please only user numbers!', 400);
        }
        console.log(`The mean is ${mode}`)
        return res.send(`The mode is ${mode}`);

    } catch (error) {
        // If error is thrown, send it to the error handler below.
        next(error);
    }
        
})

// Error handler
app.use((error, req, res, next) => {
    res.status(error.status).send(error.message);
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
})