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

// Anonymous functions with parameters

var res = function (a, b) {
   return a * b;
};
console.log(res(12, 2));


//function constructor

var myFunction = new Function("a", "b", "return a * b"); 
var x = myFunction(4, 3); 
console.log(x);

//recrusion

function factorial(number) {
   if (number <= 0) {         
      return 1; 
   } else {     
      return (number * factorial(number - 1));     
   } 
}; 
console.log(factorial(6));

//annonymous recrusion 

(function () { 
   var x = "Hello!!";   
   console.log(x)     
})()


//Lambda function

var foo = (x:number)=>10 + x 
console.log(foo(100))

//Parameter type Inference

var func = (x)=> { 
   if(typeof x=="number") { 
      console.log(x+" is numeric") 
   } else if(typeof x=="string") { 
      console.log(x+" is a string") 
   }  
} 
func(10) 
func("Tomy")

//function overload

function disp(x:any,y?:any):void { 
   console.log(x); 
   console.log(y); 
} 
disp("abc") 
disp(1,"xyz");

//NUMBERS
//NaN
var month = 11 
if( month<=0 || month >12) { 
   month = Number.NaN 
   console.log("Month is "+ month) 
} else { 
   console.log("Value Accepted..") 
}

//prototype
function employee(id:number,name:string) { 
   this.id = id 
   this.name = name 
} 

var emp = new employee(125,"Arun") 
employee.prototype.email = "arun@abc.com" 

console.log("Employee 's Id: "+emp.id) 
console.log("Employee's name: "+emp.name) 
console.log("Employee's Email ID: "+emp.email)

//strings
//indexOf()
var str1 = new String( "This is string one" ); 
 
var index = str1.indexOf( "string" ); 
console.log("indexOf found String :" + index );   

var index = str1.indexOf( "one" ); 
console.log("indexOf found String :" + index );

//slice
var str = "Apples are round, and apples are juicy."; 
var sliced = str.slice(3, -2); 
console.log(sliced);

//toLocaleUpperCase()
var str = "Apples are round, and Apples are Juicy."; 
console.log(str.toLocaleUpperCase( ));

//ARRAY
//Simple Array
var x:string[]; 
x = ["1","2","3","4"] 
console.log(x[0]); 
console.log(x[1]);

var nums:number[] = [1,2,3,3] 
console.log(nums[0]); 
console.log(nums[1]); 
console.log(nums[2]); 
console.log(nums[3]);

//array object
var arr_names:number[] = new Array(4)  

for(var i = 0;i<arr_names.length;i++) { 
   arr_names[i] = i * 2 
   console.log(arr_names[i]) 
}

//Array Constructor accepts comma separated values
var names:string[] = new Array("aa","bb","cc","dd") 

for(var i = 0;i<names.length;i++) { 
   console.log(names[i]) 
}

//array destructuring
var arr:number[] = [500,600] 
var[x,y] = arr 
console.log(x) 
console.log(y)

//array traversal using for…in loop
var j:any; 
var nums:number[] = [2501,2502,2503,2504] 

for(j in nums) { 
   console.log(nums[j]) 
} 

//TUPLES
var mytuple = [10,"Melvin"];  
console.log(mytuple[0]) 
console.log(mytuple[1])

//Empty Tuple
var tup = [] 
tup[0] = 12 
tup[1] = 23 

console.log(tup[0]) 
console.log(tup[1])

//Tuple Operations
var mytuple = [10,"Hello","World","typeScript"]; 
console.log("Items before push "+mytuple.length)  

mytuple.push("Tuple")                                    
console.log("Items after push "+mytuple.length) 
console.log("Items before pop "+mytuple.length) 
console.log(mytuple.pop()+" popped from the tuple") 
  
console.log("Items after pop "+mytuple.length)

//updating tuple
var mytuple = [10,"Hello","World","typeScript"]; 
console.log("Tuple value at index 0 "+mytuple[0]) 

 
mytuple[0] = 121     
console.log("Tuple value at index 0 changed to   "+mytuple[0])

//destructuring
var a =[10,"hello"] 
var [b,c] = a 
console.log( b )    
console.log( c )

//	forEach()
let nume = [7, 8, 9];
nume.forEach(function (value) {
  console.log(value);
});

//some()
function isBigEnough(element, index, array) { 
   return (element >= 10); 
          
} 
          
var retval = [2, 5, 8, 1, 4].some(isBigEnough);
console.log("Returned value is : " + retval ); 
          
var retval = [12, 5, 8, 1, 4].some(isBigEnough); 
console.log("Returned value is : " + retval );

//join()

var arr = new Array("First","Second","Third"); 
          
var str = arr.join(); 
console.log("str : " + str );  
          
var str = arr.join(", "); 
console.log("str : " + str );  
          
var str = arr.join(" + "); 
console.log("str : " + str );

//push()

var numbers = new Array(1, 4, 9); 
var length = numbers.push(10); 
console.log("new numbers is : " + numbers );  
length = numbers.push(20); 
console.log("new numbers is : " + numbers );

//reduce()

var total = [0, 1, 2, 3].reduce(function(a, b){ return a + b; }); 
console.log("total is : " + total );

//slice()

