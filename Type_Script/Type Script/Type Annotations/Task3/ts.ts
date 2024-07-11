function printInfo(valueOne: (string | number), valueTwo: (string | number)) {
    return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
  }
  
  console.log(printInfo(10, 20)); 
  console.log(printInfo("10", "20")); 
  console.log(printInfo(true, [1, 2, 3])); 