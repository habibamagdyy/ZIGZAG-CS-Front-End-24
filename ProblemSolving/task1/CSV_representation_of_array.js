// link problem --> https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036
function points(games) {
    let points = 0;
    for (let i = 0; i < games.length; i++) {
      const score = games[i].split(':');
      if (parseInt(score[0]) > parseInt(score[1])) {
        points += 3;
      } else if (parseInt(score[0]) === parseInt(score[1])) {
        points += 1;
      }
    }
    return points;
  }


