// SetTimeOut() & SetInterval()
// ======================================
// SetTimeOut() - It is used to execute a function after a specified number of milliseconds. It executes the function only once.
// function STOtest(name) {
//     console.log("Hello, " + name + "! This message is displayed after 2 seconds.");
// }
// setTimeout(STOtest, 2000, "Mishary"); // This will call the STOtest function after 2 seconds
// ======================================
// SetInterval() - It is used to execute a function repeatedly at specified intervals (in milliseconds). It continues to execute the function until it is stopped.
let count = 0;
function incrementCounter() {
    count++;
    console.log(`Counter: ${count}`);
    if (count >= 5) {
        clearInterval(intervalId); // Stop the interval after 5 increments
    }
}
const intervalId = setInterval(incrementCounter, 1000); // This will call the incrementCounter function every 1 second