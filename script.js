//get input from user as a number
let n = parseInt(prompt("How high do you want to count?"));
if (typeof n !== "number") {
    alert("Must input number");
}
else {
    for (let i = 0; i <= n; i++) {
        if (i % 3 === 0) {
            document.write("Fizz ");
        }
        else if (i % 5 === 0) {
            document.write("Buzz ");
        }
        else {
            document.write(i);
            document.write(" ");
        }
    }
}
//iterated through all numbers until the inputted number print each number up to that input