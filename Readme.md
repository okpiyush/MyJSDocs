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





***Level 2 In JavaScript***


**File name for the below :**Objects.js;
- We can create a Javascript object with the let command.
  - ` let object ={property1 :"",property2 :"",property3 :""}`;
- To access an object we can just use console.log to log it into the console.log
  - console.log(object); 
- To access any special property of an object we can just use console.log with the object name followed by the property we need to access with a dot between them.
  - console.log(object.property);
- To delete a property of a JS object we use the "delete" command.
  - ` delete object.property1`


- Declaring a JS object
  - We can declare using 3 methods
    - `let object ={property1 :"",property2 :"",property3 :""}`
    - `const object ={property1 :"",property2 :"",property3 :}`



**File name for the below :** const.js
- Usage of const:
  - We use a const function to declare a object and we cannot reassign it to a new point in the memory space.
  - But we can change the inner elements stored in the object and the properties of the object.
  - Same goes for the Arrays

*Difference between different JS declaration type.*

| let              	| const            	| var           	|
|------------------	|------------------	|---------------	|
| cannot redeclare 	| cannot redeclare 	| can redeclare 	|
| can reassign     	| cannot reasssign 	| can reassign  	|

***File name for the below :*** Execution.js
**Hoisting**
Memory allocation phase in which we allocate memory location to the variables is called Hoisting.

Line : **4 to 13**
| Memory allocation Phase                  	| Code execution phase                                                                                                      	|
|-------------------------------------------	|---------------------------------------------------------------------------------------------------------------------------	|
| Num 2 : undefined <br>  greeting : func() 	| execution prints Undefined because in the code  we can see the num2 is assigned as Undefined. When the code was executed. 	|

Line : **16 to 21**


Line : **20 to 28**


Line : **30 to 40**


Line : **46 to 56**




***File name for the above :*** block.js
Block scope was introduced in JS in 2015
> Blocks are {} in javascript. When the code written inside them it is called block of code.
<br>
> Blocks are executed line by line in javascript and they do not create execution context.
<br>
> Block scoped variables are not accessible outside the block scoped.
- Block Scoped
  - Let variable
  - Const variable
- Var is function scoped.
> Function scoped variable can only be accessed inside the fucntion and it's scope.


Let and Const variables cannot be accessed until and unless you have assigned a variable to it.
Temporal Deadzone is the place where variables are assinged without any value and cannot be accessed.


| var                                               	| let                                                  	| const                                                	|
|---------------------------------------------------	|------------------------------------------------------	|------------------------------------------------------	|
| Can be redclared                                  	| cannot be redeclared                                 	| cannot redeclare                                     	|
| can reassign                                      	| can reassign                                         	| cannot be reassigned                                 	|
| function scoped                                   	| block scoped                                         	| block scoped                                         	|
| hoisted and can be accessed before initialization 	| hoisted and cannot be accessed before initialization 	| hoisted and cannot be accessed before initialization 	|
| Can be declared and initialized later             	| Can be declared and initialized later                	| We have to initialize at the time of declaring       	|


> ***File name for the below***: ./functionalprogramming/higherorderfunction.js
***Higher Order Functions***
- A function that operate on other funcitons by taking them as arguments or return them are called Higher Order Functions.


*Taking functions as Input*
*Line 11 to 21*
- we have passed a funciton inside the function and we can deduce that a function can be passed as a parameter.
- Because fn is a parameter. when we log it in the console we get that the function where that particular parameter points gets printed.
- But when we call it inside the function we can see it runs like a normal function.
*Line 24 to 36*
- We can straight up define funcitons inside the function call
- Prints the functions without an issue but names it as anonymous function.


**Callback Function**
The function that is called inside another fucniton as an argument is called as callback function.

*Giving functions as output*
*Line 41 to 51*
- the returning fucntion gives out a fucntion which gets pointed by res.
- hence we can say that a fucntion can return a function.

*Line 70 to 94*
- To reduce redundancy in a code we extract the logic and then we can use it to check if that function is viable or not. This
- Ex : in the getnumber code we extracted the logic and replaced the function with a less redundant funciton along with a supporting check function that made and gave out the required data and answer. 

***File name for the below :*** arraymethodsandfunctions.js
- we can iterate in an array using for loop and iterators.
- Or we can use the let item type to iterate in a function.
- Or we can use the **forEach** method.
  - >arr.forEach(function(item){console.log(item)});

Polyfills : Functions that are similar to predefined functions but are made by us. so that if a built-in function is not supported in any web browser. it gets filled in with that particular functionso that it can work.


- arr.forEach() function : iterates in an array for it's elements and performs funcitons on it.
- arr.map() function :  Iterates in the array and forms a new array in a new memory lcoation with the desired functions and changes implemented on it.
  
