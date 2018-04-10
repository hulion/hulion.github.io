
var controller;

function cubiPageInit(){
	
	controller = new ScrollMagic();
	
	if(isMobile != true){	
		/*page ani*/
		pageBlockAni();
	}else{
		cubiSlideImgHandler();
		page06ImgsShow();
	};
	
	page05MenuInit();
	headerMainMenu();
	cubiLinkHandlerInit();
	
};

/* header menu */
var mainMenuOpenP = false;	//判斷menu是否展開

function headerMainMenu(){
	
	$('#mainMenu_icon').mouseover(function(e) {
		if(isMobile != true){
    		//mainMenuIconAni('on');
		};
    });
	
	var mainMenuGaP = false;		//判斷mainmenu是否已開啟過
	$('#mainMenu_icon').click(function(e) {
		/* if(isMobile != true){
			mainMenuIconAni('off');
		}else{
			if(mainMenuOpenP == true){
				mainMenuIconAni('off');
			}else{
				mainMenuIconAni('on');
			};
		}; */
		
		if(mainMenuOpenP == true){
			mainMenuIconAni('off');
		}else{
			mainMenuIconAni('on');
		};
		
		if(mainMenuGaP == false){
			mainMenuGaP = true;
			ga('send', 'event', 'mainMenu-open', 'click', 'mainMenu_handler');
		};
		
    });
	
	$('#mainMenu').mouseleave(function(e) {
		mainMenuIconAni('off');
		mainMenuListAni('off');
    });
	mainMenuListAni('off');
	
	$('#mainMenu_block li h3').mouseover(function(e) {
    	TweenMax.to( $(this), 0, { alpha:1 } );
    });
	
	$('#mainMenu_block li h3').mouseleave(function(e) {
		TweenMax.to( $(this), 0, { alpha:0.5 } );
    });
	
	$('#mainMenu_block li span').mouseover(function(e) {
    	TweenMax.to( $(this), 0, { alpha:1 } );
    });
	
	$('#mainMenu_block li span').mouseleave(function(e) {
		TweenMax.to( $(this), 0, { alpha:0.5 } );
    });
	
	//main menu
	$('#mainMenu_block li h2 a').click(function(e) {
        maniMenuHandler( $(this).attr('id') );
    });
	
	$('#logo').click(function(e) {
        maniMenuHandler( 'home' );
		ga('send', 'event', 'back-to-top', 'click', 'mainMenu_handler');
    });
	
	//init
	TweenMax.to( [ $('#mainMenu_block li h3'), $('#mainMenu_block li span') ], 0, { alpha:0.5 } );
	
};

function maniMenuHandler(tarID){
	
	var tarPos = 0;
	
	switch(tarID){	
		case 'home':
			tarPos = 0;
			break;
		case 'mainMenu_01':
			tarPos = $('#triggerElememt00').position().top;
			ga('send', 'event', 'What is cubi?', 'click', 'mainMenu_handler');
			break;
		case 'mainMenu_02':
			ga('send', 'event', 'Who is cubi for?', 'click', 'mainMenu_handler');
			tarPos = $('#cubi_page01_main').position().top;
			break;
		case 'mainMenu_03':
			ga('send', 'event', 'What can cubi do?', 'click', 'mainMenu_handler');
			tarPos = $('#cubi_page03_main').position().top;
			break;		
	};
	
	TweenMax.to(window, 0.8, {scrollTo: {y: tarPos}, ease:Power2.easeOut});
	
};

function cubiLinkHandlerInit(){
	
	$('.shareToFb').click(function(e) {
        cubiLinkTo('shareToFb');
    });
	
	$('.shareToTt').click(function(e) {
        cubiLinkTo('shareToTt');
    });
	
	$('#kick_btn').mouseover(function(e) {
        TweenMax.to( $('#kick_btn'), 0.05, { alpha:0.7 } );
    });
	
	$('#kick_btn').mouseleave(function(e) {
        TweenMax.to( $('#kick_btn'), 0.1, { alpha:1 } );
    });
	
	$('.linkToKick').click(function(e) {
        cubiLinkTo('kickstater');
    });
	
	$('.linkToContact').click(function(e) {
        cubiLinkTo('contactUs');
    });
	
	$('.linkToBeLuvv').click(function(e) {
        cubiLinkTo('beluvv');
    });
	
	$('#emailBox_close_btn').click(function(e) {
        emailPopCloseHandler();
    });
	
	$('#emailBox_send_btn').click(function(e) {
        emailSendHaneler();
    });
	
};

