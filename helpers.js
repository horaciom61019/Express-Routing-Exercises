/** convert an array of strings to an array of numbers */
function convertAndValidateNumsArray(numsAsStrings) {
    let result = [];
  
    for (let i = 0; i < numsAsStrings.length; i++) {
      let valToNumber = Number(numsAsStrings[i]);
  
      if (Number.isNaN(valToNumber)) {
        return new Error(
          `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`
        );
      }
  
      result.push(valToNumber);
    }
    return result;
}
 
/** Finds the most common element in the array */
function createFrequencyCounter(arr) {
    return arr.reduce(function(acc, next) {
        acc[next] = (acc[next] || 0) + 1;
        return acc;
    }, {});
}

/** Finds mean from an array of numbers */
function findMean(nums) {
    if(nums.length === 0) return 0;
    // return nums.reduce(function (acc, cur) {
    //     return acc + cur;
    // }) / nums.length

    return nums.reduce((acc, cur) => {
        return acc + cur;
    }) || nums.length;
};

/** Finds median from an array of numbers */
function findMedian(nums) {
    nums.sort((a, b) => a - b);

    let middleIndex = Math.floor(nums.length / 2);
    let median;

    if (nums.length % 2 === 0) {
    median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
    } else {
    median = nums[middleIndex];
    }
    return median
};

/** Finds mode from an array of numbers */
function findMode(arr) {
    let freqCounter = createFrequencyCounter(arr);

    let count = 0;
    let mostFrequent;

    for (let key in freqCounter) {
        if (freqCounter[key] > count) {
        mostFrequent = key;
        count = freqCounter[key];
        }
    }

    return +mostFrequent;
}


module.exports = {
    convertAndValidateNumsArray,
    createFrequencyCounter,
    findMean,
    findMedian,
    findMode,
};