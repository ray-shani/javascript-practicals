
// Restarting of javascript practicals
// Concatenation
let myName="Ray";
let herName="Sashi";
console.log(myName+ "" + "and" +""+ herName + "are brother and sister");
myName.length

let car="This is a subaru";
let owner="John Njoroge";
console.log(car + "and it is owned by a friend of mine" + owner);

let daily3="Movement,meditation,morning pages";
let movement="When i wake up everyday i will ensure I practise :";
console.log(movement + daily3);

let lawsOfNature="The laws of the jungle are very intense for a young man";
let lawsOfEmployment="A major one in the business world is hire slowly and fire quickly";
console.log("General thoughts dictate that" + "" + lawsOfNature + "" + lawsOfEmployment);

let excellence="To seek excellence you must first taste the bitter tatse of failure";
let growth="Cumulative growth as person is the same as deep as his conviction of not failing";
console.log(excellence.length);
console.log("What is life with excellence,"+ "" + excellence + "" +growth);

// Creating  a prompt to count the characters of a string
// let thinking=prompt("Personal thoughts");
// let thinkingLength=thinking.length;
// alert("You have written" + thinkingLength + "and have"+ (280-thinkingLength)+"words left");

// Slice and removing parts of a string
let day="Monday";
let jinja=day.slice(0,1);
console.log(jinja);

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
function lifeInWeeks1(age){
  let remainingAge=90-age;
  let x=remainingAge*365;
  let y=remainingAge*52;
  let z=remainingAge*12;
  console.log("You have " + x+"days left " +y+" weeks" +z+ " months left");
}
lifeInWeeks1(56);