// JavaScript Document
var canSpecW, canSpecH;
var canvasSpec;
var cubeSpecObj;
var cubiSpecColorBox = [ '#04b0ec', '#00aaff', '#14b1ff', '#1fb4ff', '#33bbff', '#44c1ff', '#11b0ff', '#00a1f2', '#009be9' ];
var cubeSpecOpenP = false;


/* 秘技script */
var HotKeyControler = {
    MAX_QUEUE: 10, /* 保留最後 10 個鍵盤事件 */
    testFuns: new Object(),
    triggerFuns: new Object(),
    KeyQueue: new Array,
    Keyup: function(event) {
        HotKeyControler.KeyQueue.push(event.keyCode);
        if (HotKeyControler.KeyQueue.length > HotKeyControler.MAX_QUEUE) {
            HotKeyControler.KeyQueue.shift();
        }
        for (var key in HotKeyControler.testFuns) {
            if (HotKeyControler.testFuns[key](event,  HotKeyControler.KeyQueue)) {
                HotKeyControler.triggerFuns[key]();
            }
        }
    },
   /*  函數名稱：註冊熱鍵
    *  參數說明：(唯一鍵值, 測試function, 觸發function)
    *  說   明：提供註冊熱鍵的方法，提供目前畫面被按下的按鍵佇列，供AP自行判斷是否觸發執行事件
    */
    RegisterTest: function(key, testFun, triggerFun) {
        if (typeof(testFun)=='function' && typeof(triggerFun)=='function') {
            HotKeyControler.testFuns[key] = testFun;
            HotKeyControler.triggerFuns[key] = triggerFun;
        }
    }
};
 

/* DEMO 註冊當按下 Konami(上上下下左右左右BA)時要觸發的事件 */
HotKeyControler.RegisterTest("Konami"
    ,function(event,code) { /* 上上下下左右左右BA */
        if (code.length!=10) return false;
        if (code[0]==38 && code[1]==38 && code[2]==40 && code[3]==40 &&
            code[4]==37 && code[5]==39 && code[6]==37 && code[7]==39 &&
            code[8]==66 && code[9]==65) {
            return true;
        }
        return false;
    }
    ,function() {
		$('#cubiSpecBox').css({display:'block'});
		$('#specAniBox').css({display:'block'});
		if(cubiAniP == false){
			cubiAniP = true;
    		cubiSpecAni();
		}else{
			
			if(cubeSpecOpenP == false){
				for( var i in cubeSpecAry ){
					cubiSpecAniSet( cubeSpecAry[i], 'start' );
				};
				cubiRandomAni();
			};
			
		};
    }
);


/* 秘技動態 */
var cubiAniP = false;	//確認是否已播過一次

function cubiSpecInit(){
	
	/* 起動秘技鍵盤 */
	$(document).unbind("keyup",HotKeyControler.Keyup);
	$(document).bind("keyup",HotKeyControler.Keyup);
	
	$('<canvas id="cubiSpecBox" style="display:none; width:100vw; height:100vh; z-index:69999999; position:fixed; top:0px; left:0px; background-color:rgba(255,255,255,0);"></canvas>').appendTo('body');
	
	canvasSpec = document.getElementById('cubiSpecBox');
	
	/*Resize*/
	$(window).resize(function() {
		cubiSpecResizeHandler();
	});
	cubiSpecResizeHandler();
	
	$('#spec_btn_close').click(function(e) {
        specAniEnd();
		ga('send', 'event', 'close_konami-code', 'click', 'konami-code');
    });
	
	$('#spec_btn_kick').click(function(e) {
        cubiLinkTo('kickstater');
		ga('send', 'event', 'link_to_kickstater', 'click', 'konami-code');
    });
	
	/* init */
	TweenMax.to( $('#specCubi'), 0, { x:-2000 } );
	
	voteHandlerInit();
	 
};

function cubiSpecResizeHandler(){
	canSpecW = $(window).width();
	canSpecH = $(window).height();
	canvasSpec.width  = canSpecW;
	canvasSpec.height = canSpecH;	
	
	/*spec box*/
	$('#specAniBox').css({ top:canSpecH/2 - $('#specAniBox').height()/2, left:canSpecW/2 - $('#specAniBox').width()/2 });				
};


