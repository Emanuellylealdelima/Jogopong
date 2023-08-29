let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;

let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;
let raio = diametro / 2;

let xRaquete = 5;
let yRaquete = 150;
let raqueteLargura = 10;
let raqueteAltura = 90;

//Variaveis raqueteOponente

let xRaqueteOponente = 585 ;
let yRaqueteOponente = 150 ; 
let LarguraRaqueteOponente = 10 ;
let AlturaRaqueteOponente = 90 ;

//Variaveis do placar 
let meusPontos = 0 ;
let PontosOponente = 0 ;
let pontoMarcado = false ;
 function setup() {
  createCanvas(600, 400);
   //trilha.loop();
}

 function draw() {
   background(0);
   mostrarBolinha ();
   movimentoBolinha();
   verificacaoColisaoBorda();
   mostrarRaquete(xRaquete , yRaquete);
   movimentaMinhaRaquete();
   verificacaoColisaoRaquete();
   mostrarRaquete(xRaqueteOponente , yRaqueteOponente );
   movimentaRaqueteOponente();
   verificaColisaoRaqueteOponente();
   //mostrar o placar
   textSize (24);
   fill (255);
   text (meusPontos , 20, 30);
   text(PontosOponente, width - 30,30);
 }
function mostrarBolinha(){
  circle(xBolinha, yBolinha,diametro);
}
function mostrarRaquete(x, y) {
  rect(x, y, raqueteLargura,raqueteAltura );
}
function movimentoBolinha() {
  xBolinha+= velocidadeXBolinha;
  yBolinha+= velocidadeYBolinha;
}
function verificaColisaoborda () {
    
    if (xBolinha + raio > width || xBolinha - raio < 0){
      velocidadeXBolinha * - 1;
    } 
    
    if (yBolinha > height || yBolinha < 0){
      velocidadeYBolinha * - 1;
    }
  
  }
function verificacaoColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }

  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }

  if (xBolinha + raio > width) {
    if (!pontoMarcado) {
      meusPontos++; // Incrementa o placar do jogador apenas uma vez
      pontoMarcado = true;
      // ponto.play();
    }
  } else if (xBolinha - raio < 0) {
    if (!pontoMarcado) {
      PontosOponente++; // Incrementa o placar do oponente apenas uma vez
      pontoMarcado = true;
      // ponto.play();
    }
  } else {
    pontoMarcado = false; // Reseta o flag para marcar ponto se não houver colisão com bordas
  }
}

function movimentaMinhaRaquete() {
  
  // Verifica colisão com a borda superior
  if (yRaquete < 0) {
    yRaquete = 0;
  }

  // Verifica colisão com a borda inferior
  if (yRaquete + raqueteAltura > height) {
    yRaquete = height - AlturaRaquete;
  }

  // Move a raquete do jogador com as teclas de seta
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function movimentaRaqueteOponente() {
  // Lógica para fazer a raquete do oponente seguir a bola
  let centroRaqueteOponente = yRaqueteOponente + AlturaRaqueteOponente / 2;
  if (centroRaqueteOponente < yBolinha - 10) {
    yRaqueteOponente += 3;
  } else if (centroRaqueteOponente > yBolinha + 10) {
    yRaqueteOponente -= 3;
  }

  // Verifica colisão com a borda superior
  if (yRaqueteOponente < 0) {
    yRaqueteOponente = 0;
  }

  // Verifica colisão com a borda inferior
  if (yRaqueteOponente + AlturaRaqueteOponente > height) {
    yRaqueteOponente = height - AlturaRaqueteOponente;
  }
}

function verificacaoColisaoRaquete() {
 
  if ( xBolinha - raio < xRaquete + raqueteLargura &&
       yBolinha - raio < yRaquete + raqueteAltura &&
       yBolinha + raio > yRaquete
  ) {
    velocidadeXBolinha *= -1;
    //Raquetada.play();
  }
}

function verificaColisaoRaqueteOponente() {
  if (
    xBolinha + raio > xRaqueteOponente &&
    yBolinha - raio < yRaqueteOponente + AlturaRaqueteOponente &&
    yBolinha + raio > yRaqueteOponente
  ) {
    velocidadeXBolinha *= -1;
    //Raquetada.play();
  }
}

  
  
    