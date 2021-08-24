// 1.
function isInt(n){
    return Number(n) && n % 1 === 0;
}

// 2.
Number.isInteger(n);

// 3.
if(n === parseInt(n,10)){
    console.log('This is integer value');
}

// 4.
function isInt(n) {
    return parseInt(n, 10) === n && !isNaN(parseInt(n, 10));
}

// 5.
function isInt(n) {
    return ( parseFloat(n) | 0 ) === n && !isNaN(parseInt(n, 10));
}