function multiples() {
    let sum = 0;
    for (let i = 1; i < 1000; i++) {
  
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return sum;
  };
  
  console.log(multiples());

  // sum is 233168... 
  //the same is returned wether  && or || is used, not sure which is more accurate.
  // is the 1000 is to be included in the sum, it should be i <= 1000