function cubiLinkTo(tarID){
	
	var tarUrl = '';
	var openType = "_self";
	
	switch(tarID){
		
		case 'shareToFb':
			tarUrl = 'https://www.facebook.com/sharer/sharer.php?u=http://heycubi.com';
			openType = "_blank";
			ga('send', 'event', 'share_to_facebook', 'click', 'share_handler');
			break;
			
		case 'shareToTt':
			tarUrl = 'https://twitter.com/home?status=Cubi-%20for%20kids%20to%20express%20their%20feeling%20freely%20with%20people%20they%20love.%20Voice%20Messages,%20GPS,%20Friends%20Making%20and%20more.%20heycubi.com';
			openType = "_blank";
			ga('send', 'event', 'share_to_twitter', 'click', 'share_handler');
			break;
			
		case 'contactUs':
			tarUrl = 'http://www.beluvv.com/contact';
			openType = "_blank";
			ga('send', 'event', 'contact_us', 'click', 'link_handler');
			break;
			
		case 'kickstater':
			tarUrl = '';
			//tarUrl = 'https://www.kickstarter.com/projects/1707934370/755449274?token=2c6eb2b8';
			openType = "_blank";
			ga('send', 'event', 'link_to_Kickstater_email_open', 'click', 'link_handler');
			//ga('send', 'event', 'link_to_Kickstater', 'click', 'link_handler');
			//alert('Cubi’s crowdfunding campaign is currently reviewing by Kickstarter. Please check back frequently, we will post latest update to everyone.')
			emialPopHandler();
			break;	
			
		case 'beluvv':
			tarUrl = 'http://www.beluvv.com';
			openType = "_blank";
			ga('send', 'event', 'link_to_BeLuvv', 'click', 'link_handler');
			break;
				
	};
	
	if(tarUrl != ""){
		window.open( tarUrl, openType );
	};
	
};

function mainMenuIconAni(tarType){
	
	var menuLine01 = $('#mainMenu_icon span').eq(0);
	var menuLine02 = $('#mainMenu_icon span').eq(1);
	var menuLine03 = $('#mainMenu_icon span').eq(2);
	
	var mainMenu = $('#mainMenu_block');
	
	if(tarType == 'on'){
		
		mainMenuOpenP = true;
		TweenMax.to( mainMenu, 0.5,{right:0, ease:Quart.easeInOut});
		
		TweenMax.to( menuLine01, 0.5,{rotation:220, top:12, ease:Back.easeOut});
		TweenMax.to( menuLine02, 0.4,{alpha:0, top:12, rotation:120, ease:Quart.easeOut});
		TweenMax.to( menuLine03, 0.5,{rotation:-220, top:12, ease:Back.easeOut});
		
		mainMenuListAni('on');
		
	}else{
		
		mainMenuOpenP = false;
		TweenMax.to( mainMenu, 0.5,{right:-400, ease:Quart.easeInOut});
		
		TweenMax.to( menuLine01, 0.5,{rotation:0, top:0, ease:Back.easeOut});
		TweenMax.to( menuLine02, 0.4,{alpha:1, top:10, rotation:0, ease:Back.easeOut});
		TweenMax.to( menuLine03, 0.5,{rotation:0, top:20, ease:Back.easeOut});
		
	};
	
};

function mainMenuListAni(tarType){
	TweenMax.killTweensOf(['#mainMenu_block li']);
	if(tarType == 'on'){
		for(var i=0; i < $('#mainMenu_block li').length; i++){		
			var tarObj = $('#mainMenu_block li').eq(i);
			TweenMax.to( tarObj, 0.4,{x:0, alpha:1, delay:0.2 + 0.08*i, ease:Quart.easeInOut});	
		};
	}else{
		TweenMax.to( $('#mainMenu_block li'), 0.4,{x:100, alpha:0, ease:Quart.easeOut});	
	};
	
};

/* email pop */
function emialPopHandler(){
	TweenMax.to( $('#emailPopBox'), 0, { display:'block', alpha:0 } )
	TweenMax.to( $('#emailPopBox'), 0.1, { alpha:1 } );	
	TweenMax.from( $('#emailBlock'), 1, { top:-100, ease:Elastic.easeOut } );	
};

function emailPopCloseHandler(){

	TweenMax.to( $('#emailPopBox'), 0.2, { alpha:0, onComplete:aniFin } );
	
	function aniFin(){
		TweenMax.to( $('#emailPopBox'), 0, { display:'none' } );		
	};
	
	$('.input_box').val('');
	
};

function emailSendHaneler(){
	ga('send', 'event', 'mail_send_success', 'click', 'mail_handler');
	alert('Info received! We will update you with our latest progress. Thanks for your support.');
	emailPopCloseHandler();
};


/* page block */
var cubiP = true; //判斷cubi是否為第二階段
var cubiPosX, cubiPosY;

