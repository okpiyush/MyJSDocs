***Javascript Documentation***




**Types of Data in Java Script.**
- String 
- Number
- Boolean
- Undefined
- Null
- bigInt
- Symbol
*There are a total of 7 data types in JavaScript*


**Variables** : A name for a particular place or value to call in the program. This
- *Declaring a variable* : **let variablename="string"** 
  - let is the keyword to declare a variable
  - variablename is the name of the variable
  - After = sign there exists the value fo the Variable


***Mental model for Variables in Javascript***
- A bucket has the data and the Variable Name points towards that data.
- This is the reason why A JS variable can store any kind of data without any extra hassle.
- <Variable> -> "zeeshan" (Variable name points to the value of the variable);

**File name for the below Concepts **: Define.js

***Conditions for Variable Names***
- Cannot start with a number
- Cannot have any special characters
- We can use $ and _ for variable names
- No spaces between variables names

***How to Write Multiple word variablename***
- let firstname="Piyush"; (Normal)
- let firstName="Piyush"; (Camel Case) (Mostly used in Javascript)
- let first_name="Piyush"; (Snake Case)
- let first-name="Piyush"; (Kebab Case) {not used in javascript but used in CSS instead}

***How to define and print a variable name***
- Let variable lets us to define a variable with it's own name and value.
- Console.log(""): Helps us to print the variable in the console.
- String can be defined in the following format:
  - ' ' : Single Quotes ; // Gets string variable doesn't matter if you are giving a single char or Multiple char.
  - " " : Double Quotes ;
  - `` : Back ticks ;
- Adding 2 string:
  - When 2 strings are added then a new string is generated with the new value and the new variable is pointed towards the new string.



> **File name for the below Concepts **: Number.js

**We can perform most of the operations in Javascript in same way as of CPP**
Precendence followed is :
- Parenthesis
- Exponent
- Multiplication / Division
- Addition / Substraction
**For the functions in same order of precedence. The one that comes first from left to right will be resolved first.**


> **File name for the below concepts** : BoolandConditionals*.js

***Conditional and their signs***
- === : Equality Check with type check
- !== : Not Equal values or types
- ==  : Equality check for just values and not Types
- !=  : Equality check Not Equal values
- ">"=  : Greater than or Equal to values
- <=  : Less than or Equal to values
- ">"   : Greater than
- "<"   : Less than
*We cannot **Redeclare** a Variable in JavaScript but we can **Reassign** a value to the variable.*


***Decision making***
> **File name for the below concepts** : Decisions.js

Conditional operator gets resolved in true or false;
conditional statement runs according to the boolean and condition state in it.
The correct way to pass multiple if is to apply 

Case 1:
if(condition){

}else if( similar condition){

}else{

}

Case 2:
if (condition){

}if(similar condition){

}else{

}


In case 1 vs Case 2 there is a chance in case 2 that both the conditions get true and both the code runs when all we neede was the first statements or the second statements to run. Hence it's always good to check the code before it runs.

`score = 50;
if (score > 33 || attendance > 40) {
    console.log("Haww Pass");

} else {
    console.log("Hehe Fail")
}`
In the code above. The first condition becomes true because the code says  for attendance doesn't get evaluated. hence the condition gets true in the first condition we never check attendance hence it never gives us an error for the OR function. 