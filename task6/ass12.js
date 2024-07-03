let theName = "Elzero";
let fullNameArray1 = theName.split('');
console.log(fullNameArray1);

let fullNameArray2 = Array.from(theName);
console.log(fullNameArray2);

let fullNameArray3 = [...theName];
console.log(fullNameArray3);

let fullNameArray4 = Object.assign([], theName);
console.log(fullNameArray4);

let fullNameArray5 = [];
for (let char of theName) {
    fullNameArray5.push(char);
}
console.log(fullNameArray5);
console.log("---------------------------------------");