function pageBlockAni(){
	
	/* kick btn ani */
	TweenMax.to( $('#kick_btn'), 0, { scale:0.9 } );
	TweenMax.to( $('#kick_btn'), 0.8, { scale:1, repeatDelay:0.2, rotation:15, yoyo:true, repeat:-1, ease:Back.easeInOut } );
	
	/* scroll ani */
	TweenMax.to( $('#cubi_scrollDown'), 0, { display:'block', alpha:0.2 } );
	TweenMax.to( $('#cubi_scrollDown'), 1, { bottom:50, alpha:1, repeatDelay:0.1, yoyo:true, repeat:-1, ease:Back.easeOut } );
	
	//video
	var tween = TweenMax.fromTo("#cubi_videoFrame", 1, 
			{transformPerspective:800, rotationX:0, y:0, z:0},
			{transformPerspective:800, rotationX:0, y:-200, z:-1000, alpha:0.8}
	);
	var scene = new ScrollScene({triggerElement: "#triggerElememt01", duration: 700}).setTween(tween);
	
	var scene0 = new ScrollScene({triggerElement: "#triggerElememt01s"})
		.on("enter leave", videoCheck);
		
	function videoCheck(e){
		if (e.type == "enter") {
			videoMuteHandler('off');
		}else{
			//videoMuteHandler('on');
		};
	};
	
	//home
	var tween = TweenMax.from("#share_btn", 0.6,{bottom:-250, ease:Back.easeOut});
	var scene1s = new ScrollScene({triggerElement: "#triggerElememt01s"}).setTween(tween);
	
	//var tween = TweenMax.from("#kick_btn", 0.6,{marginLeft:-200, ease:Back.easeOut});
	//var scene1t = new ScrollScene({triggerElement: "#triggerElememt01s"}).setTween(tween);
					
	var tween = TweenMax.fromTo("#canvas_cubeBg", 1, 
			{transformPerspective:800, rotationX:0, y:200, z:0, scale:1.5},
			{transformPerspective:800, rotationX:0, y:0, z:0, scale:1}
	);
	var scene2 = new ScrollScene({triggerElement: "#triggerElememt01", duration: 500}).setTween(tween);
	
	var tween = TweenMax.fromTo("#homeMain_cubi_front", 1, 
			{transformPerspective:800, rotationX:0, y:1000, z:600, marginLeft:0, alpha:1},
			{transformPerspective:800, rotationX:0, y:0, z:0, marginLeft:0, alpha:1}
	);
	var scene3 = new ScrollScene({triggerElement: "#triggerElememt01", duration: 500}).setTween(tween);
	
	var scene4 = new ScrollScene({triggerElement: "#triggerElememt02", duration: 500, offset: 0}).setPin("#cubi_home_main");
	
	//page01
	var scene5 = new ScrollScene({triggerElement: "#triggerElememt03"})
		.on("enter leave", cubeColorUpdate);
	
	function cubeColorUpdate(e){
		if (e.type == "enter") {
			cubiColorBox.color = '#04b0ec';
			cubiP = false;
			logoChange('blue');
		} else {
			cubiColorBox.color = '#fff'
			cubiP = true
			logoChange('white');
		}
	}
	
	var cubiFront_posX = - canW*0.35;
	var tween = TweenMax.to("#homeMain_cubi_front", 1, {bottom:0, marginLeft:cubiFront_posX, z:-400, ease:Quart.easeInOut});
	var scene6 = new ScrollScene({triggerElement: "#triggerElememt04"}).setTween(tween);
	
	cubiSlideImgHandler();	//圖片展示
	
	//page02
	var scene5s = new ScrollScene({triggerElement: "#triggerElememt05s"})
		.on("enter leave", cubeColorUpdate02);
	
	function cubeColorUpdate02(e){
		if (e.type == "enter") {
			logoChange('white');
		} else {
			logoChange('blue');
		}
	}
	
	function logoChange(tarType){
		switch(tarType){
			case 'blue':
				TweenMax.to("#logo_white", 0.5, {height: 0, ease:Quart.easeInOut});
				TweenMax.to("#logo_blue", 0.5, {height: 40, ease:Quart.easeInOut});
				break;
			case 'white':
				TweenMax.to("#logo_white", 0.5, {height: 40, ease:Quart.easeInOut});
				TweenMax.to("#logo_blue", 0.5, {height: 0, ease:Quart.easeInOut});
				break;
		}
	}
	
	
	//cubi 動畫
	cubiImgsAni(0);
	
	var scene5t = new ScrollScene({triggerElement: "#triggerElememt04"})
		.on("enter leave", cubiAniUpdate);
	
	function cubiAniUpdate(e){
		if (e.type == "enter") {
			cubiAniRun('run');
		}else{
			cubiAniRun('back');
		};
	};	
	
	var tween = TweenMax.fromTo("#cubi_boy", 1.5, 
			{top:350},
			{top:-160}
	);
	var scene7 = new ScrollScene({triggerElement: "#triggerElememt03", duration: 500}).setTween(tween);
	
	var tween = TweenMax.to("#white_bg", 0.8, {height:'100vh', ease:Quart.easeInOut} );
	var scene7s = new ScrollScene({triggerElement: "#triggerElememt04"}).setTween(tween);
	
	//page02
	var tween = TweenMax.to("#homeMain_cubi_front", 0.8, {bottom:1500, ease:Linear.easeNone});
	var scene8 = new ScrollScene({triggerElement: "#triggerElememt03s", duration: 1500}).setTween(tween);
	
	//page03
	var tween = TweenMax.fromTo("#cubi_page03_videoD", 3, 
			{top:0},
			{top:0}
	);
	var scene9 = new ScrollScene({triggerElement: "#triggerElememt06", duration: 1200}).setTween(tween);
	
	var tween = TweenMax.from("#page03_info", 0.6, { top:600, ease:Quart.easeOut });
	var scene9t = new ScrollScene({triggerElement: "#triggerElememt06s"}).setTween(tween);
	
	//page04
	var scene9s = new ScrollScene({triggerElement: "#triggerElememt07"})
		.on("enter leave", cubeColorUpdate03);
		
	function cubeColorUpdate03(e){
		if (e.type == "enter") {
			logoChange('blue');
		} else {
			logoChange('white');
		}
	};
	
	var tween = TweenMax.from("#page04_infoBox", 0.6, { marginTop:-500, ease:Back.easeOut });
	var scene9ts = new ScrollScene({triggerElement: "#triggerElememt07s"}).setTween(tween);
	
	var tween = TweenMax.to("#white_bg", 0.5, {height:'0vh', ease:Quart.easeInOut} );
	var scene10f = new ScrollScene({triggerElement: "#triggerElememt07s"}).setTween(tween);
	
	
	//page05	
	var scene10 = new ScrollScene({triggerElement: "#triggerElememt08", duration: 1800 - canH , offset: 0}).setPin("#cubi_page05_main");
	
	var tween = TweenMax.fromTo("#cubi_mobileScreen_page05 ul", 0.5, 
			{top:284},
			{top:0}
	);
	var scene11 = new ScrollScene({triggerElement: "#triggerElememt08s"}).setTween(tween);
	
	var tween = TweenMax.from("#page05_coGuardBg", 1, {marginTop:-(canH/2 + 100), ease:Back.easeOut});
	var scene12 = new ScrollScene({triggerElement: "#triggerElememt08s"}).setTween(tween);
	
	TweenMax.from("#gps_icon01", 0.5, {alpha:0, delay:1, repeat:-1, yoyo:true, ease:Linear.easeNone});
	TweenMax.from("#gps_icon02", 0.5, {alpha:0, delay:-0.5, repeat:-1, yoyo:true, ease:Linear.easeNone});
	
	TweenMax.to("#sos_circle", 1, {rotation:360, repeat:-1, ease:Linear.easeNone});
	TweenMax.to("#vibInfo_circle", 2, {rotation:360, repeat:-1, ease:Linear.easeNone});
	TweenMax.to("#simInfo_circle", 2, {rotation:360, repeat:-1, ease:Linear.easeNone});
	
	var scene12s = new ScrollScene({triggerElement: "#triggerElememt08s"})
		.on("enter leave", page05Update);
		
	function page05Update(e){
		if (e.type == "enter") {
			page05InfoController(0);
			page05MenuChanger(0);
		};
	};
	
	//page06
	page06ImgsShow();
	
	var tween = TweenMax.to("#kick_btn", 1, {marginBottom:-300, ease:Quart.easeInOut});
	var scene13 = new ScrollScene({triggerElement: "#triggerElememt09s"}).setTween(tween);	
	
	var tween = TweenMax.from("#beluvv_btn", 1, {marginBottom:-300, ease:Quart.easeInOut});
	var scene14 = new ScrollScene({triggerElement: "#triggerElememt09s"}).setTween(tween);	
	
	var tween = TweenMax.to("#canvas_cubeBg", 1, {marginTop:-400, ease:Quart.easeInOut});
	var scene15 = new ScrollScene({triggerElement: "#triggerElememt09s"}).setTween(tween);	
	
	var tween = TweenMax.from("#cubi_page06_bottom", 1, {y:300, ease:Quart.easeInOut});
	var scene16 = new ScrollScene({triggerElement: "#triggerElememt09s" }).setTween(tween);
	
	var scene17 = new ScrollScene({triggerElement: "#triggerElememt09s"})
		.on("enter leave", cubeColorUpdate04);
	
	var scrollEndP = false;	//判斷使用者是否滾動到最下方
	
	function cubeColorUpdate04(e){
		if (e.type == "enter") {
			
			logoChange('blue');
			if(scrollEndP == false){
				scrollEndP = true;
				ga('send', 'event', 'scroll_to_end', 'scroll', 'scroll_handler');
				
				TweenMax.to( $('#konamiCodeBox'), 0.8, { right:0, yoyo:true, repeat:1, repeatDelay:8, ease:Quart.easeInOut} )
				
			};
			
		} else {
			logoChange('white');
		};
	};
	
	TweenMax.to( $('#konamiCodeBox'), 0.01, { alpha:0.85, yoyo:true, repeat:-1, repeatDelay:0.5, ease:Linear.easeNone} )
	
	
	//push	
	controller.addScene([
		scene,
		scene0,
		scene1s,
		//scene1t, 
		scene2, 
		scene3, 
		scene4, 
		scene5, 
		scene5s,
		scene5t, 
		scene6,
		scene7,
		scene7s,
		scene8, 
		//scene9, 
		scene9t,
		scene9s,
		scene9ts,
		scene10f,
		scene10, 
		scene11, 
		scene12,
		scene12s,
		scene13,
		scene14,
		scene15,
		scene16,
		scene17
	]);

};

