const { template } = require('@babe/core')

function concatArray(array1, array2) {
    //code here
    if (array1 === undefined || array2 === undefined || array1 === null || array2 === null) {
        return undefined;
    } else if (array1.length === 0 && array2.length === 0) {
        return [];
    } else if (array1.length === 0) {
        return array2;
    } else if (array2.length === 0) {
        return array1;
    } else {
        return [...array1, ...array2];
    }
}
module.exports = concatArray;
