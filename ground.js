class ground{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
        this.x = x;
        this.y = y
        this.width = width;
        this.height = height;
        this.body=(this.x, this.y, this.width, this.height, 50,50, options);
    }
    display(){
        var groundPos=this.body.position;		
        push()
        translate(groundPos.x, groundPos.y);
        rectMode(CENTER)
        //strokeWeight(4);
        fill(128,128,128)
        rect(0,0,this.w, this.h);
        pop()    }
}