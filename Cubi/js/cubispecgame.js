/* cubi special game */
function cubispecgame(){
	
	$('#gameTest').click(function(e) {
        cubispecGameStart();
    });
	
};


function cubispecGameStart(){
	
	html2canvas($('#gametest'), {
	  onrendered: function(canvas) {
		$('#cubispecBox').append(canvas);
	  }
	});
	
};