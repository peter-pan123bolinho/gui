//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;
let raio = diametro/2

//variaveis da velocidade
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

//variaveis da minharaquete
let xMinhaRaquete =20;
let yMinhaRaquete = 150;
let Larguraminharaquete = 10;
let alturaminharaquete = 100;

//função dimençao do fundo
function setup() {
  createCanvas(600, 400);
}

//funçao desenhar
function draw() {
  background(0);
  bolinha();
  minharaquete();
}
  
 //funçao da bolinha
function bolinha(){
  circle(xBolinha, yBolinha, diametro)
  yBolinha += velocidadeyBolinha;
  xBolinha += velocidadexBolinha;
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadexBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
  velocidadeyBolinha *= -1;
  }}
//funça0 da minharaquete
function minharaquete(){
rect(xMinhaRaquete, yMinhaRaquete, Larguraminharaquete, alturaminharaquete);}
   if(keyIsDown(UP_ARROW))
  yMinhaRaquete - 10
   
  if()

