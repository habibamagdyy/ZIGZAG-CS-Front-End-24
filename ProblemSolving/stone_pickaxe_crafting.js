// link problem -->https://www.codewars.com/kata/65c0161a2380ae78052e5731
function stonePick(arr) {
  let stickCount = 0;
  let cobblestoneCount = 0;

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 'Sticks') {
          stickCount++;
      } else if (arr[i] === 'Cobblestone') {
          cobblestoneCount++;
      } else if (arr[i] === 'Wood') {
          stickCount += 4;
      }
  }
  const maxPickaxes = Math.min(Math.floor(stickCount / 2), Math.floor(cobblestoneCount / 3));
  return maxPickaxes;
}

