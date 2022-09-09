const { template } = require('@babel/core')

function concatArray(array1, array2) {
  //code here
  if (array1 == null && array2 == null) {
    return undefined
  } else if (array1 == null) {
    return array2
  } else if (array2 == null) {
    return array1
  } else {
    return array1.concat(array2)
  }
}
module.exports = concatArray