var cubeSpecAry = []; //cube array
function cubiSpecAni(){
	
	var cubeBox = canvasSpec.getContext('2d');
	var cubeW = 50;
	var cubePosW = 0;  //相隔距離
	var cubeXnum = Math.round( canSpecW/cubeW );	//cube 橫向數量
	var cubeYnum = Math.round( canSpecH/cubeW );	//cube 垂直數量
	
	for(var i=0; i <= cubeXnum; i++){
		
		for(var j=0; j <= cubeYnum; j++){
			//console.warn( Math.floor( Math.random()*cubiSpecColorBox.length ) )
			cubeSpecObj = {
				xpos:cubePosW + i*cubeW,
				ypos:cubePosW + j*cubeW,
				xpos2:0 - Math.random()*canSpecW,
				ypos2:canSpecH + (Math.random()*canSpecH)/2,
				xpos3:cubePosW + i*cubeW + cubeW/2,
				ypos3:cubePosW + j*cubeW + cubeW/2,
				posW:cubeW,
				color:cubiSpecColorBox[ Math.round( Math.random()*cubiSpecColorBox.length ) ],
				color2:cubiSpecColorBox[ Math.round( Math.random()*cubiSpecColorBox.length ) ],
				alpha:0,
				//delay:1.5*Math.random()
				delay:0.04*i + Math.random()*0.4
			}
			cubeSpecAry.push(cubeSpecObj);
			
		};
				
	};
	
	
	function drawCube(){
		
		cubeBox.clearRect(0, 0, canvasSpec.width, canvasSpec.height);
		
		for( var i in cubeSpecAry ){
			cubeBox.beginPath();
			cubeBox.rect(cubeSpecAry[i].xpos, cubeSpecAry[i].ypos, cubeSpecAry[i].posW, cubeSpecAry[i].posW);
			cubeBox.fillStyle = cubeSpecAry[i].color;
			cubeBox.fill();
			cubeBox.globalAlpha = cubeSpecAry[i].alpha;
		};
		
	};
	
	TweenMax.ticker.addEventListener("tick", drawCube);
	
	for( var i in cubeSpecAry ){
		cubiSpecAniSet( cubeSpecAry[i], 'start' );
	};
	
	cubiRandomAni();			
	
};

function cubiSpecAniSet( tarObj, tarType ){
	
	if(tarType == 'start'){
		TweenMax.to(tarObj, 0.6, {
			delay:tarObj.delay,
			alpha:1,
			ease:Elastic.easeOut
		});
	}else{
		TweenMax.to(tarObj, 0.6, {
			delay:tarObj.delay,
			alpha:0,
			ease:Elastic.easeOut
		});
	};
	
};


/* spec random ani */
var specTotalNum = 0;
var specRandomNum = 0;
function cubiRandomAni(){
	
	videoMuteHandler('off');		//影片關靜音
	
	cubeSpecOpenP = true;
	ga('send', 'event', 'open_konami-code', 'click', 'konami-code');

	var specTl = new TimelineLite({ onComplete:specRandomAniFin });
	
	var specBox = $('#specCubi_videoBox');
	var specBoxBgPos;
	var specAniDelay = 0;
	specTotalNum = specMemberTxt.length;
	specRandomNum = Math.floor( Math.random()*specTotalNum );
	specTotalNum = specTotalNum*4 + specRandomNum;
	
	var specPhotoLightPos = 0;
	
	for( var i = 0; i <= specTotalNum; i++ ){
		specBoxBgPos = '0px ' + (-i*220) + 'px';
		specAniDelay = (0.01*i)/12;
		specTl.to(specBox, 0, { backgroundPosition:specBoxBgPos, delay:specAniDelay });
		
		specPhotoLightPos = (i%specMemberTxt.length)*30;
		specTl.to($('#specPhotoList span'), 0, { left:specPhotoLightPos, delay:specAniDelay });
	};
	
	specTl.play();	
	
	/* cubi box ani */
	TweenMax.to( $('#specCubi'), 0, { x:-2000 } );
	TweenMax.to( $('#specCubi'), 2, { x:0, delay:0.5, ease:Quart.easeOut } );
	TweenMax.to( $('#specPhotoList'), 0, { bottom:-30 } );
	TweenMax.to( $('#specPhotoList'), 0.3, { bottom:0, ease:Back.easeOut } );
	
};

