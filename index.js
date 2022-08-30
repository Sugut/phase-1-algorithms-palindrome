function isPalindrome(word) {
  // Write your algorithm here
    const arrayValues = word.split('');
    const reverseArrayValues = arrayValues.reverse();
    const reverseString = reverseArrayValues.join('');

    if(word === reverseString) {
        console.log('True');
    }
    else {
        console.log('False');
    }
  }

/* 
  Add your pseudocode here
 // convert string to an array
 // reverse the array values
 // convert array to string

/*
Add written explanation of your solution here
// first we split the first letter
// reeverse to check the last letter
// use if condition to check if first and last string are same
// return result
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
