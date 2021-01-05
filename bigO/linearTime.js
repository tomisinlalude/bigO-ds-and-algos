const large = new Array(10000).fill('nemo');

function findNemo(array) { // O(n)
    for (let i=0; i < array.length; i++) { //O(n)
        if (array[i] === "nemo") {
            console.log("Found NEMO!");
        }
    }
}

findNemo(large);

//BigO: O(n)