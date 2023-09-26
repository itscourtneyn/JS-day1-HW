//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

    function findWords(string, names) {
      let found = false;
      
      for (let i = 0; i < names.length; i++) {
        let name = names[i].toLowerCase(); 
        if (string.toLowerCase().includes(name)) {
          console.log(`Matched ${names[i]}`);
          found = true;
        }
      }
    
      if (!found) {
        console.log("No Matches");
      }
    }
    
console.log(findWords(dog_string, dog_names));


//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        arr.splice(i, 1, "even index");
      }
    }
  }
  
  let arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];
  replaceEvens(arr);
  console.log(arr);
  
// console.log(replaceEvens(arr))
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


// CODEWARS SOLUTIONS:

//1
let answer 
function multiply(a, b){
  answer = a * b
  return answer
}

//2
function evenOrOdd(number) {
    if(number % 2 == 0) {
      return ("Even");
      } else {
      return("Odd");
      }
    }

//3
function descendingOrder(n){
    let numStr = n.toString();
    let sortedStr = numStr.split('').sort((a, b) => b - a).join('');
    let result = parseInt(sortedStr);
    
    return result;
    }

//4
function sayHello( name, city, state ) {
    let full_name = name.join(' ')
    let welcome_message = `Hello, ${full_name}! Welcome to ${city}, ${state}!`
    return welcome_message
  }