function groupAnimals(animals) {
  animals.sort();
  var letter_list = [];
  for(var i=0;i<animals.length;i++){
  	if(letter_list.indexOf(animals[i].substr(0,1)) == -1)
  		letter_list.push(animals[i].substr(0,1));
  }
  var result = [];
  for(var i=0;i<letter_list.length;i++){
  	var result1 = [];
  	for(var j=0;j<animals.length;j++){
  		if(letter_list[i] == animals[j].substr(0,1))
  			result1.push(animals[j]);
  	}
  	result.push(result1);
  }
  return result;
}
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]