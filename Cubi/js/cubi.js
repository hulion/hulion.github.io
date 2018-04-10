$(function(){
	
	/* init */
	if(isMobile != true){
		cubiBgInit();
		cubiSpecInit();
	};
	cubiPageInit();	
	
	/* resize */
	$(window).resize(function() {		
		pageBlockResize();	
	});
	pageBlockResize();
	
	TweenMax.to( $('.spacer'), 0, {alpha:0} );
	TweenMax.to( $('#video_blackBg'), 0, {alpha:0.5} );
	TweenMax.to( $('#video_controller'), 0, {alpha:0.8} );
	
});


/* home video */

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
	
function onYouTubePlayerAPIReady() {
	
	var autoPlayType = 0;
	if(isMobile != true){
		autoPlayType = 1;
	};
	
	player = new YT.Player('ytplayer', {
		height: '100%',
		width: '100%',
		videoId: 'oKqxJ39Y8xY',
       playerVars: {
            controls: 1,
            disablekb: 1,
			 autoplay:autoPlayType,
			 autohide:1,
			 loop:1,
			 rel:0,
			 showinfo:0,
			 theme:'light',
			 fs:1
       },
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
  
};

var videoP = false; //判斷影片是否播放中
function onPlayerReady(){
	
	//player.mute();
	player.setVolume(0);
	//player.getPlaybackQuality('hd720');
	
	$('#video_controller').mouseover(function(e) {
        if(videoP == true){
        	$(this).css({ backgroundPosition:'0px -120px' });
		}else{
			$(this).css({ backgroundPosition:'0px -60px' });		
		};
    });
	
	$('#video_controller').mouseleave(function(e) {
		if(videoP == true){
        	$(this).css({ backgroundPosition:'0px -120px' });
		}else{
			$(this).css({ backgroundPosition:'0px 0px' });		
		};
    });
	
	$('#video_controller').click(function(e) {		
		videoPlayHandler();		
	});
	
};

function videoPlayHandler(){
	
	if(videoP == false){
		videoP = true;
		player.seekTo(0, true);
		videoMuteHandler('on');
		homeVideoPlay();
		$('#video_controller').css({ backgroundPosition:'0px -120px' });
		TweenMax.to( $('#video_controller'), 0.1, {alpha:0.1} )
	}else{
		videoP = false;
		videoMuteHandler('off');
		player.pauseVideo();
		$('#video_controller').css({ backgroundPosition:'0px 0px' });
		TweenMax.to( $('#video_controller'), 0.1, {alpha:0.8} );
	};
	
};

function videoMuteHandler(tarType){
	
	if(tarType == 'on'){
		//player.unMute(); //取消靜音
		TweenMax.to(player, 0.8, { setVolume:30 });
	}else{
		//player.mute();
		TweenMax.to(player, 0.8, { setVolume:0 });
	}
	
};

function onPlayerStateChange(){
	
	if( player.getPlayerState() == 0 ){
		homeVideoPlay();
	};
	
};

function homeVideoPlay(){
	player.playVideo()
};

function homeVideoStop(){
	//player.stopVideo()
};

