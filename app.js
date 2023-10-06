// // MATH METHODS // //
//   *CHAPTER 26-30   //

// !Q 1 Write a program that takes a positive integer from user & display the following in your browser.
// !a. number
// !b. round off value of the number
// !c. floor value of the number
// !d. ceil value of the number

// ?var UserInput = parseInt(prompt("Input Postive integer"));

// ?var number =Number(UserInput);

// ?if ( UserInput > 0 ){

//   *  // *Display the input number
//   ?  document.write("a. Number: " + number + "<br>");

//   *  // *Calculate and display round-off value
//   ?  document.write("b. Round-off value: " + Math.round(number) + "<br>");

//   *  // *Calculate and display floor value
//   ?  document.write("c. Floor value: " + Math.floor(number) + "<br>");

//   *  // *Calculate and display ceiling value  
//   ?  document.write("d. Ceil value: " + Math.ceil(number));

// ?}
// ?else{
// ?    alert("The input Integer value is Negative");
// ?}


// !Q 2 Write a program that takes a negative floating point number from user & display the following in your browser.
// !a. number
// !b. round off value of the number
// !c. floor value of the number
// !d. ceil value of the number

//? var UserInput = parseFloat(prompt("Input Negative floating number"));

//? var number = Number(UserInput);

//? if (UserInput < 0) {

//     // *Display the input number
//?     document.write("a. Number: " + number + "<br>");

//     // *Calculate and display round-off value
//?     document.write("b. Round-off value: " + Math.round(number) + "<br>");

//     // *Calculate and display floor value
//?     document.write("c. Floor value: " + Math.floor(number) + "<br>");

//     // *Calculate and display ceiling value  
//?     document.write("d. Ceil value: " + Math.ceil(number));

//? }
//? else {
//?     alert("The input value is not Negative");
//? }


// !Q 3 Write a program that displays the absolute value of a number.
// !E.g. absolute value of -4 is 4 & absolute value of 5 is 5


//? var UserInput = prompt("Input Number");

//? var number = Math.abs(UserInput);

// // *Display the input number
//? document.write("The absoulte value of " + UserInput + " is " + number);


// !Q 4 Write a program that simulates a dice using random() method of JS Math class.
// !Display the value of dice in your browser.:

//? var button = alert("Click ok button & Display value of dice");
//? var dice = Math.random();
//? var number = (dice * 6) + 1;
// // *Display the dice value // 
//? document.write("Random Dice value is " + Math.floor(number));

// !Q 5 Write a program that simulates a coin toss using random() method of JS Math class.
// !Display the value of coin in your browser

//? alert("Click ok button & Display value of coin");
//? var bigDecimal = Math.random();
//? var improvedNum = (bigDecimal * 2) + 1;
//? var numberOfStars = Math.floor(improvedNum);

//? console.log(numberOfStars)
// // *Display the coin value // 
//? if( numberOfStars > 1 ){

//?       document.write("the fliped coin is tails")}

//? else if (numberOfStars = 1) {
//? document.write("the fliped coin is heads")
//? }

// !Q 6 Write a program that shows a random number between 1 and 100 in your browser.

//? var button = alert("Click ok button & Display random number between 1 and 100");
//? var number = Math.random();
//? var whole = (number * 100 ) + 1;
//? var flooring = Math.floor(whole);
//? document.write("<b>"+"Random Number between 1 & 100 is: " + flooring);

// !Q 7 Write a program that asks the user about his weight. Parse the user input and display his weight in your browser.
// !Possible user inputs can be:
// !a. 50
// !b. 50kgs
// !c. 50.2kgs
// !d. 50.2kilograms

// //* Ask the user for their weight
//? var userInput = prompt("Please enter your weight (in kilograms):");

// //* Parse the user input and extract the numeric value
//? var weight = parseFloat(userInput);

// //* Check if the parsed value is a valid number
//? if (!isNaN(weight)) {
//     //* Display the weight in the browser
//?     document.write("Your weight is: " + weight + " kilograms");
//? } else {
//     //* If the input is not a valid number, display an error message
//?     document.write("Invalid input. Please enter a valid weight.");
//? }

