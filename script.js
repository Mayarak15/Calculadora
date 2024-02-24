visor = document.querySelector("#visor");

valorum = 0;
valordois = 0;

botao = 0

function apagar(){
  visor.value = "";
  
}
function mais(){
  botao = 1;
  valorum = visor.value;
  visor.value = "";
  visor.focus();
  
}
function menos(){
  botao = 2;
  valorum = visor.value;
  visor.value = "";
  visor.focus();
}
function vezes(){
  botao = 3;
  valorum = visor.value;
  visor.value = "";
  visor.focus();
}
function dividir(){
  botao = 4;
  valorum = visor.value;
  visor.value = "";
  visor.focus();
}
function porcentagem(){
  botao = 5;
  valorum = visor.value;
  visor.value = "";
  visor.focus();
}
function raiz(){
  botao = 6;
  visor.focus();
  //valorum = visor.value;//
  visor.value = "";
  
}
function resultado(){
  if(botao == 1){
  valordois = visor.value;
  visor.value = parseFloat(valorum) + parseFloat(valordois);
}
  if(botao == 2){
  valordois = visor.value;
  visor.value = parseFloat(valorum) - parseFloat(valordois);
}
  if(botao == 3){
  valordois = visor.value;
  visor.value = parseFloat(valorum) * parseFloat(valordois);
}
  if(botao == 4){
  valordois = visor.value;
  visor.value = parseFloat(valorum) / parseFloat(valordois);
}
  if(botao == 5){
  valordois = visor.value;
  visor.value = parseFloat(valorum) /100 * parseFloat(valordois);
}
  if(botao == 6){
  valordois = visor.value;
  visor.value = Math.sqrt(parseFloat(valordois));
}

}
// quando for fazer a parte dos botoes dos numeros ve se funciona assim: "funcao nome(){ visor.value = "3[ex]" }  SOMENTE" 23:54//
function um(){ 
  visor.value += "1"
 }
function dois(){ 
  visor.value += "2"
 }
function tres(){ 
  visor.value += "3" 
}
function quatro(){ 
  visor.value += "4" 
}
function cinco(){
   visor.value += "5" 
  }
function seis(){ 
  visor.value += "6" 
}
function sete(){ 
  visor.value += "7" 
}
function oito(){
   visor.value += "8"
   }
function nove(){ 
  visor.value += "9" 

}
function zero(){ 
  visor.value += "0" 
}
function ponto(){ 
  visor.value += "." 
}
