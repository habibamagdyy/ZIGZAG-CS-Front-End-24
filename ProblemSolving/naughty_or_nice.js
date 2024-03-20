// link problem -->https://www.codewars.com/kata/5662b14e0a1fb8320a00005c
function naughtyOrNice(data) {
  var count = {
    "Nice": 0,
    "Naughty": 0 
  };
  for (var month in data) {
    for (var day in data[month]) {
      count[data[month][day]]++;
    }
  }
  return count["Naughty"] > count["Nice"] ? "Naughty!" : "Nice!";
}

