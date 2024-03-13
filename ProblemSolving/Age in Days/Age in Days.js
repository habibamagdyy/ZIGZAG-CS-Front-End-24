// link problem --> https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/R
function printAge(N) {
    const years = Math.floor(N / 365);
    const remainingDays = N % 365;
    const months = Math.floor(remainingDays / 30);
    const days = remainingDays % 30;

    console.log( years);
    console.log(months);
    console.log( days);
}


printAge(400);
printAge(800);
printAge(30);


