function cariMean(arr) {
    var result = 0;
    for(var i=0;i<arr.length;i++){
        result = result + arr[i];
    }
    return Math.round(result/arr.length);
}
console.log(cariMean([1, 2, 3, 4, 5]));