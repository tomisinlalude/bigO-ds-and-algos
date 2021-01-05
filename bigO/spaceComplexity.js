
function booooo(n) {
    for (let i=0; i<n.length; i++) {
        console.log("booooo!");
    }
}

booooo([1,2,3,4,5]);

//Time Complexity: O(n)
//Space Complexity: O(1)

function arrayofHiNtimes(n) {
    let hiArray = [];
    for (let i=0; i<n; i++) {
        hiArray[i] = "Hi";
    }
    return hiArray;
}

arrayofHiNtimes(6);

//Time Complexity: O(n)
//Space Complexity: O(n)