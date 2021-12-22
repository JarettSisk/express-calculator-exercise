
// change the query to an array of numbers
const processQuery = (query) => {
    // Split at each comma and convert to array
    stringArray = query.split(',');

    // check for numeric chars only
    for (char of stringArray) {
        if (isNaN(char)) {
            return null;
        }
    }
    // Return a new array with each element converted to an number.
    numArray = stringArray.map(i => parseInt(i));

    return numArray
}

const mean = (query) => {
    let sum = 0;
    // process the query
    let numArray = processQuery(query)

    if (numArray === null) {
        return null;
    }

    // Add the sum
    for(let num of numArray) {
    
    // Convert strings to numbers and add them together
        sum += parseInt(num);
    }
    // Return the avg
    let avg = sum / numArray.length;

    return avg
}

const median = (query) => {
    const numArray = processQuery(query);
    let sorted;

    if (numArray !== null) {
        sorted = numArray.sort(function(a, b){return a-b});
    } else {
        return null;
    }


    if (sorted.length % 2 === 0) {
        let num1 = sorted[Math.round(sorted.length / 2) - 1];
        let num2 = sorted[Math.round(sorted.length / 2)];

        let answer = (num1 + num2) / 2;
        
        return answer;
    } else {
        let answer = sorted[Math.round(sorted.length / 2) - 1];

        return answer
    }

}


// Using a Map may be a better use case for this one. This only expects there to be 1 mode, and when using an object, we dont know what order the keys will be stored in, So we may not always get the first mode found if we have 2 equal modes.
const mode = (query) => {
    let numArray = processQuery(query);

    if (numArray === null) {
        return null;
    }    

    let frequencies = {};
    let highest = 1;

    numArray.forEach((num) => {
        if (!frequencies[num]) {
        // If the number does not exist in the obj, then we add it.
            frequencies[num] = 1;
        } 
        else {
            // If it already exists, we add one to the value.
            frequencies[num] += 1;
        }

    })
    for (const num in frequencies ) {
        if (frequencies[num] > highest) {
            highest = num;
        }
    }
    
    return parseInt(highest);
}


module.exports = {
    mean : mean,
    median : median,
    mode : mode
}