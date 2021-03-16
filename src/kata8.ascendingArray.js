const ascendingArray = (arr) => {
    if(typeof arr[1] == 'string') {
    arr.sort()
} else {
    arr.sort((a,b) => a-b)
}
return arr
}



module.exports = ascendingArray;