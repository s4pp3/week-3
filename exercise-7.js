function hitungJumlahKata(kalimat) {
    var length = 1;
    for(var i=0;i<kalimat.length;i++){
        if(kalimat[i] == ' ')
            length++;
    }
    return length;
}
console.log(hitungJumlahKata('I have a dream'));