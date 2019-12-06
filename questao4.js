var expressao = prompt("Digite a expressao");

var abertas= 0;
var fechadas=0;
var bemformado = false;
var regra=false;

var primeiroAberto = expressao.search("(");
var primeiroFechado = expressao.search(")");

if(primeiroAberto<=primeiroFechado){
    regra = true;
}

for (var i=0;i<expressao.length;i++){
    var c= expressao.charAt(i);
    if(c=="("){
        abertas++;
    }
    if(c==")"){
        fechadas++;
    }
}

if((abertas==fechadas) && regra==true){
    document.write("A expressao é bem feita");
}
else{
    document.write("A expressao é mau feita");
}