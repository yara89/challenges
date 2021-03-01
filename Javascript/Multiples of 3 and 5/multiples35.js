// list all the numbers between 1 and 1000
// that are multiples of 3 or 5
function multiples(number) {
  let sum = 0;
  for (let i = 0; i <= number; i++) {

    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log( multiples(10) );
console.log( multiples(5) );
console.log( multiples(6) );

