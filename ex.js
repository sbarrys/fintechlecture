var cars =[];
var car01={
	name:"sonata",
	ph:"500ph",
	start : function(){
		console.log("engine is starting");
	},
	stop : function(){
		console.log("engine is stop");
	}
}
var car02={
	name:"sonata2",
	ph:"500ph",
	start : function(){
		console.log("engine is starting");
	},
	stop : function(){
		console.log("engine is stop");
	}
}
var car03={
	name:"BMW",
	ph:"333",
	start : function(){
		console.log("engine is starting");
	},
	stop : function(){
		console.log("engine is stop");
	}
}
cars[0]=car01;
cars[1]=car02;
cars[2]=car03;

for(var i=0;i<cars.length;i++){
	var element= cars[i];
	if(element.name=="BMW"){
		console.log(element);
	}
	
}