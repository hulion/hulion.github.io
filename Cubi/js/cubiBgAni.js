// JavaScript Document
var canW, canH;
var canvas;
var cubeObj;
var cubiColorBox = { color:'#fff' }

function cubiBgInit(){
		
	canvas = document.getElementById('canvas_cubeBg');
	
	/*Resize*/
	$(window).resize(function() {
		cubiBgResizeHandler();
	});
	cubiBgResizeHandler();
	
	/*cubi bg begin*/
	cubiBgAni();
		
};

function cubiBgResizeHandler(){		
	canW = $(window).width();
	canH = $(window).height();
	canvas.width  = canW;
	canvas.height = canH;					
}

/*creat & draw cube*/
function cubiBgAni(){
	
	var cubeBox = canvas.getContext('2d');
	var cubeAry = []; //cube array
	var cubeS = 30;	//粒子間隔
	var cubeLength = Math.ceil( screen.width/cubeS ); //粒子數量
	
	var cubePosR = 200;
	
	for(var i=0 ; i<= cubeLength ; i++){
		cubeObj = {
			xpos:cubeS*i, ypos:50 + Math.random()*200, xpos2:i*cubeS - 60, ypos2:cubePosR/2 + Math.random()*cubePosR, spos:5 + Math.random()*5, spos2:2 + Math.random()*3, 
			time:0.8 + Math.random()*1, delay:Math.random()*0.1, 
			color:cubiColorBox.color, alpha:0.1 + Math.random()*0.5, alpha2:0.1 + Math.random()*0.2
		}
		cubeAry.push(cubeObj);
	}
	
	function drawCube(){
		
		cubeBox.clearRect(0, 0, canvas.width, canvas.height);
		
		for( var i in cubeAry ){
			cubeBox.beginPath();
			cubeBox.rect(cubeAry[i].xpos, cubeAry[i].ypos, cubeAry[i].spos, cubeAry[i].spos);
			cubeBox.fillStyle = cubiColorBox.color;
			cubeBox.fill();
			cubeBox.globalAlpha = cubeAry[i].alpha;
		}
		
	}
	
	TweenMax.ticker.addEventListener("tick", drawCube);
	
	//set ani
	for( var i in cubeAry ){
		cubiAni( cubeAry[i] )
	}
	
}

function cubiAni( tarObj ){
	TweenMax.to(tarObj, tarObj.time, {ypos:tarObj.ypos2, alpha:tarObj.alpha2, spos:tarObj.spos2, delay:tarObj.delay, yoyo:true, repeat:-1, ease:Quart.easeInOut});
	TweenMax.to(tarObj, tarObj.time, {xpos:tarObj.xpos2, repeat:-1, ease:Power0.easeOut});
}