
function map(array, callback){
    const results = [];
    for (let i=0; i<array.length; ++i){
        results.push(callback(array[i], i));
    }
    return results;
}

function filter(array, callback){
    const results = [];
    for (let i=0; i<array.length; ++i){
        if(callback(array[i], i)){
            results.push(array[i]);
        }
    }
    return results;
}

function reject(array, callback){
    const results = [];
    for (let i=0; i<array.length; ++i){
        if(!callback(array[i], i)){
            results.push(array[i]);
        }
    }
    return results;
}

function find(array, callback){
    for (let i=0; i<array.length; ++i){
        if(callback(array[i], i)){
            return array[i];
        }
    }
    return false;
}

function reduce(array, callback, memo){
    const results = [].concat(array);
    if (memo===undefined){
        memo = results.pop();
    }
    for (let i=0; i<array.length; ++i){
        memo = callback(memo, array[i], index);
    }
    return memo;
}

