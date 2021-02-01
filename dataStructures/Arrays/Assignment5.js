/**
*Given a sorted array A (sorted in ascending order), 
*having N integers, find if there exists any pair of elements 
*(A[i], A[j]) such that their sum is equal to X.
 */

//Naive solution
function twoPairSum(arr, X) {
  let arr.length = N;
  for (let i=0; i < N; i++) {
    for (let j=0; j < N; j++) {
      if (arr[1] + arrr[j] === X) {
        return true;
      }
      else if (arr[i] + arr[j] > X) {
        return false;
      }
    }
    return "No such pairs";
  }
}
//Big O: O(n^2)

//Two pointers Technique