var arr = ["orange", "mango", "banana", "sugar", "tea"]; 
console.log("arr.slice( 1, 2) : " + arr.slice( 1, 2) );  
console.log("arr.slice( 1, 3) : " + arr.slice( 1, 3) );

//splice()

var arr = ["orange", "mango", "banana", "sugar", "tea"];  
var removed = arr.splice(2, 0, "water");  
console.log("After adding 1: " + arr );  
console.log("removed is: " + removed); 
          
removed = arr.splice(3, 1);  
console.log("After removing 1: " + arr );  
console.log("removed is: " + removed);

//UNION
var val:string|number 
val = 12 
console.log("numeric value of val "+val) 
val = "This is a string" 
console.log("string value of val "+val)

//Union Type and function parameter
function disp(name:string|string[]) { 
   if(typeof name == "string") { 
      console.log(name) 
   } else { 
      var i; 
      
      for(i = 0;i<name.length;i++) { 
         console.log(name[i])
      } 
   } 
} 
disp("mark") 
console.log("Printing names array....") 
disp(["Mark","Tom","Mary","John"])

//Union Type and Array
var arr:number[]|string[]; 
var i:number; 
arr = [1,2,4] 
console.log("**numeric array**")  

for(i = 0;i<arr.length;i++) { 
   console.log(arr[i]) 
}  

arr = ["Mumbai","Pune","Delhi"] 
console.log("**string array**")  

for(i = 0;i<arr.length;i++) { 
   console.log(arr[i]) 
} 

//interfaces
//
interface IPerson { 
   firstName:string, 
   lastName:string, 
   sayHi: ()=>string 
} 

var customer:IPerson = { 
   firstName:"Melvin",
   lastName:"Cyriac", 
   sayHi: ():string =>{return "Hi there"} 
} 

console.log("Customer Object ") 
console.log(customer.firstName) 
console.log(customer.lastName) 
console.log(customer.sayHi())  

var employee:IPerson = { 
   firstName:"Melvin",
   lastName:"C", 
   sayHi: ():string =>{return "Hello!!!"} 
} 
  
console.log("Employee  Object ") 
console.log(employee.firstName);
console.log(employee.lastName);

//Union Type and Interface
interface RunOptions { 
   program:string; 
   commandline:string[]|string|(()=>string); 
} 


var options:RunOptions = {program:"test1",commandline:"Hello"}; 
console.log(options.commandline)  


options = {program:"test1",commandline:["Hello","World"]}; 
console.log(options.commandline[0]); 
console.log(options.commandline[1]);  


options = {program:"test1",commandline:()=>{return "**Hello World**";}}; 

var fn:any = options.commandline; 
console.log(fn());

//Simple Interface Inheritance
interface Person { 
   age:number 
} 

interface Musician extends Person { 
   instrument:string 
} 

var drummer = <Musician>{}; 
drummer.age = 27 
drummer.instrument = "Drums" 
console.log("Age:  "+drummer.age);
console.log("Instrument:  "+drummer.instrument);

//Multiple Interface Inheritance
interface IParent1 { 
   v1:number 
} 

interface IParent2 { 
   v2:number 
} 

interface Child extends IParent1, IParent2 { } 
var Iobj:Child = { v1:12, v2:23} 
console.log("value 1: "+this.v1+" value 2: "+this.v2)

//CLASSES
//Declaring a class
class Car { 
   
   engine:string; 
 
   
   constructor(engine:string) { 
      this.engine = engine 
   }  

   
   disp():void { 
      console.log("Engine is  :   "+this.engine) 
   } 
}

//
class Cars { 
   
   engine:string; 
   
    
   constructor(engine:string) { 
      this.engine = engine 
   }  
   
    
   disp():void { 
      console.log("Function displays Engine is  :   "+this.engine) 
   } 
} 


var obj = new Cars("XXSY1")


console.log("Reading attribute value Engine as :  "+obj.engine)  


obj.disp()

//Class Inheritance

class Shape { 
   Area:number 
   
   constructor(a:number) { 
      this.Area = a 
   } 
} 

class Circle extends Shape { 
   disp():void { 
      console.log("Area of the circle:  "+this.Area) 
   } 
}
  
var obj = new Circle(223); 
obj.disp()

//multi-level inheritance
class Root { 
   str:string; 
} 

class Child extends Root {} 
class Leaf extends Child {}

var obj = new Leaf(); 
obj.str ="hello" 
console.log(obj.str)

//Class inheritance and Method Overriding

class PrinterClass { 
   doPrint():void {
      console.log("doPrint() from Parent called…") 
   } 
} 

class StringPrinter extends PrinterClass { 
   doPrint():void { 
      super.doPrint() 
      console.log("doPrint() is printing a string…")
   } 
} 

var obj = new StringPrinter() 
obj.doPrint()


//Classes and Interfaces
interface ILoan { 
   interest:number 
} 

class AgriLoan implements ILoan { 
   interest:number 
   rebate:number 
   
   constructor(interest:number,rebate:number) { 
      this.interest = interest 
      this.rebate = rebate 
   } 
} 

var obj = new AgriLoan(10,1) 
console.log("Interest is : "+obj.interest+" Rebate is : "+obj.rebate )

//OBJECTS

//Object Literal Notation
var person = { 
   firstname:"Tom", 
   lastname:"Hanks" 
}; 
 
console.log(person.firstname) 
console.log(person.lastname)

