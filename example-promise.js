// function getTempPromise(location) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function(){
//             resolve(79);
//             reject('City not found');  
//         }, 1000);
//     });
// }

// getTempPromise('Leiden').then(function(temp) {
//     console.log('promise success', temp);
// }, function(err) {
//     console.log('promise error', err);
// });

// Challenge Area

function addPromise(a, b){
    return new Promise(function(resolve,reject){
        if (typeof a == 'number' && typeof b == 'number'){
            resolve(a + b);
        } else {
            reject("The input wasn't all numbers");
        }
    });
}

addPromise(2,3).then(function(sum){
    console.log(sum);
}, function(err){
    console.log(err);
});

addPromise(2,'nope').then(function(sum){
    console.log(sum);
}, function(err){
    console.log(err);
});
