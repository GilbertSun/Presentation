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


Promise.reject('aaa').then(function () {
    console.log('resolve');
}).catch(function (res) {
    console.log(res);
}).then(function (res) {
    console.log(res);
});