var specMemberTxt = [
	{ title:'CEO' , name:'Johnny Fang', word:'"To be or not to be, that is the question!"', videoUrl:'video_01', vote:false, objId:'2vkhHFmz3o'},
	{ title:'FINANCE', name:'Ivy Pan', word:'"World is wonderful with Cubi."', videoUrl:'video_02', vote:false, objId:'wzEREvwAIS'},
	{ title:'DESIGN', name:'Dizzy Ha', word:'"Can’t wait to get my Cubi!"', videoUrl:'video_03', vote:false, objId:'QSyfUrzasI'},
	{ title:'DESIGN', name:'Lion Hu', word:'"All fun and joy, that’s what Cubi is."', videoUrl:'video_04', vote:false, objId:'FMyz2FES81'},
	{ title:'DESIGN', name:'Harry Chuang', word:'"Be my mirror my sword and shield!"', videoUrl:'video_05', vote:false, objId:'HZwMAOQUbu'},
	{ title:'DESIGN', name:'Red Liu', word:'"Just do it."', videoUrl:'video_06', vote:false, objId:'ZVx2efXIPt'},
	{ title:'DESIGN', name:'Once Lee', word:'"LOVE is the message."', videoUrl:'video_07', vote:false, objId:'1CBGGFghHj'},
	{ title:'PM', name:'Sharon Yang', word:'"Family will always be your greatest support."', vote:false, videoUrl:'video_08', objId:'g11Mr4Q7yt'},
	{ title:'PM', name:'Tammy Lu', word:'"Let’s hop to the fantastic world of Cubi!"', videoUrl:'video_09', vote:false, objId:'sTiOr6sWWC'},
	{ title:'MARKETING', name:'Viv Lu', word:'"Support us on Kickstarter."', videoUrl:'video_10', vote:false, objId:'u2csUvf74w'},
	{ title:'MARKETING', name:'Carrie Chang', word:'"Let’s roll."', videoUrl:'video_11', vote:false, objId:'pNM5PKMw2e'},
	{ title:'MARKETING' , name:'Francis Yang', word:'"What you see is MORE than what you ge."', videoUrl:'video_12', vote:false, objId:'HtFsPO1ULf'},
	{ title:'MARKETING', name:'Oni Chen', word:'"Bow down to the Cubi king."', videoUrl:'video_13', vote:false, objId:'r4JtKj4Qlb'},
	{ title:'SALES', name:'Candy Lin', word:'"Be a part of Cubi community."', videoUrl:'video_14', vote:false, objId:'Sf9qq9mMNI'},
	{ title:'SALES', name:'Green Tseng', word:'"Sharing love, BeLuvv!"', videoUrl:'video_15', vote:false, objId:'FRiGPqqY6M'},
	{ title:'ENGINEER', name:'Feng Yang', word:'"Cubi will change your world."', videoUrl:'video_16', vote:false, objId:'7vk9oVMoBM'},
	{ title:'ENGINEER', name:'Aleiku Tsai', word:'"Get your Cubi NOW!"', videoUrl:'video_17', vote:false, objId:'xCKflQOTM2'},
	{ title:'ENGINEER', name:'BoFu Li', word:'"Stop staring and go support us."', videoUrl:'video_18', vote:false, objId:'MNeUa9eOHG'},
	{ title:'ENGINEER', name:'Mark Lee', word:'"Support us! num num num..."', videoUrl:'video_19', vote:false, objId:'ykJSc02O77'},
	{ title:'ENGINEER', name:'Sachiko Sakamoto', word:'"キュービー最高！"', videoUrl:'video_20', vote:false, objId:'Cy8MpV8lQG'},
	{ title:'ENGINEER', name:'Lucia Martinez', word:'"Ayudanos! Necesitamos tu apoyo!"', videoUrl:'video_21', vote:false, objId:'O2S3VwjAmz'},
	{ title:'ENGINEER', name:'Jim Chuang', word:'"This is where it all happened."', videoUrl:'video_22', vote:false, objId:'bAs6Za6nHM'},
	{ title:'???', name:'?????', word:'"!!!!!?????"', videoUrl:'video_23', vote:false, objId:'M9cOcnoXcl'}
];

