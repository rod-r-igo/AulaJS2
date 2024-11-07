let peso= parseFloat(prompt("Digite seu peso: "));
let altura= parseFloat(prompt("Informe sua altura: "));
let imc = (peso/(altura*altura)).toFixed(2);
document.write("O IMC é igual a: ", imc)
document.write("<br>");

if(imc >= 18,5 && imc <=24,9){
    document.write("O peso está normal!!");
    document.write("<br>");
}else if(imc >= 25 && imc <=29,9){
    document.write("Você esta no grau 1 de obesidade!!")
}else if(imc >= 30 && imc <=34,9){
    document.write("Você esta no grau 2 de obesidade!!")
}else{
    document.write("Você está abaixo do peso ou obesidade 2")
}