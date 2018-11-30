function palindrome(kata) {
    var reverse = "";
    for(var i=kata.length-1;i>=0;i--){
        reverse = reverse+kata[i];
    }
    if(kata == reverse)
        return true;
    return false;
}
console.log(palindrome('blanket'));