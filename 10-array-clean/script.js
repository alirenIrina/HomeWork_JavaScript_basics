const arr = [3, 6, 9, 2];

function del(el) {
    if (el > 5) {
        return true;
    }
    return false;
}

function filterArr(arr, fn) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]) === false) {
           newArr.push(arr[i]);
        }
    }
    
    return newArr;
}

console.log(filterArr(arr, del));