// !Q 8  Write a program that stores a random secret number from 1 to 10 in a variable.
// !Ask the user to input a number between 1 and 10. If the user input equals the secret
// !number, congratulate the user.

// //* Store a random secret number from 1 to 10
//? var number = Math.random()
//? var secretNum = (number * 10 ) + 1;
//? var flooring = Math.floor(secretNum);
//? console.log(flooring);
// //* Ask the user for their Number
//? var userInput = prompt("Please enter your number")

//? if(flooring === userInput){
//?     alert("Congratulaation your number is matched with secret number")
//? }
//? else{
//?     alert("Try again! \n prevent this page from creating additional dialogs")
//? }


// // DATE METHODS // //
// *CHAPTER 31-34 //

// !Q 1 Write a program that displays current date and time in your browser.

//? var currentzone = new Date();
//? document.write(currentzone);

// !Q 2 Write a program that alerts the current month in words. For example December.


// //* Making an array of Months //

//? var Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// //* making a variable for current date //

//? var date = new Date();

// //* display the current month with alert // 

//? var currMonth = date.getMonth();

//? var month = Months[currMonth];

//? document.write("Current Month: " + month);

//? alert("Current Month: " + month);


// !Q 3 Write a program that alerts the first 3 letters of the currentday,
// !For example if today is Sunday then alert will show Sun.

// //* Making an array of Days //

//? var Days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

// //* making a variable for current date //

//? var date = new Date();

// //* display the current day with alert //

//? var currentday = date.getDay();

//? var day = Days[currentday];

//? document.write("Today is " + day);

//? alert("Today is " + day);

// !Q 4 Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

//? var Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
//? var date = new Date(); 
//? var currentday = date.getDay();
//? var day = Days[currentday];
//? var funDay = Days[0,6];
//? if (day == funDay){
//? alert("Today is "+ day +"\n"+ " Its Fun Day")
//? }
//? else {
//? alert("Today is "+ day + "\n" + " Its working day")
//? }

// !Q 5 Write a program that shows the message “First fifteen days of the month”
// !if the date is less than 16th of the month else shows “Last days of the month”.

//? let date = new Date();
//? let currentdate = date.getDay();

//? if (currentdate <= 15) {
//?     document.write("First fifteen days of the month")
//? }
//? else{
//?     alert("“Last days of the month”.")
//? }

// !Q 6 Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable
// !that hasn't been declared beforehand. Use any variable you like to represent the Date object.

// making variable for current time zone //

//? var currentDate = new Date();

//? document.write("Current Date: "+currentDate+ "<br>");

// making variable for determines the miliseconds since midnight, Jan. 1, 1970 //

//? var since1970miliseconds = currentDate.getTime();

//? document.write("Elapsed miliseconds since January 1, 1970: "+ since1970miliseconds + "<br>" );

// making variable for determines the minutes since midnight, Jan. 1, 1970 //

//? var since1970minutes = (currentDate.getTime() / 1000 ) /60 ; 

//? document.write("Elapsed minutes since January 1, 1970: ", since1970minutes);

// !Q 7 Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

//? var currentDate = new Date();
//? var currenttimehour = currentDate.getHours();
//? if(currenttimehour < 12){
//?     document.write("<center>"+"<h2>"+"It's AM")
//? }
//? else{
//?     document.write("<center>"+"<h2>"+"It's PM")
//? }

// !Q 8 Write a program that creates a Date object for the last day of the last month of 2020 and
// !assigns it to variable named laterDate.

//? var laterDate = new Date("31 December 2023");

//? document.write("<b>"+"later Date: "+ laterDate);

// !Q 9 Create a date object of the starting date of this Ramadan and alert the number of days past
// !since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015

//? var firstRamadan = new Date("March 22, 2023");
//? var currentDate = new Date();
//? var DaysSince1stRamadan = Math.floor((currentDate - firstRamadan)/( 1000 * 60 * 60 * 24 )) ;

