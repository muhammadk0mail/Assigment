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

// --------------------------------------

// Chapter 26-30


// 1. Write a program that takes a positive integer from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
/*
var num = 3.14234;
var roundof = Math.round(num);
var cielof = Math.ceil(num);
var floorof = Math.floor(num);

document.write('Round of Value: '+roundof +'<br><br>');
document.write('Ciel of Value: '+cielof +'<br><br>');
document.write('Floor of Value: '+floorof +'<br><br>');*/


// 2. Write a program that takes a negative floating point number from user & display the following in your
// browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

/*

var num = -3.14234;
var roundof = Math.round(num);
var cielof = Math.ceil(num);
var floorof = Math.floor(num);

document.write('Round of Value: '+roundof +'<br><br>');
document.write('Ciel of Value: '+cielof +'<br><br>');
document.write('Floor of Value: '+floorof +'<br><br>');
*/

// 3. Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

/*
var Nun = prompt("enter a value to find the prompt value"); 
    if (Num < 0) 
        {
            Num = (-1) * Num;
            document.write(" " + Num);
        }
    else
        {
        document.write(" " + Num);
        }
*/

// 4. Write a program that simulates a dice using random() method of JS Math class.
// Display the value of dice in your browser:
/*
var randomNumber = Math.random();
var afterConvertingInToWholeNumbers = Math.floor((randomNumber*6)+1);

alert('The Dice value is: '+afterConvertingInToWholeNumbers);
*/

// 6. Write a program that shows a random number between 1 and 100 in your browser
/*
var randomNumber = Math.random();
var afterConvertingInToWholeNumbers = Math.floor((randomNumber*100)+1);

alert('random number between 1 to 100 is : '+afterConvertingInToWholeNumbers);
*/

// 7. Write a program that asks the user about his weight. Parse the user input and display his weight
// in your browser. Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

/*
var kg = prompt('enter your weight');
var prettyTotal = kg.toFixed(1);

prettyTotal = prettyTotal.slice(0,3).toLowerCase()

for(var i=0; i<prettyTotal.length; i++){
        alert(prettyTotal.slice(0,3))
    
}
*/

// 8. Write a program that stores a random secret number from 
// 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret 
// number, congratulate the user.

/*
var userinput = prompt('enter a value to check whether the value is matched or not From (1-10)');
var num = Math.random();
var afterConvertingInToWholeNumbers = Math.floor((num*10)+1);
 
if (userinput == afterConvertingInToWholeNumbers)
{
    alert('You have succesfully guess the value');
}
else{
    alert('Tryagain Sorry you have guess wrong value');
}
*/


// Chapter 31-34


// 1. Write a program that displays current date and time in your browser.
/*
var date = new Date;
document.write(date);
*/

// 2. Write a program that alerts the current month in words. For example December.
/*
var date = new Date;

if(date.getMonth() == 0)
    {
        alert('Current Month is: January');
    }
else if(date.getMonth() == 1)
    {
        alert('Current Month is: febuary');
    }
    else if(date.getMonth() == 2)
    {
        alert('Current Month is: March');
    }
    else if(date.getMonth() == 3)
    {
        alert('Current Month is: April');
    }else if(date.getMonth() == 4)
    {
        alert('Current Month is: May');
    }else if(date.getMonth() == 5)
    {
        alert('Current  Month is: June');
    }else if(date.getMonth() == 6)
    {
        alert('Current Month is: july');
    }else if(date.getMonth() == 7)
    {
        alert('Current Month is: August');
    }else if(date.getMonth() == 8)
    {
        alert('Current Month is: September');
    }
    else if(date.getMonth() == 9)
    {
        alert('Current Month is: October');
    }
    else if(date.getMonth() == 10)
    {
        alert('Current Month is: November');
    }
    else{
        alert('Current Month is: December'); 
    }
*/

// 3. Write a program that alerts the first 3 letters of the current day,
// for example if today is Sunday then alert will show Sun.

/*
var date = new Date;

if(date.getDay() == 0)
    {
        alert('Current Month is: Sunday');
    }
else if(date.getDay() == 1)
    {
        alert('Current Month is: Monday');
    }
else if(date.getDay() == 2)
{
    alert('Current Month is: Tuesday');
}
else if(date.getDay() == 3)
{
    alert('Current Month is: Wednesday');
}
else if(date.getDay() == 4)
{
    alert('Current Month is: Thursday');
}
else if(date.getDay() == 5)
{
    alert('Current Month is: Friday');
}
else if(date.getDay() == 6)
{
    alert('Current Month is: Saturday');
}
*/

// 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

/*
var date = new Date;
if(date.getDay() == 6 || date.getDay() == 0){
    alert('Its a Fun day');
}
else{
    alert('Its a Work day');
}
*/