function pageBlockResize(){
	
	var cubiFront = $('#homeMain_cubi_front');
	
	if( canW >= 1600 ){
		TweenMax.to( cubiFront, 0, {scale:1}  );
	}else if(canW < 1600 && canW >= 1025){
		TweenMax.to( cubiFront, 0, {scale:0.8}  );
	}else if(canW < 1025 && canW >= 768){
		TweenMax.to( cubiFront, 0, {scale:0.7}  );
	}else{
		TweenMax.to( cubiFront, 0, {scale:0.5}  );
	};
	
	//public
	if( isMobile == true ){	
		TweenMax.to( cubiFront, 0, {scale:1}  );	
		TweenMax.to( $('#logo'), 0, {scale:0.6, left:-10, top:10 });
		//video
		$('#cubi_videoFrame').css({ width:'100vw', height:'100vh' });
	}else{
		//video
		TweenMax.to( $('#logo'), 0, {scale:0.8 });
		$('#cubi_videoFrame').css({ width:canW, height:canH });	
	};
	
	//$('#cubi_scrollDown').css({ left:canW/2 - $('#cubi_scrollDown').width()/2 })
	
	$('#triggerElememt00').css({ top:canH });
	$('#triggerElememt01').css({ top:canH/2 });
	$('#triggerElememt01t').css({ top:canH + 50 });	
	
	//home
	var cubiW = cubiFront.width();
	var cubiH = cubiFront.height();
	
	$('#video_controller').css({ top:canH/2 - $('#video_controller').height()/2, left:canW/2 - $('#video_controller').width()/2 });
	
	if(cubiP == true && isMobile != true){
		cubiFront.css({ left:canW/2 - cubiW/2 });
	}else{
		cubiPosX = 0;
		cubiPosY = 0;
		//$('#homeMain_cubi_front').css({ left:cubiPosX, bottom:cubiPosY });
	};
	
	$('#triggerElememt02').css({ top:-200 });
	
	//page01
	var page01H = $('#cubi_page01_main').height();
	$('#triggerElememt03').css({ top:page01H/2 - $(window).innerHeight()/4.8 });
	$('#triggerElememt03s').css({ top:page01H/2 + 200 });
	
	$('#cubi_page01_imgSow a').css({ top:$('#cubi_page01_imgSow').height()/2 - $('#cubi_page01_imgSow a').height()/2  })
	
	//page02
	$('#triggerElememt05').css({ top:-300 });
	$('#triggerElememt05s').css({ top:$('#cubi_page02_main').height()/2 })
	
	//page03
	if(isMobile != true){
		$('#cubi_page03_videoD').css({ width:canW*1.3, left:0, top:-150 });
	}
	$('#triggerElememt06').css({ top:0 });
	$('#triggerElememt06s').css({ top:100 });
	
	//page04
	$('#cubi_page05_main').css({ height:canH });
	$('#triggerElememt07').css({ top:$('#cubi_page04_main').height()/2 });
	$('#triggerElememt07s').css({ top:0 });
	
	//page05
	var page05H = $('#cubi_page05_main').height();
	var page05W = $('#cubi_page05_main').width();
	$('#page05_coGuardBg').css({ top:page05H/2 - 150 });	
	$('#cubi_page05_mobileBox').css({ left:page05W/2 - 95, top:page05H/2 - 300 });	
	$('#cubi_page05_menu').css({ left:page05W/2 - $('#cubi_page05_menu').width()/2, top:page05H/2 + 240 });	
	$('.page05_blockBox article').css({ top:page05H/2 + 120, left:page05W/2 - $('.page05_blockBox article').width()/2 });
	
	$('#page05_vibInfo').css({ left:page05W/2 - $('#page05_vibInfo').width()/2 + 40 });
	
	$('#page05_sim').css({ left:page05W/2 - $('#page05_sim').width()/2, top:page05H/2 - $('#page05_sim').height()/2 - 120 });
	
	$('#triggerElememt08').css({ top:page05H/2 });
	$('#triggerElememt08s').css({ top:200 });
	
	//page06
	$('#triggerElememt09s').css({ top:'45vh' });
	
	//spec
	$('#specPhotoList').css({ left:canW/2 - $('#specPhotoList').width()/2 });
	
};

