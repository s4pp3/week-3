function dataHandling2(input){
    input.splice(1,4,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
    console.log(input);
    var bulan = input[3].split("/");
    switch(bulan[1]){
        case "05":
            console.log("Mei");
        break;
    }
    bulan.sort(function(a,b){return b-a});
    console.log(bulan);
    console.log(bulan.join("-"));
    console.log(input[1].slice(0,15));
}
var input = ["0001","Roman Alamsyah","Bandar Lampung","21/05/1989","Membaca"];
dataHandling2(input);