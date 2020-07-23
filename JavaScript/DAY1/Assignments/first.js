// assert()	Writes an error message to the console if the assertion is false
console.assert(document.getElementById("demo"), "You have no element with ID 'demo'");

// clear()	Clears the console
console.clear()

// count()	Logs the number of times that this particular call to count() has been called
console.count() //1
console.count() //2

// error()	Outputs an error message to the console
console.error("Error is occured");

// group()	Creates a new inline group in the console. This indents following console messages by an additional level, until console.groupEnd() is called
console.log("Hello world!");
console.group();
console.log("Hello again, this time inside a group!");
console.groupEnd();

// groupCollapsed()	Creates a new inline group in the console. However, the new group is created collapsed. The user will need to use the disclosure button to expand it
console.log("Hello world!");
console.groupCollapsed();
console.log("Hello again, this time inside a collapsed group!");
console.groupEnd();

// groupEnd()	Exits the current inline group in the console
console.log("Hello world!");
console.group();
console.log("Hello again, this time inside a group!");
console.groupEnd();
console.log("and we are back.");


// info()	Outputs an informational message to the console
console.info("Hello world!");

// log()	Outputs a message to the console
console.log("hey Paresh...!!")

// table()	Displays tabular data as a table
console.table({'firstname':'Paresh','Lastname':'Valiya'});

// time()	Starts a timer (can track how long an operation takes)
// timeEnd()	Stops a timer that was previously started by console.time()
console.time();
for (i = 0; i < 100; i++) {
  continue
}
console.timeEnd();


// trace()	Outputs a stack trace to the console
function myFunction() {
    myOtherFunction();
  }
  
function myOtherFunction() {
console.trace();
}
// warn()	Outputs a warning message to the console
console.warn("This is a warning!");
