function angkaPalindrome(num) {
    var found = false;
    while(!found){
        num++;
        var reverse = "";
        var nums = ""+num;
        for(var i=nums.length-1;i>=0;i--){
            reverse = reverse+nums[i];
        }
        if(reverse == nums)
            found = true;
    }
    return num;
}
console.log(angkaPalindrome(8));