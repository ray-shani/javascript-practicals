
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

// This one results in an empty word count so you must attatch a variable to the prompt to be able to know how many characters have been input in field
prompt("This is a twitter account");
let words="";
let characterWords=words.length;
alert("You have written " + characterWords + "and are remaining with " + (280-characterWords));
// Slice and removing parts of a string

// Generating a love calculator
let firstName=prompt("What is your name?");
let secondName=prompt("What is your second name?");
let lovePercentage=Math.random();
lovePercentage=lovePercentage*100;
lovePercentage=Math.floor(lovePercentage)+1;
alert("Their love percentage is " + lovePercentage+" %");

