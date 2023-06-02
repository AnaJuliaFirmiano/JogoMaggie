class Jogador{
    constructor(){   
      this.imagem = loadImage("jogo/imagem/maggie.png");
      this.posX = 200;
      this.posY = 260;
      this.velocidade = 5;
      this.largura = 150;
      this.altura = 250;
        
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.XFinal = this.posX + this.largura;
    }
    
    
    
    
    //Fazer o jogador se movimentar.
      mova(){
      image(this.imagem, this.posX, this.posY, this.altura, this.largura);
        
      if((keyIsDown(37)) && (this.xInicial>-70)){
        this.posX -= this.velocidade;
      }
      if((keyIsDown(39)) && (this.xFinal<590)){
        this.posX += this.velocidade;
      }
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
      }
  }