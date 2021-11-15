let counter = function(arr){
    return `There are ${arr.length} elements in this array`
}

let counter_2 = function(arr){
    return `There are ${arr.length*10} elements in this array`
}

let summ = function(a,b){
    return (a+b);
}

module.exports = {
    ct1:counter,
    ct2:counter_2,
    sum:summ
}

// module.exports.ct1 = counter;
// module.exports.ct2 = counter_2;
// module.exports.sum = summ;