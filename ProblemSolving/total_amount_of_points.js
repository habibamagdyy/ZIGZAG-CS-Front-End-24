// link problem --> https://www.codewars.com/kata/5bb904724c47249b10000131
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


