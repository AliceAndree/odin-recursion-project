const printFibonacci = (num) => {
  const fibs = [];
  const fibonacci = (num) => {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
  };

  for (let i = 0; i < num; i++) {
    fibs.push(fibonacci(i));
  }
  return fibs;
};
console.log(printFibonacci(8));
