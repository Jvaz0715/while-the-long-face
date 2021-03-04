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
    let outputString = '';
    while (outputString.length < 10) {
        outputString = outputString + str;
    }
    
    return outputString;

}

function makeDivisible(x, y) {
    // Your code here
    while (x % y !== 0) {
        x += 1;
    }
    return x;
}

module.exports = {
    numberDoubler,
    stringRepeater,
    makeDivisible
};