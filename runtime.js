const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend1 = perf.stop();  // Stops timer and save time results

perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend2 = perf.stop();

perf.start();                     // Starts timer
doublerAppend(smallArray);
let resultsAppend3 = perf.stop();

perf.start();                     // Starts timer
doublerAppend(mediumArray);
let resultsAppend4 = perf.stop();

perf.start();                     // Starts timer
doublerAppend(largeArray);
let resultsAppend5 = perf.stop();


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert1 = perf.stop();

perf.start();
doublerInsert(tinyArray);
let resultsInsert2 = perf.stop();

perf.start();
doublerInsert(smallArray);
let resultsInsert3 = perf.stop();

perf.start();
doublerInsert(mediumArray);
let resultsInsert4 = perf.stop();

perf.start();
doublerInsert(largeArray);
let resultsInsert5 = perf.stop();


console.log("insert", resultsInsert1.preciseWords);
console.log("insert", resultsInsert2.preciseWords);
console.log("insert", resultsInsert3.preciseWords);
console.log("insert", resultsInsert4.preciseWords);
console.log("insert", resultsInsert5.preciseWords);


console.log("append", resultsAppend1.preciseWords);
console.log("append", resultsAppend2.preciseWords);
console.log("append", resultsAppend3.preciseWords);
console.log("append", resultsAppend4.preciseWords);
console.log("append", resultsAppend5.preciseWords);


//tiny 23.4 us 16.8 us
//small 32.4 us 17.8 us
//medium 373.4 us 93 ms
//large 21.1 ms 918.6 us
//extralarge 2.2s 5.5ms

// The insert function appears to scale quadratically, and the append function seems to scale linearly
//The append function scales better because it only had to go into milliseconds once, whereas the insert function
//had to go into normal seconds in runtime.
//I was able to tell which scaled better given the information that the program outputted