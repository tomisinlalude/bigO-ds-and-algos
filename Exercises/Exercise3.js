/*
Analytic skills: How can you think through problems?
Coding skills: Do you write clean, high performance codes?
Technical knowledge: 
Communication skills:
*/
/*
Step by step through a problem:
1. When the interviewer says the question, write down the key points at the top, (Sorted array etc).
Make sure you have all the details. Show how organized you are.
2. Make sure you double check: What are the inputs? What are the outputs?
3. What is the most important value of the problem? Do you have time, space and memory? What is the main goal?
4. Don't be annoying and ask too many questions
5. Start with the naive/brute force approach. What is the first thing that comes to mind. It shows you
are able to think well and critically. (You don't need to write this code, just think about it)
6. Tell them why this approach is not the best (i.e O(n^2 or higher, not readable etc))
7. Walk through your approach, comment things and see where you may be able to break things. Any 
repititions, bottlenecks, like O(n^2) or unnecessary work? Did you use all the info your interviewer gave you?
8. Before you start coding, walk through your code and write down the steps you are going to do.
9. Modularize your code from the very beginning. Break up your code into beautiful small pieces and just
add comments if you ne
10. Start actually writing your code now. Keep in mind that the more you prepare and understand what
you need to code, the better
11. Think abour error checks and how you can break this code. Never make assumptions about the input. Assume
people are trying 
12.Don't use bad conflicting names like i and j. Write code that reads well
13. Test your code: Check for no params, 0, undefined, null, massive arrays, async code, etc. Ask the 
interviewer if you can make
14. Finally, talk to the interviewer where you would improve the code. Does it work? Are there different
approaches? Is it readable?
15.If your interviewer is happy with the solution, the interviewer usually ends here. It is also 
common that the interviewer asks you extension questions
*/
/*
Good code checklist
- It works
- Good use of data structures
- Code re-use/Do not repeat yourself
- Modular, Makes code more readable, maintainable
- Less than O(n^2), we want to avoid nested loops
- Low space complexity, recursion can cause stack 
*/

/*
Interview question

Given two arrays, create a function that let's a user know whether these two arrays contain any common
items. For example,
const array1 = ['a', 'b', 'c', 'd', 'e']
const array2 = ['x', 'y', 'z']
should return false 
while
const array1 = ['a', 'b', 'c', 'x']
const array2 = ['x', 'y', 'z']
should return true
*/

//Solution
/*
Inputs/Parameters - Two arrays
Size - No limit
Output - Boolean (True or false)
*/

//Brute force method
const array1 = ['a', 'b', 'c', 'x']
const array2 = ['x', 'y', 'z']

function containsCommonItem(arr1, arr2) {
    for (let  i=0; i < arr1.length; i++) {
        for (let j=0; j < arr2.length; j++) {
            if(arr1[i] === arr2[j]) return true;
        }
    }
    return false;
}

containsCommonItem(array1, array2); //O(a*b)

//Better solution
const array1 = ['a', 'b', 'c', 'x']
const array2 = ['x', 'y', 'z']

function containsCommonItem2(arr1, arr2) {
    //loop through first array and create object where properties === items in the array
    let map = {};
    for (let i=0; i < arr1.length; i++) {
        if(!map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true;
        }
    }
    //loop through second array and check if item in second array exists on created account
    for (let j=0; j < arr2.length; j++) {
        if (map[arr2[j]]) {
            return true;
        }
    }
    return false;
}

containsCommonItem2(array1, array2);


