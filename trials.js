
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
let thinking=prompt("Personal thoughts");
let thinkingLength=thinking.length;
alert("You have written" + thinkingLength + "and have"+ (280-thinkingLength)+"words left");

// Slice and removing parts of a string
let day="Monday";
let jinja=day.slice(0,1);
console.log(jinja);

// How to transform a separate letter  from a string to a capital letter and still retaining the rest
let yourName=prompt("What is your name?");
let newLetter=yourName.slice(0,1).toUpperCase();
let originalName=newLetter+yourName.slice(1).toLowerCase();
alert("Your name is "+originalName);

let whatDay=prompt("What day is this");
let today=whatDay.slice(0,1).toUpperCase();
let originalDay=today+whatDay.slice(1).toLowerCase();
alert("Today is " + originalDay);
