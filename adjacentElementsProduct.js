//
// https://app.codesignal.com/arcade/intro/level-2/xzKiBHjhoinnpdh6m/solutions

function adjacentElementsProduct(inputArray) {
    let max
    for (let i = 0; i < inputArray.length - 1; i++) {
        let sum = inputArray[i] * inputArray[i+1]
        if (sum > max || i === 0)
            max = sum
    }
    console.log(max)
    return max
}
