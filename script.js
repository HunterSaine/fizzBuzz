let n = parseInt(prompt("How high do you want to count?"));
if (typeof n !== "number") {
    alert("Must input number");}
else {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');}
        else if (i % 3 === 0) {
            console.log("Fizz ");}
        else if (i % 5 === 0) {
            console.log("Buzz "); }
        else {
            console.log(i); }
    }
}