function criarArray(){
    var positivo = [];
    return positivo;
}

var k ;
var array = criarArray();

for(k=0;k<10;k++){
    var num= Number.parseInt(prompt("Digite um numero inteiro"));
    if(num>0){
        var positivo = array.push(num);
    }
}

document.write("O array formado é " + array);