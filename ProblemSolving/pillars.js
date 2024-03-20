// link problem --> https://www.codewars.com/kata/5bb0c58f484fcd170700063d
function pillars(num_pill, dist, width) {
  if (num_pill === 1) {
      return 0;
  }else{
      let distance = dist * ((num_pill -1) * 100 );
      let pillars = num_pill - 2;
      return distance + (width * pillars);
  }  
}

