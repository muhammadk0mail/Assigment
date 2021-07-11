// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a
// new variable titled fullName. Greet the user using his full name.

/*
var fname= prompt('Enter your First name');
var Lname= prompt('Enter your Last name');

var fullName = fname +' '+ Lname;

alert('Welcome! '+ fullName);
*/

// 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length
// of user input in your browser.
// var name = 'Samsung galaxy S6 Edge Plus';
// alert('The lenght of the string is: '+name.length);

// Write a program to find the index of letter “n” in
// the word “Pakistani” and display the result in your browser 

// var str = 'pakistani';
// for (var i = 0; i < str.length; i++) {
// if (str.slice(i, i + 1) === "n") {
//     alert("n is found");
// break;
// }
// }

// Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser.


// var str = 'Hello World';
// for (var i = 0; i < str.length; i++) {
// if (str.slice(i, i + 1) === "l") {
//     alert("n is found");
// break;
// }
// }

// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result
// in your browser.
/*
var str = "Pakistani";
alert(str.charAt(3));
*/


// 6. Repeat Q1 using string concat() method.

// var fname= prompt('Enter your First name');
// var Lname= prompt('Enter your Last name');

// document.write(fname.concat(Lname));


// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result
// in your browser.

// var city='hyderabad';
// for (var i = 0; i < city.length; i++) {
// if (city.slice(i, i + 5) === "hyder") {
//         var newWord = city.replace('Hyder','Islam')
//         console.log(newWord)
// break;
// }
// }

// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result
// in your browser. 

// var message = 'Ali and Sami are best friends. They play cricket and football together';
// for (var i = 0; i < message.length; i++) {
// if (message.slice(i, i + 3) === "and") {
//         var newWord = message.replace(/and/g,'&')
//         document.write(newWord)
// break;
// }
// }

// Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

// var str=472;
// document.write('Value of: '+str+'<br>');
// document.write('type is: '+typeof(str)+'<br>');
// str = str.toString();
// document.write('Value of: '+str+'<br>');
// document.write('type is: '+typeof(str)+'<br>');


// 10. Write a program that takes user input. Convert and show the input in capital letters.
// var str1 = prompt('ENter a string');
// str1 = str1.toUpperCase();
// console.log(str1);

// 11. Write a program that takes user input. Convert and show the input in title case.
// var str = prompt('Enter a string');
// const str2 = str.charAt(0).toUpperCase() + str.slice(1);
// console.log(str2);


// 12. Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser
// var num = 35.36 ;
// num = num.toString(num);
// num2=num.slice(2,3);
// console.log(num2);

// 13. Write a program to take user input and store username in a variable. If the username contains any
// special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .-

// var num = prompt("Enter your user name");
// for(var i=0;i<=num.length;i++)
// {
// if(num == '!' || num== '@' || num=='#' || num=='$' || num == '%' || num== '^' || num=='&' || num=='*'){
//     alert('Plz enter Valid usename');
// }
// }

// 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array. After searching, prompt the user whether the given item is found in the list or not.
// Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability.
/*
var user= prompt('Welcome to ABC Bakery Bakery.What do you want to order sir/madam')
var A =['cake', 'apple pie', 'cookie', 'chips', 'patties'];
for (var i=0; i<= A.length;i++){
    if(A[i]==user || user==str2 || user==str3 || user==str4)
    {
        alert('It is available in my store');
        break;
    }
}
*/

// 15. Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.
// -----------------------------------------------
// var pass = prompt('Enter a password');
// for(var i=0;i < pass.lenght;i++){
// if(pass.lenght > 7){
//     alert('Condition is true');
// }
// }
// ------------------------------------------------

// 16. Write a program to convert the following string to an array using string split method.
// var university = “University of Karachi”; Display the elements of array in your browser

// var university = 'University of Karachi';
// for(var i=0; i<university.length;i++)
// {
//     if(university.slice(i,i+1))
//     {
//         document.write(university.slice(i,i+1)+'<br>')
        
//     }
// }


// 17. Write a program to display the last character of a user input.
/*
var str = "GeeksforGeeks";
var res = str.charAt(str.length-1);
alert(res);
*/

// 18. You have a string “the quick brown fox jumps over the lazy dog”. Write a program to
// count number of occurrences of word “the” in given string
/*
var str = 'The quick brown fox jumps over the lazy dog';
for(var i=0;i<str.length;i++){
    if(str.slice(i,i+3) == 'the'){
    // alert('hello');

    var count=0;
    count++;

    }
    // document.write(str.slice(i,i+3)+'<br>')
}
*/