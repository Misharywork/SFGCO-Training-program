// Example 1: Basic Promise chain
function sumNumbers(a, b) {
    return new Promise((resolve) => {
        const sum = a + b;
        console.log(`Sum: ${a} + ${b} = ${sum}`);
        resolve(sum);
    });
}

function multiplyNumber(num, multiplier) {
    return new Promise((resolve) => {
        const result = num * multiplier;
        console.log(`Multiply: ${num} × ${multiplier} = ${result}`);
        resolve(result);
    });
}

// Using the Promise chain
sumNumbers(5, 10)
    .then(sum => multiplyNumber(sum, 3))
    .then(finalResult => {
        console.log(`Final result: ${finalResult}`);
        return finalResult;
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Output:
// Sum: 5 + 10 = 15
// Multiply: 15 × 3 = 45
// Final result: 45