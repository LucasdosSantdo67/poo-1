class Bolha{
  constructor(x,y,r){
    this.x =x;
    this.y =y;
    this.r =r;
  }
  exibir(){
    circle(this.x,this.y,this.r)
    stroke(255);
    noFill();
  }
  atualizar(){
    this.x = this.x + random(-5,5);
    this.y = this.y + random(-5,5);
  }
}