function specRandomAniFin(){
	
	var specTitle = specMemberTxt[specRandomNum].title;
	var specName = specMemberTxt[specRandomNum].name;
	var specWord = specMemberTxt[specRandomNum].word;
	var specVideoUrl = specMemberTxt[specRandomNum].videoUrl;
	var specObjID = specMemberTxt[specRandomNum].objId;
	
	//parse data
	voteParsePush( 'getData' );
	
	ga('send', 'event', specName, 'randomVideo', 'konami-code');
	
	$('#specTitle01 h5').text(specTitle);
	$('#specTitle01 h3').text(specName);
	$('#specTitle02 h4').text(specWord);
	
	TweenMax.to( $('#specAniBox article'), 0, { alpha:0, y:-300, scale:1, display:'block' } );
	TweenMax.to( $('#specAniBox article'), 0.8, { alpha:1, y:0, scale:1, ease:Bounce.easeOut, onComplete:specVideoStart } );
	
	//import video
	function specVideoStart(){
		
		TweenMax.to( $('#spec_btnBox'), 0, { display:'none', alpha:0, scale:2 } );
		TweenMax.to( $('#spec_btnBox'), 0.8, { display:'block', alpha:1, scale:1, delay:5, ease:Bounce.easeOut } );
		
		//if( specRandomNum == 1 || specRandomNum == 2 || specRandomNum == 3 || specRandomNum == 4 || specRandomNum == 6 || specRandomNum == 7 || specRandomNum == 8 || specRandomNum == 9 || specRandomNum == 10 || specRandomNum == 11 || specRandomNum == 12 || specRandomNum == 13 || specRandomNum == 14 || specRandomNum == 15 || specRandomNum == 16 || specRandomNum == 17 || specRandomNum == 18 || specRandomNum == 19 || specRandomNum == 20 || specRandomNum == 21 || specRandomNum == 22 ){
		$('<video autoplay loop poster="imgs/spec/'+ specVideoUrl +'.jpg"><source src="imgs/spec/'+ specVideoUrl +'.webm" type="video/webm"><source src="imgs/spec/'+ specVideoUrl +'.mp4" type="video/mp4"></video>').appendTo('#specCubi_videoBox');
		//};
	
	}
	
};

function specAniEnd(){
	
	for( var i in cubeSpecAry ){
		cubiSpecAniSet( cubeSpecAry[i], 'end' );
	};
	
	/* cubi box ani */
	TweenMax.to( $('#specCubi'), 1, { x:2000, delay:0.5, ease:Quart.easeIn, onComplete:specAniEndFin } );
	TweenMax.to( $('#specAniBox article'), 0.5, { y:300, alpha:0, ease:Quart.easeIn, onComplete:articleFin } );
	TweenMax.to( $('#spec_btnBox'), 0.1, { alpha:0 } );
	TweenMax.to( $('#specPhotoList'), 0.3, { bottom:-30, ease:Quart.easeIn } );
	
	function articleFin(){
		$('#specAniBox article').css({ display:'none' });
	};	
	
};

function specAniEndFin(){
	
	cubeSpecOpenP = false;
	
	$('#specTitle01 h5').text('');
	$('#specTitle01 h3').text('');
	$('#specTitle02 h4').text('');
	
	$('#cubiSpecBox').css({display:'none'});
	$('#specAniBox').css({display:'none'});
	$('#spec_btnBox').css({display:'none'});
	
	$('#specCubi_videoBox video').remove();
	
	//vote 初始化
	voteP = false;
	$('#specVote_btn').css({  backgroundImage:"url(imgs/spec/vote_btn.gif)" });
	
};


/* vote handler */
var voteP = false;
function voteHandlerInit(){
	
	$('#specVote_btn').click(function(e) {
		if(voteP == false){
			voteParsePush( 'addLike' );
			$('#specVote_btn').css({  backgroundImage:"url(imgs/spec/vote_btn_down.gif)" });
		};
        voteP = true;
    });
	
};

function voteParsePush( tarType ){
	
	var specObjID = specMemberTxt[specRandomNum].objId;
	
	Parse.initialize("tszg2ZVE2QDXgh3G7U2tnoHn4HCMCZUIw5bg0d4d", "hVTuFsR5l7HBRBqYaXrtAs1UFuD1gNqyvtgV4K82");
	
	var SpecVideo = Parse.Object.extend("SpecVideo");
	var specVideo = new Parse.Query(SpecVideo);
	
	specVideo.get(specObjID, {
	  success: function(specVideo) {
		
		var num = specVideo.get("Count");		
		if(tarType == 'addLike'){
			num ++
		};		
		specVideo.set("Count", num);
		
		specVideo.save(); 
		
		$('#specVoteBox span p').text( num + ' likes' );
		
	  },
	  error: function(object, error) {
		
	  }
	});
	
	
	var VideoScore = Parse.Object.extend("SpecVideo");
	var videoScore = new Parse.Query(VideoScore);
	videoScore.descending("Count");
	videoScore.find({
	  success: function(results) {
		
		for (var i = 0; i < results.length; i++) {
		  var object = results[i];
		  if( object.id == specObjID ){
			  var rank =i+1;
			  $('#specVoteBox span h6').text( 'RANK#' + rank );
		  };
		  //console.warn( object.get('tarID') + ' - ' + object.get('Name') + ' - ' + object.get('Count') );
		}
		
	  },
	  error: function(error) {
		alert("Error: " + error.code + " " + error.message);
	  }
	});
	

};


