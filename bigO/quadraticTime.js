// Log all pairs of the indices of the array

const boxes = ["a","b","c","d","e"];

function logAllPairsOfArray(array) {
    for (let i=0; i < boxes.length; i++) {
        for (let j=0; j < boxes.length; j++) {
            console.log(array[i], array[j]);
        }
    }
}

logAllPairsOfArray(boxes);

//BigO: O(n ^ 2)