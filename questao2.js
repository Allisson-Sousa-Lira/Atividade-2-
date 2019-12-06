var array1 = [1,2,3,4,5];
var array2 = ["uva","pêra","maça","banana","pesego"];
var novoArray = [];

for(var k=0;k<array1.length;k++){
    novoArray.push(array1[k]);
    novoArray.push(array2[k]);
}

document.write(novoArray);

