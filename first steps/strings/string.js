/*
1. Creating a string
2. single Quote VS. Double quotes 
3. Concatenatign strings using template string 
4. Contatination sunig '+'
5. Combine number with string 
6. make a number to string using'toString()'
7. We can use multi line string usnig  template string 
8. length property to check string length - namesStringCheck.length
9. Using Includes to find a substring 




*/

// Full Details About Strings 

/*


1. Creating a String 
(Exp) => 
const string = 'The revolution will not be televised.';
console.log(string)
===============================


2. single Quote VS. Double quotes 
(Exp) => 
we can use it any one of them 
we can't use single quote inside single quote then  - we have to use escaping charecter - \
we use single quote inside the double quotes
if we use single quote  double quotes in same place we will get an error


==============================
3.Concatenatign strings using template string 
(Exp) => 
concatination mean joining together 
const firstName = "Ashikur";
const lastName = "Rahman";

const fullName = `${firstName} ${lastName}` // Ashikur Rahman

const one = 'Hello, ';
const two = 'how are you?';
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"


======================================

4. Contatination sunig '+'
(Exp)=>

const greeting = "Hello";
const name = "Chris";
console.log(greeting + ", " + name); // "Hello, Chris"

========================================
5. Combine number with string 
(Exp) => 

const myNum = 20
const myString = " Hello"

const combine = myNum + myString  // 20 Hello 

============================================

7. We can use multi line string usnig  template string 
(Exp) => 

const output = `I like the song.
I gave it a score of 90%.`;
console.log(output); // We can use multiline string 

===========================================
8. length property to check string length - namesStringCheck.length

const browserType = 'mozilla';
browserType.length; // 7

============================================

9. Using Includes to find a substring 

const textFound = "Mozilla Firefox"

if(textFound.includes('zilla')){
    console.log("Its found")
}else{
    console.log("No zilla is here") // it's found
}



*/
