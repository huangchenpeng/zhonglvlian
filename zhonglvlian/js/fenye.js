$(function(){
	//声明变量，得到json
	var rel;
	
	$.ajax({
		type:"get",
		url:"json/fenye.json",
		dataType: "json",
		success: function(data) {
			rel =data;
			jiazai();
		}
	});
			
			
			
			
			
//加载的函数
var n = 0;   //控制数量的变量
function jiazai(){
	
	var html ='';
	for(var i= n*8;i<(n+1)*8;i++){
		if(i<(rel.length-1)){
			html +='<span class="rongqi"><a href="xiangqing.html" class="fen_img"><img src="'+rel[i].url+'"></a><div class="jieshao"><p>'+rel[i].name+'</p><a href="xiangqing.html">'+rel[i].a+'</a></div><div class="jiage"><p>'+rel[i].jianjie+'</p><a href="xiangqing.html"></a></div></span>';
		}
	}
	//成功加载第一页数据，自动生成相应页数
	var h = Math.ceil(rel.length/8);
	var html_span ='';
	for(var p =1;p<=h;p++){
		html_span +='<span class="xpshp">'+p+'</span>';
	}
	var hh =h*50 +'px';
	//加载页数前，应该先设置宽度
	$('.aj')[0].innerHTML =html;
	$('.yshu')[0].innerHTML =html_span;
	$('.yshu').css({width:hh});
	

	//当前的页数颜色不一样
	$('.xpshp').eq(n).css({background:'#f00',color:'#fff'});


	//分页的点击事件
	for(var i =0 ;i<6;i++){
		$('.xpshp')[i].index =i;
		$('.xpshp').eq(i).mousedown(function(){
			n = this.index;
			jiazai();
		});
	}
}
			
			
});