// 5. Write a program that shows the message “First fifteen days of the month”
// if the date is less than 16th of the month 
// else shows “Last days of the month”.
/*
var date = new Date;
if (date.getDate()<16)
    {
        alert('First fifteen days of the month');
    }
else{
    alert('Last days of the month');
}
*/

// 6. Write a program that determines the minutes since midnight, Jan. 1, 1970
// and assigns it to a variable that hasn't been declared beforehand. Use any variable you like 
// to represent the Date object.

/*
var date = new Date;
var mint = date.getTime();
alert(mint);
*/

// 7. Write a program that tests whether it's before noon and 
// alert “Its AM” else “its PM”.
/*
var date = new Date;

if(date.getHours() < 12)
{
    alert('its AM');
}
else{
    alert('its PM');
}
*/
// 8. Write a program that creates a Date object for the last day of the last month of 2020
// and assigns it to variable named laterDate.
/*
var laterDate = new Date('Dec 31, 2021');
alert('Later date is: '+ laterDate);
*/

// 9. Create a date object of the starting date of this Ramadan 
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

/*
var date = new Date();
var pastdate = new Date("June 30, 2015");
numOfDays=Math.round((date - pastdate) / (1000 * 60 * 60 * 24));
alert(numOfDays + ' days have passed since 1st Ramadan, 2015');
*/


// 10. Write a program that displays in your browser the seconds that elapsed between the reference date
// and the beginning of 2015.
/*
var date = new Date();
var pastdate = new Date("Jan 01, 2015");
numOfDays=Math.round((date - pastdate));
alert('On Refrence date '+pastdate + ' , ' + numOfDays +' second has passed since beginning of 2015');
*/

// 11. Create a Date object for the current date and time. 
// Extract the hours, reset the date object an hour ahead and 
// finally display the date object in your browser.

// var date = new date();
// var lasthour = new date("13:15:00");
// alert(lasthour);


// 12. Write a program that creates a date object and show the 
// date in an alert box that is reset to 100 years back?
/*
var date = new Date();
var pastdate = new Date("1921");
alert(' Current date '+date + ' 100 year back date: '+pastdate);
*/

// 13. Write a program to ask the user about his age. Calculate 
// and show his birth year in your browser.
/*
var date1 = new Date;
var date = date1.getFullYear();
var age = prompt('Enter your age');

var birthyear = (date - age) 
alert(birthyear);
*/

// 14. Write a program to generate your K-Electric bill in your browser.
// All the amounts should be rounded off to 2 decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)

/*
var date = new Date;
var heading = 'K Electric Bill';
var Customer_Name = 'Muhammad Komail';
var month = 'Febuary';
var unit = 410;
var CPunit = 16;
var lsc = 350;

document.write('<h1>'+heading +'</h1> ');
document.write('Custumer Name:'+Customer_Name +'<br>');
document.write('Month:'+ month +'<br>');
document.write('Unit:'+unit +'<br>');
document.write('Charges per unit:'+CPunit +'<br>');

var nap =  unit * CPunit;
var gap = nap + lsc;

document.write('Net Amount Payable (within Due Date) :' + nap + '<br>');
document.write('Late Payment Surcharge: '+ lsc + '<br>')
document.write(' Gross Amount Payable (after Due Date) :' + gap + '<br>');

*/

// CHAPTER 35-38

// 1. Write a function that displays current date & time in your browser.
/*
function currentTime(){
    var date = new Date;
    alert(date);
}
currentTime();
*/

// 2. Write a function that takes first & last name and then it greets the user using his full name.
/*
function greeting(){
    var firstname = prompt('Enter you first name');
    var lastname = prompt('Enter you Last name');

    alert('Welcome '+firstname +' '+lastname);
}
greeting();
*/

// 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.
/*
function addition(){
    var num1 = +prompt('Enter first number');
    var num2 = +prompt('Enter Second number');
    var total = num1 + num2;
    return total;
}
var total = addition();
alert(total);
*/

// 4. Calculator:
// Write a function that takes three arguments num1, num2 
// & operator & compute the desired operation. Return and 
// show the desired result in your browser.

/*
function calculator(){
    alert('1: For Addition'+'\r\n'+'2: For Subtraction'+'\r\n'+'3: For Multiplication'+'\r\n'+'4: For Division'+'\r\n');
    
    var choice = +prompt('Enter your choice');
    
    switch (choice) {
        case 1:
            add();
            break
            case 2:
                sub();
                break
                case 3:
                    mul();
                    break
                    case 4:
                        div();
                        break
                        
                        default:
                            alert('you have entered wrong choice')
                        }

function add(){
    var num1 = +prompt('Enter first number');
    var num2 = +prompt('Enter Second number');
    var total = num1 + num2;
    total = total.toFixed(2);
    alert(total);
}

function mul(){
    var num1 = +prompt('Enter first number');
    var num2 = +prompt('Enter Second number');
    var total = num1 * num2;
    total = total.toFixed(2);
    alert(total);
}
function sub(){
    var num1 = +prompt('Enter first number');
    var num2 = +prompt('Enter Second number');
    var total = num1 - num2;
    total = total.toFixed(2);
    alert(total);
}
function div(){
    var num1 = +prompt('Enter first number');
    var num2 = +prompt('Enter Second number');
    var total = num1 / num2;
    total = total.toFixed(2);
    alert(total);
}

}
calculator();
*/

