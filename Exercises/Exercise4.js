
//Reverse a string

function reverse1(str) {
    if (!str && str.length < 2 && typeof str === 'string') {
        console.log("Your input is not acceptable.")
    }
    for (let i = str.length-1; i >= 0; i--) {
        backwards = [];
        backwards.push(str[i]);

    }
    return backwards.join('');
}
/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function reverse2(str) {
    str.split('').reverse().join('');
}

reverse2('My name is Tomisin');