//  Q no 148
setTimeout(function () {
    console.log("This message is shown after a 2-second delay.");
}, 2000);
//    Q no 149
console.log("Start");
setTimeout(function () {
    console.log("Callback executed");
}, 0);
console.log("End");
//  Q no 150
console.log("Before synchronous operation");
for (var i = 0; i < 1e9; i++) { }
console.log("After synchronous operation");
console.log("Before asynchronous operation");
setTimeout(function () {
    console.log("Asynchronous operation completed");
}, 1000);
console.log("After asynchronous operation setup");
