var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('szb');
    }, 1000);
});

promise.then(function (result) {
    console.log(result);
});

setTimeout(function () {
    promise.then(function (result) {
        console.log(result);
    });
}, 2000);
