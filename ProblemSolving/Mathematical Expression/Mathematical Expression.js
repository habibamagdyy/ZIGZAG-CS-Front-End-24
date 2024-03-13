https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/W
function solveExpression(input) {
    const parts = input.split(/[+\-*= ]/);
    const A = parts[0];
    const S = parts[1];
    const B = parts[2];
    const Q = parts[3];
    const C = parts[4];
    let result;

    switch (S) {
        case '+':
            result = parseInt(A) + parseInt(B);
            break;
        case '-':
            result = parseInt(A) - parseInt(B);
            break;
        case '*':
            result = parseInt(A) * parseInt(B);
            break;
    }

    if (result === parseInt(C)) {
        return 'Yes';
    } else {
        return result;
    }
}


console.log(solveExpression('5 + 10 = 15')); 
console.log(solveExpression('3 - 1 = 2')); 
console.log(solveExpression('2 * 10 = 19')); 
