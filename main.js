function numberDoubler(num) {
    // Your code here
    //start output num at num
    let outputNum = num;
    // while outputNum is less than 100, loop
    while (outputNum < 100) {
        console.log('outputNum: ' + outputNum);
        outputNum = outputNum * 2;
    }
    // return output num
    console.log('outputnum: ' + outputNum);
    return outputNum;
}


function stringRepeater(str) {
    // Your code here
    let outputString = str;
    while (outputString.length < 10) {
        outputString = outputString + 1;
    }
    
    return outputString;

}

function makeDivisible(x, y) {
    // Your code here
}

module.exports = {
    numberDoubler,
    stringRepeater,
    makeDivisible
};