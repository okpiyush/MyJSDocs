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

>**File name for the below Concepts **: Define.js

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
`if(condition){
}else if( similar condition){
}else{
}`

Case 2:
`if (condition){
}if(similar condition){
}else{
}
`

In case 1 vs Case 2 there is a chance in case 2 that both the conditions get true and both the code runs when all we neede was the first statements or the second statements to run. Hence it's always good to check the code before it runs.

`let score = 50;
if (score > 33 || attendance > 40) {
    console.log("Haww Pass");git push -u origin main
} else {
    console.log("Hehe Fail")
}`
In the code above. The first condition becomes true because the code says  for attendance doesn't get evaluated. hence the condition gets true in the first condition we never check attendance hence it never gives us an error for the OR function. 


> **File name for the below :** function.js

- We declare a function using the following syntax :
`function function_name(variable){
  //statement for the function.
  // Use return to return values from the function. 
}`

**As we can change any variable to any type of data and return any type of data type from the return statement of a function. Therefore JS is called a weakly typed language**

> **File name for the below :** jslect3.js

- When we declare a variable and don't pass it's value. The JS compiler points it's value towards **Undefined**
- If we dont defined a variable and log it. It gives us an error for it.
- Uses of Undefined :
  - we made a form and took input from a user for email variable. but the user didnt give the email for it and pressed the submit button.
  - if nothing is returned in a fucntion and the value for function is stored in a variable then JS points the variable to **undefined**
  - WE can use undefiend to reset a value from the form while we are taking a value from the form.

- Cases when Undefined can occur :
  - Variable declaration but no assignment 
  - No argument passed to function
  - nothing is returned from function.

-How to judge if undefined is implicitly defined or Explicitly defined :
  - Instead of undefined we provide null to the email.
  - Whereas compiler provides Undefined to the email.
> hence when we can differentiate if the undefined is user defined or js defined

-In cases where we can have Undefined as an input in a function to stop that from happening we use Default values in function for the fucntion to not take undefined as an input


> **File name for the below :** Objects.js

- Objects are a data type that containes many different properties that can be accessed accordingly using .functions.
- We can edit these properties similarly or can print the object itself properly.
- We can call it's value accordingly and show it's indivisual values and the properties itself.


>**File name for the below :** Methods.js

- Properties of an Object that are also a function is called methods.
- Methods are inside an object and deals with it's parameters and properties.
- We call a method using ObjectName.FunctionalProperty.
- THIS keyword
  - this keyword points towards it's own self and when accessed using this shows it's very own properties and functions.


> **File name for the below :**StringPropertiesAndMethods.js

When we assign a string to a variable then it automatically gets converted into a object as it has its own methods and properties.
Functions in string class :
  - toUpperCase() : Changes all the character to uppercase
  - toLowerCase() : changes all the character to lowercase
  - trim() : Removes all the whitespaces that are on the either side of the string.


> **File name for the below :**loopsi in arrays.jslect3

We can use loops in two ways.
  - Use of loop in cpp way. ie 
    - `for (let i=0;i<n;i++){}` (iterates in from  0 to n)
  - Use of loop to iterate in arrays. 
    - `for(let name of names){}` {uses a name variable to iterate in an array(names)}