/* page01 */
var cubiAniID = 0;
var cubiImgObj = [];
function cubiImgsAni(){
	
	TweenMax.to("#cubi_eyeAni", 0, {alpha:0, ease:Quart.easeOut});
	$('#cubi_eyeAni').css({ display:'block' });
	
	var cubiImgs = [
		"imgs/cubiimgs/cubi_01.png",
		"imgs/cubiimgs/cubi_02.png",
		"imgs/cubiimgs/cubi_03.png",
		"imgs/cubiimgs/cubi_04.png",
		"imgs/cubiimgs/cubi_05.png",
		"imgs/cubiimgs/cubi_06.png",
		"imgs/cubiimgs/cubi_07.png",
		"imgs/cubiimgs/cubi_08.png",
		"imgs/cubiimgs/cubi_09.png",
		"imgs/cubiimgs/cubi_10.png",
		"imgs/cubiimgs/cubi_11.png",
		"imgs/cubiimgs/cubi_12.png"
	];
	
	for( var i in cubiImgs ){
		$('<img src="' + cubiImgs[i] + '">').appendTo('#homeMain_cubi_front');
		cubiImgObj[i] = $('#homeMain_cubi_front img').eq(i);
		cubiImgObj[i].css({ display:'none' });
	};
	
	cubiAniRun('back');
	
};

var aniInterval;
function cubiAniRun(tarType){
	
	if( aniInterval != '' ){
		clearInterval(aniInterval);
	};
	
	var aniTime = 24;
	
	if(tarType == 'run'){
		aniInterval = setInterval( runAni ,(1/aniTime)*1000 );
		TweenMax.to("#cubi_eyeAni", 0.1, {alpha:0, delay:0.05, ease:Quart.easeOut});
	}else{
		aniInterval = setInterval( backAni ,(1/aniTime)*1000 );
	};
	
	function runAni(){

		$('#homeMain_cubi_front img').css({ display:'none' });
		cubiImgObj[cubiAniID].css({ display:'block' });
		
		if( cubiAniID == cubiImgObj.length - 1 ){	
			clearInterval(aniInterval);
		}else{
			cubiAniID ++
		};
		
	};
	
	function backAni(){
		
		$('#homeMain_cubi_front img').css({ display:'none' });
		cubiImgObj[cubiAniID].css({ display:'block' });
		
		if( cubiAniID == 0 ){
			TweenMax.to("#cubi_eyeAni", 0.1, { alpha:1 });				
			clearInterval(aniInterval);
		}else{
			cubiAniID --;
		};	
		
	};
	
};

