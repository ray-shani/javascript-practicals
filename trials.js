
// Restarting of javascript practicals
// Concatenation
// let myName="Ray";
// let herName="Sashi";
// console.log(myName+ "" + "and" +""+ herName + "are brother and sister");
// myName.length

// let car="This is a subaru";
// let owner="John Njoroge";
// console.log(car + "and it is owned by a friend of mine" + owner);

// let daily3="Movement,meditation,morning pages";
// let movement="When i wake up everyday i will ensure I practise :";
// console.log(movement + daily3);

// let lawsOfNature="The laws of the jungle are very intense for a young man";
// let lawsOfEmployment="A major one in the business world is hire slowly and fire quickly";
// console.log("General thoughts dictate that" + "" + lawsOfNature + "" + lawsOfEmployment);

// let excellence="To seek excellence you must first taste the bitter tatse of failure";
// let growth="Cumulative growth as person is the same as deep as his conviction of not failing";
// console.log(excellence.length);
// console.log("What is life with excellence,"+ "" + excellence + "" +growth);

// Creating  a prompt to count the characters of a string
// let thinking=prompt("Personal thoughts");
// let thinkingLength=thinking.length;
// alert("You have written" + thinkingLength + "and have"+ (280-thinkingLength)+"words left");

// Slice and removing parts of a string
// let day="Monday";
// let jinja=day.slice(0,1);
// console.log(jinja);

// How to transform a separate letter  from a string to a capital letter and still retaining the rest
// let yourName=prompt("What is your name?");
// let newLetter=yourName.slice(0,1).toUpperCase();
// let originalName=newLetter+yourName.slice(1).toLowerCase();
// alert("Your name is "+originalName);

// let whatDay=prompt("What day is this");
// let today=whatDay.slice(0,1).toUpperCase();
// let originalDay=today+whatDay.slice(1).toLowerCase();
// alert("Today is " + originalDay);

//Calculating the number of days months and year a person has before they reach the complete age of retirement
// Life in Weeks Coding Exercise
// In this challenge, you are going to create a function that tells us how many days, weeks and months we have left if we live until 90 years old.
// It will take your current age as the input and console.logs a message with our time left in this format:
// You have x days, y weeks, and z months left.
// Where x, y and z are replaced with the actual calculated numbers.
// For this challenge, assume there are 365 days in a year, 52 weeks in a year and 12 months in a year.
// IMPORTANT your console.log output should match the Example Output format exactly, even the positions of the commas and full stops.
// Example Input
// e.g. If you are 56 years old:
// lifeInWeeks(56)
// Example Output
// You have 12410 days, 1768 weeks, and 408 months left.
// Hint
// Try using this Repl.it playground to test your code and see if the output is what you expect it to be.
// Make sure your console.log output matches the example output precisely. The same capitalisation, the same spaces, commas and full stops.

// Failed to give the required output
// function lifeinWeeks(age){
//   let xAge=(90*365)-(age*365);
//   let yAge=(90*52)-(age*52);
//   let zAge=(90*12)-(age*12);
//   return xAge,yAge,zAge;
  
// }
// let myAge=lifeinWeeks(56);
// console.log("These are " + xAge );
  
// Correct code 
// function lifeInWeeks1(age){
//   let remainingAge=90-age;
//   let x=remainingAge*365;
//   let y=remainingAge*52;
//   let z=remainingAge*12;
//   console.log("You have " + x+"days left " +y+" weeks" +z+ " months left");
// }
// lifeInWeeks1(56);


// ///*  Excercism practicals
// 1. Define the expected oven time in minutes
// Define the EXPECTED_MINUTES_IN_OVEN constant that represents how many minutes the lasagna should be in the oven.
//  It must be */ exported. According to the cooking book, the expected oven time in minutes is 40.
// const EXPECTED_MINUTES_IN_OVEN=40;


//* / 2. Calculate the remaining oven time in minutes
// Implement the remainingMinutesInOven function that takes the actual minutes the lasagna has been in the oven as a 
// parameter and returns how many minutes the lasagna still has to remain in the oven, based on the expected oven time in minutes from the */ previous task.
// function remainingMinutesInOven(min){
//   let remainingMinutes=40-min;
//   return remainingMinutes;
// }
// const answer1=remainingMinutesInOven(33);
// console.log(answer1);


