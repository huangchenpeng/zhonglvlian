$(function(){
	//下边点击，更换图片的样子
	for(var i =0;i<4;i++){
		$('.a01')[i].index = i;
		$('.a01').mousedown(function(){
			for(var p=0;p<4;p++){
				$('.a01').eq(p).css({background:'#f5f5f5',color:'#666'});
			}
			$('.a01').eq(this.index).css({background:'#FF5C00',color:'#fff'});
			var html ='';
			if(this.index == 0){
				html ='<a href="javascript:;" style="background: url(img/haitao_img/lll.gif) no-repeat;"></a>';
			}
			if(this.index == 1){
				html ='<a href="javascript:;" style="background: url(img/haitao_img/lll01.gif) no-repeat;"></a>';
			}
			if(this.index == 2){
				html ='<a href="javascript:;" style="background: url(img/haitao_img/lll02.gif) no-repeat;"></a>';
			}
			if(this.index == 3){
				html ='<a href="javascript:;" style="background: url(img/haitao_img/lll03.gif) no-repeat;"></a>';
			};
			var htmlaa ='';
			for(var p=0;p<10;p++){
				htmlaa += html;
			}
			$('.bianhua')[0].innerHTML = htmlaa;
			console.log(html);
			console.log($('.bianhua')[0].innerHTML)
		});
	}
	
	
	//中间json数据的加载
	$.ajax({
				type:"get",
				url:"json/haitao.json",
				dataType: "json",
				success: function(data) {
					var htmlstr = "";
					var arr = data;
					for(i in arr) {
						htmlstr += '<div class="sp"><a href="javascript:;" class="js_img"><img src="'+arr[i].src+'"></a><div class="sp_r"><span class="zk"></span><a href="javascript:;" class="sp_name">'+arr[i].name+'</a><p class="sp_js">'+arr[i].js+'</p><span class="sp_sz">杭州1号保税仓发货</span><span class="zuihou"><span class="zuihou_l">'+arr[i].jiage+'</span><a href="javascript:;"></a></span></div></div>';
						
					}
					$('.js')[0].innerHTML = htmlstr;
				}
			});
	
	
	
	
	
	//右侧鼠标滑过用户的效果
	$('.yonghu_bg').mouseover(function(){
		$('.yonghu').css({backgroundPositionX:'-22px'});
		$('#yonghu_chucian01').css({display:'block'});
	});
	$('.yonghu_bg').mouseout(function(){
		$('.yonghu').css({backgroundPositionX:'0px'});
		$('#yonghu_chucian01').css({display:'none'});
	});
	//右侧鼠标滑过购物车
	$('.gouwuc_bg').mouseover(function(){
		$('.gouwuc_bg').css({background:'#FF5C00'});
		$('.gouwuc').css({backgroundPositionX:'-22px'});
		$('.gb').css({color:'#fff'});
		$('.gp').css({color:'#fff'});
	});
	$('.gouwuc_bg').mouseout(function(){
		$('.gouwuc_bg').css({background:'#fff'});
		$('.gouwuc').css({backgroundPositionX:'0px'});
		$('.gb').css({color:'#FF5C00'});
		$('.gp').css({color:'#FF5C00'});
	});
	//右侧鼠标滑过图标
	$('.tubiao_bg').mouseover(function(){
		$('.tubiao_bg').css({background:'#FF5C00'});
		$('.tubiao').css({backgroundPositionX:'-22px'});
	});
	$('.tubiao_bg').mouseout(function(){
		$('.tubiao_bg').css({background:'#fff'});
		$('.tubiao').css({backgroundPositionX:'0px'});
	});
	////右侧鼠标滑过收藏 
	$('.shoucang_bg').mouseover(function(){
		$('.shoucang_bg').css({background:'#FF5C00'});
		$('.shoucang').css({backgroundPositionX:'-22px'});
		$('#yonghu_chucian02').css({display:'block'});
	});
	$('.shoucang_bg').mouseout(function(){
		$('.shoucang_bg').css({background:'#fff'});
		$('.shoucang').css({backgroundPositionX:'0px'});
		$('#yonghu_chucian02').css({display:'none'});
	});
	//右侧鼠标滑过返回键
	$('.fanhui_bg').mouseover(function(){
		$('.fanhui_bg').css({background:'#FF5C00'});
		$('.fanhui').css({backgroundPositionX:'-22px'});
		$('.dingbu').css({display:'block'});
	});
	$('.fanhui_bg').mouseout(function(){
		$('.fanhui_bg').css({background:'#fff'});
		$('.fanhui').css({backgroundPositionX:'0px'});
		$('.dingbu').css({display:'none'});
	});
	//左侧鼠标滑过客服
	$('.kefu').mouseover(function(){
		$('.kefu01').css({display:'block'});
	});
	$('.kefu').mouseout(function(){
		$('.kefu01').css({display:'none'});
	});
	//点击返回顶部
	$('.fanhui_bg').click(function(){
		 document.body.scrollTop=document.documentElement.scrollTop=0;
	});
	
	
	
	//根据cookie进行右侧的相关调整
	//右侧用户信息的调整
	var arr =document.cookie.split("; ");
	var html02 ='';
	var nu = 0;
	for(var m in arr){
		var arr02 = arr[m].split("=");
		if(arr02[0] == 'user'){
			var arr03 =decodeURIComponent(arr02[1]).split(',')[0];
			html02 ='<a href="javascript:;" class="x">X</a><div></div><p>您好，母婴之家用户</p><a href="javascript:;" class="dl">欢迎</a><a href="gouwuche.html" class="zc">'+arr03+'</a><i></i>';
			$('#yonghu_chucian01')[0].innerHTML =html02;
			$('#yonghu_chucian02')[0].innerHTML =html02;
		}else{
			if(arr02[0] !='' && arr02[0] != 'userzc'){
				nu += parseInt(decodeURIComponent(arr02[1]).split(',')[5]);
				$('.gp')[0].innerHTML ='('+nu+")";
			}
			
		}
	}
//	$('#yonghu_chucian01')[0].innerHTML =html02;
//	$('#yonghu_chucian02')[0].innerHTML =html02;
//	$('.gp')[0].innerHTML ='('+nu+")";
	
	
	
	
	
	//点击购物车，触发事件
	$('.gouwuc_bg').mousedown(function(){
		window.location.href='gouwuche.html';
	});
	
	

	
});

	