var cubiSlideObj;
var cubiSlideAry = [];
var cubiSlideTarID = 0;
function cubiSlideImgHandler(){
	
	var cubiSlideImgs = [
		"imgs/cubiimgs/slide_img_04.jpg",
		"imgs/cubiimgs/slide_img_07.jpg",
		"imgs/cubiimgs/slide_img_01.jpg",
		"imgs/cubiimgs/slide_img_03.jpg",
		"imgs/cubiimgs/slide_img_05.jpg",
		"imgs/cubiimgs/slide_img_06.jpg",
		"imgs/cubiimgs/slide_img_08.jpg",
		"imgs/cubiimgs/slide_img_02.jpg"
	];
	
	if(isMobile == true){
		canW = $(window).innerWidth();
		var cubiSlidePos = [ -canW, 0, canW+200, canW*2 ]	
	}else{
		var cubiSlidePos = [ -canW, 0, 640+200, 640*2 ];
	}
	
	cubiSlideObj = { obj:$('#imgShow_video'), objPosL:cubiSlidePos[0], objPosC:cubiSlidePos[1], objPosR:cubiSlidePos[2], objPosR2:cubiSlidePos[3] }
	cubiSlideAry.push(cubiSlideObj);
	
	for( var i in cubiSlideImgs ){
		$('<img src="' + cubiSlideImgs[i] + '">').appendTo('#cubi_page01_imgSow');
		cubiSlideObj = { obj:$('#cubi_page01_imgSow img').eq(i), objPosL:cubiSlidePos[0], objPosC:cubiSlidePos[1], objPosR:cubiSlidePos[2], objPosR2:cubiSlidePos[3] };
		cubiSlideAry.push(cubiSlideObj);
	};
	
	$('#page01_arrow_R').click(function(e) {
		
        cubiSlideTarID ++;
		
		if(cubiSlideTarID > cubiSlideAry.length - 1){
			cubiSlideTarID = cubiSlideAry.length - 1;
		}else{
			cubiSlideAni(cubiSlideTarID);
		};
				
    });
	
	$('#page01_arrow_L').click(function(e) {
		
        cubiSlideTarID --;
		
		if(cubiSlideTarID < 0){
			cubiSlideTarID = 0;
		}else{
			cubiSlideAni(cubiSlideTarID);
		};
		
    });
	
	cubiSlideAni(0);
	
};

var imgShowArrowP = false;	//判斷是否有人點擊imgShow的左右按鈕
function cubiSlideAni(tarID){
	
	if(imgShowArrowP == false){
		imgShowArrowP = true;
		ga('send', 'event', 'imgShow_arrow_click', 'click', 'imgShow_handler');
	};
	
	if(tarID == 0){
		TweenMax.to( $('#page01_arrow_L'), 0.1, {alpha:0.2});
	}else if(tarID == cubiSlideAry.length-1){
		TweenMax.to( $('#page01_arrow_R'), 0.1, {alpha:0.2});		
	}else{
		TweenMax.to( $('#page01_arrow_R'), 0.1, {alpha:1});
		TweenMax.to( $('#page01_arrow_L'), 0.1, {alpha:1});
	};
	
	for( var i in cubiSlideAry ){
		
		if(i == tarID){
			cubiSlideTween( cubiSlideAry[i].obj, cubiSlideAry[tarID].objPosC );
		}else if(i == tarID + 1){
			cubiSlideTween( cubiSlideAry[i].obj, cubiSlideAry[tarID].objPosR );
		}else if(i < tarID){
			cubiSlideTween( cubiSlideAry[i].obj, cubiSlideAry[tarID].objPosL );
		}else if(i >= tarID){
			cubiSlideTween( cubiSlideAry[i].obj, cubiSlideAry[tarID].objPosR2 );
		};
			
	};
	
	function cubiSlideTween(tarObj, tarPos){
		TweenMax.to(tarObj, 0.8, { left:tarPos, ease:Quart.easeInOut });
	};
	
};


/* page05 menu handler */
function page05MenuInit(){
	
	TweenMax.to("#page05_coGuardBg", 25, {backgroundPosition:'-1499px 0px', ease:Linear.easeNone, repeat:-1});
	TweenMax.to("#page05_flashBg_02", 0.15, {alpha:0.5, repeat:-1, ease:Elastic.easeInOut});
	
	$('#cubi_page05_menu li').mouseover(function(e) {
        TweenMax.to( $(this), 0, {alpha:0.5});
    });
	
	$('#cubi_page05_menu li').mouseout(function(e) {
        TweenMax.to( $(this), 0, {alpha:1});
    });
	
	$('#cubi_page05_menu li').click(function(e) {
		page05InfoController( $(this).index() );
		page05MenuChanger( $(this).index() );
		var page05ControllerID = $(this).index();
		
		switch( page05ControllerID ){
			case 0:
				ga('send', 'event', 'GPS', 'click', 'cubiInfo_handler');
				break;
			case 1:
				ga('send', 'event', 'SOS', 'click', 'cubiInfo_handler');
				break;
			case 2:
				ga('send', 'event', 'Co-Guard', 'click', 'cubiInfo_handler');
				break;
			case 3:
				ga('send', 'event', 'Vib-Button', 'click', 'cubiInfo_handler');
				break;
			/*case 4:
				ga('send', 'event', 'SIM-Card', 'click', 'cubiInfo_handler');
				break;*/
			case 4:
				ga('send', 'event', 'Flash-Light', 'click', 'cubiInfo_handler');
				break;
		};
		
    });
	
	page05InfoController(0);
	page05MenuChanger(0);
	
};

