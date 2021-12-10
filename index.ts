// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;



var name:string = "John"; 
var score1:number = 50;
var score2:number = 42.50
var sum = score1 + score2 
console.log("name"+name) 
console.log("first score: "+score1) 
console.log("second score: "+score2) 
console.log("sum of the scores: "+sum)

//Type Assertion
var str = '1' 
var str2:number = <number> <any> str   
console.log(typeof(str2))

//Inferred Typing
var num = 2;    
console.log("value of num "+num); 
num = "12";
console.log(num);

//Variable Scope
var global_num = 12         
class Numbers { 
   num_val = 13;              
   static sval = 10;         
   
   storeNum():void { 
      var local_num = 14;     
   } 
} 
console.log("Global num: "+global_num)  
console.log(Numbers.sval)    
var obj = new Numbers(); 
console.log("Global num: "+obj.num_val)

//OPERATORS
var x:number = 4 
var y = -x; 
console.log("value of x: ",x);   
console.log("value of y: ",y);   

//Concatenation
var msg:string = "hello"+"world" 
console.log(msg)

var num:number = -2 
var result = num > 0 ?"positive":"non-positive" 
console.log(result)

//if else
num = 15;
if (num % 2 == 0) {
  console.log('number is even');
} else {
  console.log('number is odd ');
}

//while versus do..while
var n:number = 5 
while(n > 5) { 
   console.log("Entered while") 
} 
do { 
   console.log("Entered do…while") 
} 
while(n>5)

var i:number = 1 
while(i<=10) { 
   if (i % 5 == 0) {   
      console.log ("The first multiple of 5  between 1 and 10 is : "+i) 
      break    
   } 
   i++ 
}

//continue Statement
var num:number = 0
var count:number = 0;

for(num=0;num<=20;num++) {
   if (num % 2==0) {
      continue
   }
   count++
}
console.log (" The count of odd values between 0 and 20 is: "+count) 


//FUNCTIONS
//Optional Parameters
function disp_details(id:number,name:string,mail_id?:string) { 
   console.log("ID:", id); 
   console.log("Name",name); 
   
   if(mail_id!=undefined)  
   console.log("Email Id",mail_id); 
}
disp_details(123,"John");
disp_details(111,"mary","mary@xyz.com");

//Rest Parameters
function addNumbers(...nums:number[]) {  
   var i;   
   var sum:number = 0; 
   
   for(i = 0;i<nums.length;i++) { 
      sum = sum + nums[i]; 
   } 
   console.log("sum of the numbers",sum) 
} 
addNumbers(1,2,3) 
addNumbers(10,10,10,10,10)


//Default parameters

function calculate_discount(price:number,rate:number = 0.70) { 
   var discount = price * rate; 
   console.log("Discount Amount: ",discount); 
} 
calculate_discount(2000) 
calculate_discount(2500,0.30)