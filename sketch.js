var imgCouch;
var jogador;
var objetos = [];
var imgObjetos = [];
var contador = 0;
var bomba = [];
var maximo = 5;
var explosao;
var maggie;
var imgAbertura;
var controleTela = "INICIO";
var imgFinal;
let vidas = 0;

//Número dentro do random deve ser de acordo ("caber") com a quantidade de imagens.

//Adicionar as imagens.
function preload() {
  imgCouch = loadImage("img/couch.jpg");
  imgObjetos[0] = loadImage("jogo/imagem/bola.png");
  imgObjetos[1] = loadImage("jogo/imagem/pato.png");
  imgObjetos[2] = loadImage("jogo/imagem/ursinho.png");
  imgObjetos[3] = loadImage("jogo/imagem/bomba.png");
  som_explosao = loadSound("./sound/som.mp3");
  som_maggie = loadSound("./sound/som2.mp3");
  imgAbertura = loadImage("jogo/imagem/abertura.png");
  imgFinal = loadImage("jogo/imagem/gameover.png");

//Chamar o jogador.
  jogador = new Jogador();
  
  objetos [0]= new Objetos(45);
  objetos [1]= new Objetos(115);
  objetos [2]= new Objetos(290);
  bomba [3]= new Objetos(300);

}

function setup() {
  //Ajustar tamanho da imagem de fundo.
  createCanvas(600, 400).parent("jogo");
}


function keyPressed(){
  if(keyCode == 32)
    controleTela = "Jogo";
}


function draw() {
  if(controleTela == "INICIO"){
    mostraAbertura();
  }
   if(controleTela == "Jogo"){
   ExecutarJogo();}

  if(controleTela == "Gameover"){
   Gameover();
   }
  }
    
  
 



