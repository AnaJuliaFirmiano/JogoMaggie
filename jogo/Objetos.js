class Objetos{
    constructor(){
    this.imagem = imgObjetos[int(random(0,3.9))];
    this.posX = random (10, 390);
    this.posY = 20;
    this.velocidade = random(1,5);
    this.largura = 40;
    this.altura = 40;
    
    this.yInicial = this.posY;
    this.yFinal = this.posY + this.altura;
    this.xInicial = this.posX;
    this.xFinal = this.posX + this.largura; 
}
  //Mover objetos.
  mova(){
    this.posY += this.velocidade;
    image(this.imagem, this.posX, this.posY, this.altura, this.largura);
   
    this.yInicial = this.posY;
    this.yFinal = this.posY + this.altura;
    this.xInicial = this.posX;
    this.xFinal = this.posX + this.largura;
}
}
