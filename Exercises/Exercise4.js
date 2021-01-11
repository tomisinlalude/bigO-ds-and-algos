
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
/**
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

const reverse3 = str = [...str].reverse().join('');
/**
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

reverse3('My name is Tomisin');