class Stone{
	constructor(x,y,width,height)
	{
		var options={
        'restitution':0.8,
        'friction':0.9,
		'density':12
		}
		
		this.x=x;
		this.y=y;
		this.w = width;  
        this.h =  height;
		this.body=Bodies.rectangle(this.x, this.y,this.w, this.h, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos = this.body.position;
			var angle = this.body.angle;
			
			push()
			translate(stonepos.x, stonepos.y);
			rotate(angle);
			rectMode(CENTER)
			stroke(142, 35, 37);
			strokeWeight(1);
			stroke("black");
			rect(0,0, this.w, this.h);
			pop()

			
	}

}