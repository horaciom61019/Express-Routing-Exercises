const express = require('express');
const app = express();
const ExpressError = require('./expressErrors');

const { convertAndValidateNumsArray, findMode, findMean, findMedian } = require('./helpers');


function validateNums(numStrings){
    let nums = convertAndValidateNumsArray(numStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }
    return nums
};


app.get('/mean', (req, res, next) => {
    
    if (!req.query.nums) {
        throw new ExpressError('Numbers are required', 400);
    };

    let numStrings = req.query.nums.split(',');

    nums = validateNums(numStrings);
    
    let result = {
        operation: 'mean',
        result: findMean(nums),
    };

    return res.send(result);
});


app.get('/median', function(req, res, next) {
    
    if (!req.query.nums) {
        throw new ExpressError('Numbers are required', 400);
    };

    let numStrings = req.query.nums.split(',');
    
    nums = validateNums(numStrings);
  
    let result = {
      operation: "median",
      result: findMedian(nums)
    }
  
    return res.send(result);
});


app.get('/mode', function(req, res, next) {
    
    if (!req.query.nums) {
        throw new ExpressError('Numbers are required', 400);
    };

    let numStrings = req.query.nums.split(',');
    
    nums = validateNums(numStrings);
  
    let result = {
      operation: "mode",
      result: findMode(nums)
    }
  
    return res.send(result);
});


/** general error handler */

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
  
    return res.json({
      error: err,
      message: err.message
    });
});


app.listen(3000, () => {
    console.log(`Server starting on port 3000`);
});