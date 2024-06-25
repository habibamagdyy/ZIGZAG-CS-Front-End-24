function callbackBasedFunction(arg1, arg2, callback) {
    setTimeout(() => {
        const result = arg1 + arg2;
        callback(null, result); 
    }, 2000);
}
function promiseBasedFunction(arg1, arg2) {
    return new Promise((resolve, reject) => {
        callbackBasedFunction(arg1, arg2, (error, result) => {
            if (error) {
                reject(error); 
            } else {
                resolve(result); 
            }
        });
    });
}