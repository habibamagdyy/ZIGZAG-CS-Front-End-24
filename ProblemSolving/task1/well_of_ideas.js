// link problem -->https://www.codewars.com/kata/57f222ce69e09c3630000212
function well(x) {
  const goodIdeas = x.filter(idea => idea === 'good').length;

  if (goodIdeas === 0) {
      return 'Fail!';
  } else if (goodIdeas <= 2) {
      return 'Publish!';
  } else {
      return 'I smell a series!';
  }
}

