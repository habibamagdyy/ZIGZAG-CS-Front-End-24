let nothing;
let theName: string = "Elzero";
function showMyDetails(a = "", b = "", c) {
  return `${a}${b}${c}`;
}
console.log(showMyDetails( undefined,undefined,theName)); // Elzero