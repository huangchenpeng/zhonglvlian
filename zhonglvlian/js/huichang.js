
$(function(){
	//json的加载
	var xh = new XMLHttpRequest();
	xh.open('GET',"json/huichang.json",true);
	xh.send(null);
	xh.onreadystatechange=function(){
		if(xh.readyState == 4&&xh.status ==200){
			rel = eval(xh.responseText);
			var html01='';
			for(var i=0;i<rel.length;i++){
				html01 +='<li><span><a href="xiangqing.html"><img src="'+rel[i].url+'"/></a></span><a href="xiangqing.html" class="mz">'+rel[i].name+'</a><b>玩具专场</b><strong>'+rel[i].jianjie+'</strong><a href="xiangqing.html" class="dian04"></a></li>';
			}
			document.getElementById('xhr').innerHTML =html01;			
		}
	}
	
	
	
	
	
	
	
//	//图标的出现点击
//	$('.fenxiang').mouseover(function(){
//		$('.fenxiang').animate({width:'140px',height:'230px'},300);
//	});
//	$('.fenxiang').mouseout(function(){
//		$('.fenxiang').animate({width:'24px',height:'88px'},300);
//	});
	
	
});
