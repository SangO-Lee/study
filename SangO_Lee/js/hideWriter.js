//게시판 작성자 이름 숨김 처리
	if($('.dh-board').length){
		var totalLine = $('.dh-board .table-hover tbody tr').length;
		for(var i = 0 ; i < totalLine; i++){
			var name = $('.dh-board .table-hover tbody tr').eq(i).children('.writer').text();
			var letter = name.length - 1;
			var asterisk = '';
			for(var x = 0; x < letter; x++){
				asterisk += '*';	
			}
			name = name.slice(0,1) + asterisk;
			$('.dh-board .table-hover tbody tr').eq(i).children('.writer').text(name);
		}
	}