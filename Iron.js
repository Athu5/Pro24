class Iron{
	constructor(x,y,width,height)
	{
		var options={
        'restitution':0.8,
        'friction':3,
		'density':30
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
			var ironpos = this.body.position;
			var angle = this.body.angle;
			
			push()
			translate(ironpos.x, ironpos.y);
			rotate(angle);
			rectMode(CENTER)
			strokeWeight(2);
			fill("black");
			rect(0,0, this.w, this.h);
			pop()

			
	}

}