// 5. Write a function that squares its argument.
/*
function square(num){
    alert(num*num);
}
square(prompt('Enter the number to find it square'));

*/

// 6. Write a function that computes factorial of a number.
/*
var userInput;
var num;
var i =1;
var fact;

function myFactor (num){    
  fact = num * i;
  for (i; i < num; i++) {
    fact = fact * i;
  }
  return fact
}

var result;
userInput = prompt("Enter Value:","");  
num = parseInt (userInput);         
result = myFactor(num);
document.write(result);
*/


// 7. Write a function that take start and end number as inputs & display counting in your browser.
/*
function counting(){
    var num1 = prompt('enter the first number');
    var num2 = prompt('enter the Second number');

    // alert(num1);
    while (num1 <= num2)
    {
        document.write(num1);
        num1++;
    }
} 
counting();
*/

// 8. Write a nested function that computes hypotenuse of a 
// right angle triangle. 
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()
/*
var base;
var perpendicular;

function calculateHypotenuse(){
    base = prompt('Enter the value of base');
    perpendicular = prompt('Enter the value of perpendicular');
    hyp= (perpendicular * perpendicular) + (base * base);
    alert('The hypotenuse is '+ hyp);
}
calculateHypotenuse();
*/

// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables
/*
(i)
function Areaofrectangle(){
    var width = prompt('Enter the width to find the area');
    var height = prompt('Enter the height to find the area');

    var A = width * height;

    alert(A);

}

Areaofrectangle();

(ii)
function Areaofrectangle(width,height){
    var A = width * height;

    alert(A);

}

Areaofrectangle(prompt('Enter the width to find the area'),prompt('Enter the height to find the area'));
*/

// 10. Write a JavaScript function that checks whether a passed string is palindrome or not?
// Write a JavaScript function that checks whether a passed string is palindrome or not? 
/*
function check_Palindrome(str_entry){
    // Change the string into lower case and remove  all non-alphanumeric characters
       var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
        var ccount = 0;
    // Check whether the string is empty or not
        if(cstr==="") {
            console.log("Nothing found!");
            return false;
        }
    // Check if the length of the string is even or odd 
        if ((cstr.length) % 2 === 0) {
            ccount = (cstr.length) / 2;
        } else {
    // If the length of the string is 1 then it becomes a palindrome
            if (cstr.length === 1) {
                console.log("Entry is a palindrome.");
                return true;
            } else {
    // If the length of the string is odd ignore middle character
                ccount = (cstr.length - 1) / 2;
            }
        }
    // Loop through to check the first character to the last character and then move next
        for (var x = 0; x < ccount; x++) {
    // Compare characters and drop them if they do not match 
            if (cstr[x] != cstr.slice(-1-x)[0]) {
                console.log("Entry is not a palindrome.");
                return false;
            }
        }
        console.log("The entry is a palindrome.");
        return true;
    }
    check_Palindrome(prompt('enter the string is palindrome'));
*/

// 11. Write a JavaScript function that accepts a string as a 
// parameter and converts the first letter of each word of the 
// string in upper case. 
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

/*
function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase(prompt('Enter the string to convert first letter of every word')));
*/


// 12. Write a JavaScript function that accepts a string as a parameter and
// find the longest word within the string. 
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

/*
function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word(prompt('Enter the string to find the longest word in string')));
*/

// 13. Write a JavaScript function that accepts two arguments, a string and a letter and
// the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments : 'JSResourceS.com', 'o'
/*
function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(char_count(prompt('Enter the string'),prompt('Enter the letter to count it string')));
*/

// 14. The GeometrizerCreate 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area is NN".
// Circumference of circle = 2πr
// Area of circle = πr

/*
function calcCircumference(radius){
    var circumference = 2 * 3.142 * radius;
    alert('The circumference of the circle is: '+ circumference);
}

calcCircumference(prompt('enter the radius to calculate the circumference of the string'));*/
/*
function calcArea(radius){
    var area =  3.142 * radius;
    area = area.toFixed(2);
    alert('The Area of the circle is: '+ area);
}

calcArea(prompt('Enter the radius to calculate the area of the string'));
*/
