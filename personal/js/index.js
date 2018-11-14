$(function() {
	var obj = [];
	var operation = function(selector,i) {
		var $this = true;
		selector.click(function() {
			selector.parent().parent().children(0).children('div').children('span').text(obj[i]);
			if($this == true) {
				selector.css("background", "#85d67c").text("ON");
				$this = false;
				selector.parent().parent().children(0).mouseover(function() {
					$(this).children('div').children('span').css("visibility", "visible");
				})

				selector.parent().parent().children(0).mouseout(function() {
					
					selector.parent().parent().children(0).children('div').children('span').css("visibility", "hidden");
					
				})

			} else {
				selector.css("background", "#da5151").text("OFF");
				$this = true;
				selector.parent().parent().children(0).unbind();
				selector.parent().parent().children(0).children('div').children('span').text("");
			}
		});
	}
	var ajax = function(url, fnSucc) {
		if(window.XMLHttpRequest) {
			var oAjax = new XMLHttpRequest();
		} else {
			var oAjax = new ActiveXObject("Microsoft.XMLHTTP");
		}
		oAjax.open("GET", url, true);
		oAjax.send();
		oAjax.onreadystatechange = function() {
			if(oAjax.readyState == 4) {
				if(oAjax.status == 200) {
					fnSucc(oAjax.responseText);
				} else {
					if(fnfiled) {
						fnField(oAjax.status);
					}
				}
			}
		};
	}
	window.onload = function() {
		ajax('ajax.php', function(str) {
			obj = str.split('\n');
			for(var i=0,j=obj.length;i<j;i++){
				obj[i] =obj[i].substring(2);
			}
		});
		ajax('question.php', function(json) {
			var obj = JSON.parse(json);
			$('.question').each(function(i){
				$(this).text(obj[i]);
			})
		});
	};

	operation($('#button1'),0);
	operation($('#button2'),1);
	operation($('#button3'),2);

})