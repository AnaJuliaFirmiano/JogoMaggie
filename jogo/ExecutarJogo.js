
function ExecutarJogo() {
  //Não esquecer de trocar o número dentro do background pelo nome da imagem de fundo.
  background(imgCouch);
  jogador.mova()

  //Personagem voltar
  for(let i=0;i < objetos.length;i++){
    objetos[i].mova();
        if (objetos[i].posY > 500){
      objetos[i] =new Objetos();          
    }
    if(
    jogador.xInicial < objetos[i].xFinal &&
    jogador.xFinal > objetos[i].xInicial &&
    jogador.yInicial < objetos[i].yFinal &&
    jogador.yFinal > objetos[i].yInicial
    ){
      //contador++;
      
    if(objetos[i].imagem == imgObjetos[3]){
      contador = 0;
      objetos[i] = new Objetos(objetos[i].posX);
      som_explosao.play();
      vidas ++;
      
    }
    if(vidas==3){
      controleTela = "Gameover"
      vidas = 0;
      contador = 0;
      jogador = new Jogador();

    }
    else{
      objetos[i] = new Objetos(objetos[i].posX);
      contador++;
      objetos[i].velocidade += 1;
      som_maggie.play();
    }
    }
    textSize(20);
  text("PONTUAÇÃO:"+contador,32,45);
}
}