//? document.write("<center>"+"<h1>"+ DaysSince1stRamadan+ " days have passed since 1st Ramadan, 2015"); 

// !Q 10 Write a program that displays in your browser the seconds that elapsed between the reference date and the
// !beginning of 2015.

//? var startDate = new Date();
//? let refernceDate = new Date(2015, 11, 5, 22, 50, 16)
//? var timeDifference = startDate - refernceDate;
//? var secondsElapsed = timeDifference / 1000;
//? document.write("On reference date: " + refernceDate + "<br>" + secondsElapsed + " Seconds elapsed between the reference date and the beginning of 2015")

// !Q 11 Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and
// !finally display the date object in your browser.

//? let currentDate = new Date();
//? let refernceDate = new Date(2023,9,6,6,48)
//? document.write("Current date: " + currentDate + "<br>" +" 1 hour ago,it was "+ refernceDate)

// !Q 12 Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

// //* Create a Date object for the current date
//? var currentDate = new Date();

// //* Calculate the date 100 years ago by subtracting 100 years worth of milliseconds
//? var date100YearsAgo = new Date(currentDate);
//? date100YearsAgo.setFullYear(currentDate.getFullYear() - 100);

// //* Display the date 100 years ago in an alert box
//? alert("Date 100 years ago was: " + date100YearsAgo.toDateString());

// !Q 13 Write a program to ask the user about his age. Calculate and show his birth year in your browser.

// //* Ask the user for their age
//? var age = prompt("Please enter your age:");

// //* Calculate the current year
//? var currentYear = new Date().getFullYear();

// //* Calculate the birth year by subtracting the age from the current year
//? var birthYear = currentYear - parseInt(age);

// //* Display the birth year in an alert box
//? alert("Your birth year is: " + birthYear);

// !Q 14Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2
// !decimal places. Display the following fields:
// !a. Customer Name
// !b. Current Month
// !c. Number of units
// !d. Charges per unit
// !e. Net Amount Payable (within Due Date)
// !f. Late Payment Surcharge
// !g. Gross Amount Payable (after Due Date)
// !Where,
// !Net Amount Payable (within Due Date) = Number of units * Charges per unit
// !& Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge


//? const chargesPerUnit = 15.50; // Charges per unit (replace with your actual rate)
//? const dueDate = 10; // Due date of the month

// // User input (you can prompt for these or get them from a form)
//? const customerName = "John Doe";
//? const currentMonth = "October"; // Replace with the current month
//? const numberOfUnits = 150; // Replace with the actual number of units consumed

// // Calculate Net Amount Payable (within Due Date)
//? const netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);

// // Calculate Late Payment Surcharge (if applicable)
//? const currentDate = new Date();
//? const currentDay = currentDate.getDate();

//? let latePaymentSurcharge = 0;
//? if (currentDay > dueDate) {
//   //* Late payment surcharge percentage (replace with your actual rate)
//?   const latePaymentRate = 2.5; // 2.5% for example
//?   latePaymentSurcharge = ((netAmountPayable * latePaymentRate) / 100).toFixed(2);
//? }

// //* Calculate Gross Amount Payable (after Due Date)
//? const grossAmountPayable = (parseFloat(netAmountPayable) + parseFloat(latePaymentSurcharge)).toFixed(2);

// //* Display the bill details in the browser
//? document.write("<h2>K-Electric Bill</h2>");
//? document.write("<p><strong>Customer Name:</strong> " + customerName + "</p>");
//? document.write("<p><strong>Current Month:</strong> " + currentMonth + "</p>");
//? document.write("<p><strong>Number of Units:</strong> " + numberOfUnits + "</p>");
//? document.write("<p><strong>Charges per Unit:</strong> " + chargesPerUnit.toFixed(2) + "</p>");
//? document.write("<p><strong>Net Amount Payable (within Due Date):</strong> $" + netAmountPayable + "</p>");
//? document.write("<p><strong>Late Payment Surcharge:</strong> $" + latePaymentSurcharge + "</p>");
//? document.write("<p><strong>Gross Amount Payable (after Due Date):</strong> $" + grossAmountPayable + "</p>");




