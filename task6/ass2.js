let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let specialNames_re = /\b(Os)\d*O/g;
console.log(specialNames.match(specialNames_re));