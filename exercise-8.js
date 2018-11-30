function pasanganTerbesar(num) {
    num = ""+num;
    var pasangan = [];
    for(var i=0;i<num.length-1;i++){
        pasangan.push(num[i]+num[i+1]);
    }
    pasangan.sort();
    return pasangan[pasangan.length-1];
}
console.log(pasanganTerbesar(12783456));