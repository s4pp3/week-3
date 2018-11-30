function targetTerdekat(arr) {
	var result = 0;
	for(var i=0;i<arr.length;i++){
		if(arr[i] == 'o'){
			result = 0;
			for(var j=i;j<arr.length;j++){
				if(arr[j] == 'x')
					return result;
				result++;
			}
		}else if(arr[i] == 'x'){
			result = 0;
			for(var j=0;j<arr.length;j++){
				if(arr[j] == 'o')
					return result;
				else if(arr[j] == 'x')
					result = 0;
				result++;
			}
		}
  	}
  	return result;
}
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2