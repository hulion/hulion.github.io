/* 判斷手機 */
var isMobile;

var browser={
    versions:function(){ 
	  var u = navigator.userAgent, app = navigator.appVersion; 
	  return {//移动终端浏览器版本信息 
		  trident: u.indexOf('Trident') > -1, //IE内核
		  presto: u.indexOf('Presto') > -1, //opera内核
		  webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
		  gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
		  mobile: !!u.match(/AppleWebKit.*Mobile.*/)||!!u.match(/AppleWebKit/), //是否为移动终端
		  ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
		  android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
		  iPhone: u.indexOf('iPhone') > -1 ,//|| u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
		  iPad: u.indexOf('iPad') > -1, //是否iPad
		  webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
	  };
	  }(), language:(navigator.browserLanguage || navigator.language).toLowerCase()
};
	
if( browser.versions.iPhone || browser.versions.android || browser.versions.iPad || screen.width <= 1024){
	isMobile = true;
};

if(isMobile == true){
	
	document.write('<link href="css/cubi_css.css" rel="stylesheet" type="text/css" ><link rel="stylesheet" type="text/css" href="css/cubi_mobile_ipad.css" media="screen and (min-width: 414px) and (max-width: 1024px)"><link rel="stylesheet" type="text/css" href="css/cubi_mobile_iphone6.css" media="screen and (min-width: 375px) and (max-width: 414px)"><link rel="stylesheet" type="text/css" href="css/cubi_mobile_iphone5.css" media="screen and (max-device-width: 375px)">');
	
}else{
	
	document.write('<link href="css/cubi_css.css" rel="stylesheet" type="text/css" >');
	
};






