const powerOfTwo = (number) => {
     
    let result = 2;
    for (i = 2; i <= number; i++){
        result = (result*2);
    }
    
      return result;
    
};

powerOfTwo(10);
console.log(powerOfTwo(10));