var page05MenuTarID = 0;
function page05MenuChanger( tarID ){
	
	TweenMax.killTweensOf(['#cubi_page05_menu li span']);
	$('#cubi_page05_menu li span').css({width:0});
	page05MenuTarID = tarID;
	var tarObj = $('#cubi_page05_menu li').eq(tarID);
	TweenMax.to( tarObj.find('span'), 6, { width:100, ease:Linear.easeNone, onComplete:page05MenuFin } );
	
};

function page05MenuFin(){
	page05MenuTarID ++;
	if( page05MenuTarID >= $('#cubi_page05_menu li').length ){
		page05MenuTarID = 0;
	};
	page05InfoController( page05MenuTarID );
	page05MenuChanger( page05MenuTarID );	
};

function page05InfoController( tarID ){
	
	switch(tarID){
		case 0:
			mobileScreenController(1);
			coGuardBgController('close');
			mobilePosController('open');
			gpsController('open');
			sosController('close');
			vibController('close');
			simController('close');
			flashController('close');
			break;
		case 1:
			mobileScreenController(2);
			coGuardBgController('close');
			mobilePosController('open');
			gpsController('close');
			sosController('open');
			vibController('close');
			simController('close');
			flashController('close');
			break;
		case 2:
			mobileScreenController(0);
			coGuardBgController('open');
			mobilePosController('open');
			gpsController('close');
			sosController('close');
			vibController('close');
			simController('close');
			flashController('close');
			break;
		case 3:
			coGuardBgController('close');
			mobilePosController('close');
			gpsController('close');
			sosController('close');
			vibController('open');
			simController('close');
			flashController('close');
			break;
		/*case 4:
			coGuardBgController('close');
			mobilePosController('close');
			gpsController('close');
			sosController('close');
			vibController('close');
			simController('open');
			flashController('close');
			break;*/
		case 4:
			coGuardBgController('close');
			mobilePosController('close');
			gpsController('close');
			sosController('close');
			vibController('close');
			simController('close');
			flashController('open');
			break;
	};
	
	function page05ArticleController(){
		
		for(var i=0; i < $('#cubi_page05_contentBlock article').length ; i++){
			var articleBox = $('#cubi_page05_contentBlock article').eq(i);
			TweenMax.to(articleBox, 0.3, {alpha:0, ease:Quart.easeOut});
		};
		
		var tarArticle = $('#cubi_page05_contentBlock article').eq(tarID);
		TweenMax.to(tarArticle, 0.6, {alpha:1, ease:Quart.easeOut});
					
	};
	page05ArticleController();
	
	function coGuardBgController(tarType){
		
		if(tarType == 'open'){
			TweenMax.to("#page05_coGuardBg", 0.8, {alpha:1, ease:Back.easeOut});
		}else{
			TweenMax.to("#page05_coGuardBg", 0.5, {alpha:0, ease:Back.easeOut});
		};
			
	};
	
	function mobilePosController(tarType){
		
		if(tarType == 'open'){
			TweenMax.to("#page05_cubiIphone", 0.6, {top:0, alpha:1, ease:Quart.easeInOut});
		}else{
			TweenMax.to("#page05_cubiIphone", 0.6, {top:-600, alpha:0, ease:Quart.easeInOut});
		};	
				
	};
	
	function mobileScreenController(tarID){
		
		var screenPosY = 0;
		
		switch(tarID){
			case 0:
				screenPosY = 0;
				break;
			case 1:
				screenPosY = -160;
				break;
			case 2:
				screenPosY = -320;
				break;
		};
		
		TweenMax.to( $('#cubi_mobileScreen_page05 ul'), 0.6, {left:screenPosY, ease:Quart.easeInOut});
		
	};
	
	function gpsController(tarType){
		
		if(tarType == 'open'){
			TweenMax.to( $('#gpsBlock_cubi'), 0.8, {left:115, alpha:1, scale:1, ease:Quart.easeInOut});
			TweenMax.to( $('#gpsBlock_local01'), 1, {left:-300, alpha:1, delay:0, scale:1, ease:Quart.easeInOut});
			TweenMax.to( $('#gpsBlock_local02'), 1, {left:350, alpha:1, delay:0.1, scale:1, ease:Quart.easeInOut});
			TweenMax.to( $('#gps_local01_photo'), 0.5, {marginTop:0, alpha:1, delay:0.7, ease:Bounce.easeOut});
			TweenMax.to( $('#gps_local02_photo'), 1, {marginTop:0, alpha:1, delay:0.8, ease:Bounce.easeOut});
		}else{
			TweenMax.to( $('#gpsBlock_cubi'), 0.8, {left:0, alpha:0, scale:0.5, ease:Quart.easeOut});
			TweenMax.to( $('#gpsBlock_local01'), 1, {left:0, alpha:0, scale:0.5, ease:Quart.easeOut});
			TweenMax.to( $('#gpsBlock_local02'), 1, {left:0, alpha:0, scale:0.5, ease:Quart.easeOut});
			TweenMax.to( $('#gps_local01_photo'), 0.5, {marginTop:-30, alpha:0, delay:0, ease:Quart.easeOut});
			TweenMax.to( $('#gps_local02_photo'), 0.5, {marginTop:-30, alpha:0, delay:0, ease:Quart.easeOut});
		};
		
	};
	
	function sosController(tarType){
		
		if(tarType == 'open'){
			TweenMax.to("#page05_cubiIphone", 0.8, {marginLeft:-100, scale:0.8, ease:Quart.easeOut});
			TweenMax.to("#cubi_page05_sosBlock", 0.8, {left:120, alpha:1, scale:1, ease:Quart.easeOut});
			TweenMax.to("#sos_info", 0.5, {top:-50, alpha:1, delay:0.3, ease:Quart.easeOut});
		}else{
			TweenMax.to("#page05_cubiIphone", 0.8, {marginLeft:0, scale:1, ease:Quart.easeInOut});
			TweenMax.to("#cubi_page05_sosBlock", 0.8, {left:260, alpha:0, scale:1.5, ease:Quart.easeInOut});
			TweenMax.to("#sos_info", 0.5, {top:-140, alpha:0, ease:Quart.easeOut});
		};
		
	};
	
	function vibController(tarType){
	
		if(tarType == 'open'){
			TweenMax.to("#page05_vibrationBg", 0.8, {backgroundPosition:'center 0px', alpha:1, ease:Quart.easeInOut});
			TweenMax.to("#vibInfo_circle", 0.4, {scale:1, alpha:1, delay:0.4, ease:Back.easeOut});
			TweenMax.to("#vibInfo_txt", 0.6, {top:0, alpha:1, delay:0.7, ease:Quart.easeOut});
		}else{
			TweenMax.killTweensOf(['#vibInfo_txt']);
			TweenMax.to("#page05_vibrationBg", 0.8, {backgroundPosition:'center 200px', alpha:0, ease:Quart.easeInOut});
			TweenMax.to("#vibInfo_circle", 0.4, {scale:0.5, alpha:0, ease:Back.easeOut});
			TweenMax.to("#vibInfo_txt", 0.6, {top:-100, alpha:0, ease:Quart.easeOut});
		};
		
	};
	
	function simController(tarType){
		
		if(tarType == 'open'){
			TweenMax.to("#page05_simCubiFront", 0.4, {alpha:1, delay:0.3, ease:Quart.easeOut});
			TweenMax.to("#page05_simCubiFront", 0.8, {left:0, delay:0.8, ease:Quart.easeInOut});
			TweenMax.to("#page05_simCard", 0.8, {left:260, delay:0.8, alpha:1, ease:Quart.easeInOut});
			TweenMax.to("#page05_simCover", 0.8, {left:400, delay:0.8, alpha:1, ease:Quart.easeInOut});
			TweenMax.to("#simInfo_circle", 0.5, {scale:1, delay:1.2, alpha:1, ease:Back.easeOut});
			TweenMax.to("#simInfo_arrow", 0.5, {left:-30, delay:1.3, alpha:1, ease:Quart.easeInOut});			
			TweenMax.to("#simInfo_txt", 0.5, {top:0, delay:1.5, alpha:1, ease:Quart.easeInOut});
			TweenMax.to("#page05_sim", 0.1, {alpha:1, ease:Quart.easeInOut});
		}else{
			TweenMax.killTweensOf(['#page05_simCubiFront', '#page05_simCard', '#page05_simCover', '#simInfo_arrow', '#simInfo_txt']);
			TweenMax.to("#page05_simCubiFront", 0.8, {left:100, alpha:0, ease:Quart.easeInOut});
			TweenMax.to("#page05_simCard", 0.8, {left:130, alpha:0, ease:Quart.easeInOut});
			TweenMax.to("#page05_simCover", 0.8, {left:230, alpha:0, ease:Quart.easeInOut});
			TweenMax.to("#simInfo_circle", 0.5, {scale:0.5, alpha:0, ease:Quart.easeOut});
			TweenMax.to("#simInfo_arrow", 0.5, {left:-10, alpha:0, ease:Quart.easeOut});
			TweenMax.to("#simInfo_txt", 0.5, {top:-30, alpha:0, ease:Quart.easeOut});
			TweenMax.to("#page05_sim", 0.5, {alpha:0, ease:Quart.easeInOut});
		};
		
	};
	
	function flashController(tarType){
		
		if(tarType == 'open'){
			TweenMax.to("#page05_flashBg", 0.6, {alpha:1, ease:Quart.easeOut});
		}else{
			TweenMax.to("#page05_flashBg", 0.8, {alpha:0, ease:Quart.easeOut});
		};
		
	};
	
	
};

/* page06 */
function page06ImgsShow(){
	
	var imgObj = [];
	var tl = new TimelineMax({pause:false, repeat:-1, delay:0});
	
	var page06_imgs = [
		"imgs/page06/page06_bg02.jpg",
		"imgs/page06/page06_bg03.jpg",
		"imgs/page06/page06_bg07.jpg",
		"imgs/page06/page06_bg08.jpg",
		"imgs/page06/page06_bg06.jpg",
		"imgs/page06/page06_bg04.jpg",
		"imgs/page06/page06_bg05.jpg",
		"imgs/page06/page06_bg09.jpg",
		"imgs/page06/page06_bg01.jpg"
	];
	
	for(var i in page06_imgs){
		var imgUrl = page06_imgs[i];
		$('<li style="background-image:url(' + imgUrl + ')"></li>').appendTo('#page06_imgs');			
		imgObj[i] = $('#page06_imgs li').eq(i);
		TweenMax.to(imgObj[i], 0, {alpha:0});	
		tl.to(imgObj[i], 1, {alpha:1, delay:4, ease:Linear.easeNone});
	};
	
};