// 3. Calculate the preparation time in minutes
// Implement the preparationTimeInMinutes function that takes the number of layers you added to the lasagna as a parameter
//  and returns how many minutes you spent preparing the lasagna, assuming each layer takes you 2 minutes to prepare.

// function preparationTimeInMinutes(layers){
//   let numberOfLayers=layers*2;
//  return numberOfLayers;
// }
// const answer2=preparationTimeInMinutes(10);
// console.log(answer2);

//4. Calculate the total working time in minutes
/* Implement the totalTimeInMinutes function that takes two parameters: the numberOfLayers parameter 
is the number of layers you added to the lasagna, and the actualMinutesInOven parameter is the number of 
minutes the lasagna has been in the oven. The function should return how many minutes in total you've worked on cooking 
the lasagna, which is the sum of the preparation time in minutes, and the time in minutes the lasagna has spent in 
the oven at the moment. */

// function totalTimeInMinutes(layers,minutes){
//   let numberOfLayers=layers*2;
//   let actualMinutesInOven=minutes;
//  return numberOfLayers+actualMinutesInOven;
// }
// const answer3=totalTimeInMinutes(10,40);
// console.log(answer3);

//BMI Calculator using the return function
// function bmiCalculator(weight,height){
//   var bmi=weight/(height*height);
//   if(bmi<18.5){
//     return 'Your BMI is '+ bmi +', so you are underweight';
//   }
//   if (bmi>=18.5||bmi<=24.5){
//     return 'Your BMI is '+ bmi +', so you have a normal weight';
//   }
//   if(bmi>24.9){
//    return'Your BMI is '+ bmi +', so you are overweight';
//   }
//   return Math.round(bmi);

// }

// Generating a dice roll
// let n=Math.random();
// n=n*6;
// n=Math.floor(n)+1;
// console.log(n);

// // Calculating if a year is a leap year Output came as undefined
// function isLeapYear(year){
//   if(year%4){
//     return 'Leap year';
//   }
//   if (year%100){
//     return 'Not leap year';
//   }
//   if(year%400){
//     return 'Leap year';
//   }
// }
// // let currentYear=isLeapYear(2000);
// // console.log(currentYear);

// // Correct code on the leap year challenge
// function isLeapYear(year){
//   if(year%4===0){
//     if(year%100===0){
//       if(year%400===0){
//         return 'Leap year';
//       }
//     }
//     else{
//       return 'Not leap year';
//     }
//   }
//   else{
//     return 'Leap year';
//   }
// }
// let currentYear1=isLeapYear(2000);
// console.log(currentYear1);

// // Looking into arrays
// let guestList=["Ray","Raniel","Saruni","John","Sashi",];
// let invited=prompt("What is your name?");
// if(guestList.includes(invited)){
//   alert("Welcome to the party");
// }
// else(
//   alert("Sorry,try again next time...")
// )

// //FizzBuzz challenge

// // function runnersUp(rankings){
// //   let rankings=[1,2,3,4,4,5,5,6,];
// //   rankings=rankings(Math.max(rankings)--);
// //   return rankings;
// // }
// // console.log(runnersUp);


// // Practices as catching up
// alert("wozza wozza");
// prompt("This is a re-learning experience");
// var email="please input your email";
// email.length;
// let emailName="john@gmail.com";
// alert(email + emailName + " This is a dummy email for testing");
// // Coding excercise

// function test(){
//   var a="3";
//   var b="8";
// var c=a;
// b=c;
// a=b;
//   console.log("a is "+a);
//   console.log("b is "+b);
// }

// 
let input=prompt("Tell us about yourself");
let characters=180;
let remainder=characters-input.length;
 
alert("You have written "+ input.length +"characters, you have" + remainder +"left");

// Slice practices
var firstName=prompt("What is your name");
let firstLetter=firstName.slice(0,1);
let uppercaseLetter=firstLetter.toUpperCase();
alert("Your name is " + uppercaseLetter+firstName.slice(1) );


