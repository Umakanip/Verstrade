const fibonacci = (n) => {
  if (n <= 1) {
    return n;
  }

  let prev = 0;
  let current = 1;

  for (let i = 2; i <= n; i++) {
    const next = prev + current;
    prev = current;
    current = next;
  }

  return current;
};

const position = 10; // Change this to the desired position in the Fibonacci series
const result = fibonacci(position);

console.log(`Fibonacci value at position ${position}: ${result}`);