- arr.filter(): takes a function as an input which is then used to mark the valeus of an array as true and false. the true ones gets returned into a new array and false ones gets rejected for the new array.

***File Name for the below :*** Closures.js
- whenever we return a function, it gets returned with its lexical enviornment.
- Hence even when the outer Execution Context gets destroyed after it's execution. It still got printed as HELLO.
- Therefore we can say closure is a combination of function together enclosed with references to it's surrounding state or lexical enviornment.
- Work : Real world case of closure.


***Filename for the below :*** Prototypes.js

- Every Object has a Prototype. 
- Prototypes are the fallback source of all properties.
- Whenever you log the person in the console you will see the whole object gets printed with a new property named as Protoype.
- When expanded gives us the full access to the property which is a object in itself  with it's own set of properties and functions.
- GetInstaId gives us an error becuase it's neither an inbuilt funciton nor it has been defined but to String is an Instant function of the object hence it gives us an output as object object.
- When a function doesn't find anything specific in the Object itself (ie, Method or Property), then it starts to look for something in It's Prototype where if it finds a method then executes it or it ends up giving an error.
- Hence we can say, **Prototype is a Fallback Source for Properties** . Where a functions searches for Callable methods or properties and
- To print a simple prototype of any object. Execute (Object.prototype) in console.
- We can see prototype of an object usign (ObjectName.__proto__)
- Object -> .__proto__ -> Prototype of Object -> .__proto__ -> NULL
-  When we create an array in JS. THe JS creates an Object out of that array with it's very own property and methods. TO view all the properties in an array. We can use .__proto__.
-  Which gives us Many different functions to work with on an Array Object.

- The Prototypal Chaining 
  - Array is defined by us in the code.
  - Js creates an Object out of that array.
  - Array prototypal chain
    - Array.__proto__ gives us a prototype of an array Object.
    - Array.__proto__.__proto__ gives a prototype of the Array Object Protoype.
    - Array.__proto__.__proto__.__proto__ gives us a NULL because we cannot create any prototype anymore. 
  
  - String Prototypal Chaining
    - Array.__proto__ gives us a prototype of an array Object.
    - Array.__proto__.__proto__ gives a prototype of the Array Object Protoype.
    - Array.__proto__.__proto__.__proto__ gives us a NULL because we cannot create any prototype anymore. 

***File Name for the Below :*** ./functionalprogramming/constructorfunction.js
- Everything's an Object in JS.
- When we create a function and define it to another variable normally. It gives us a simple funciton with a new variable assigned towards it and that too being the returned Variable.
- We can Add property and methods inside constructor fucniton using this.property inside the defination of function.
- But If we use New just before the assignment of the variable. It becomes and Acts like a constructor and the funciton starts to behave like an object creator. Where we can define it's own property.
- > let person1=new person();
- We can also define methods inside the function and hence in the constructor. Where we use the function inside function to define it in the defining phase.

- Prototypal Chain
  - new Person() created
  - Person prototype is created
  - Person prototype's prototype is created
  - Null if we use protoype funciton any further4.



>Filename for the below : **Asynchronous.js**
***Asynchronus Programming***
- JS is a single threaded programming language.
- i.e : It executes one process at a time.  
- Global Execution Context is created and subsequent function calls create subsequent function context.
- We cannot run Multiple statements at once in javascript.
- And we cannot change the synchronicity of the execution context and the code.
-  Hence we cannot run a specific statement after n time in javascript.
-  setTimeout() : Set timeout funciton is used to execute it after a time delay in the javascript execution context.
-  Objects , Functions , Arrays , Strings are part of JavaScript.
-  Console is not a part of JS and so is SetTimeout(function(){ }).
-  The above mentioned are part of the Browser and servers.
 
> File name for the below : **Browser.js**
***Browser***
- Browser has the following features :
  - console
  - viewport
  - location 
  - camera
  - storage
  - URL
  - Timer
- Javascript has the following features :
  - JS Engine
  - Call Stack
- When we execute a function in js and we run it in browser.
- The browser provides a window object to JS execution context because with the help of which it can actually use the functionalities present in their Object.
- Window object has methods like console, viewport and other methods which gets executed without a problem in js.


***Instagram Clone***
**Question**
- Create a function step 1: Which takes input from the user for the Image.
- Create a function step 2 : Which gives out caption for the user. 
- ***Concurrency***
  - Whenever we have to use a function after a particular function. Then at that moment we will have to use the callback function.
  - **Callback Hell**
    - The Pyramid Structure that we form when we introduce callback after callback is called Callback Hell.
- ***Promises***
  - Promise is a inbuilt constructor function.
  - If we use resolve inside a promise then when promise is resolved. Then we can see that the promise calls the then function and the function inside that method.
  - Hence we can Say
    - Promise.then houses the resolve function and its parameter.
  - As when we assign another function after a comma to the **promise.then** function then it is use for the error type. 