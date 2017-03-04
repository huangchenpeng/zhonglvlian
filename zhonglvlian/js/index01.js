$(function(){
	//轮播图的方法
	var num01 =0;
	function fun(){
		if(num01 == 3){
			num01 =0;
		}else{
			num01++;
		}
		bianhua();
		//轮播图的点击事件
//
//		//改变点击按钮的颜色
//		var left01 = '-' + num01*1090 +'px';
//		for(var i=0 ;i<4;i++){
//			$('.lunb_dian').children().eq(i).css({background:'#Fff'});
//		}
//		$('.lunb_dian').children().eq(num01).css({background:'#f00'});
//
//		//运动和循环
//		$('.lunb_img').animate({left: left01},'slow');
//		var timer = setTimeout(function(){fun();},4000)
	}
	fun();
	var timer;
	//循环的变化函数
	function bianhua(){
		//改变点击按钮的颜色
		clearTimeout(timer);
		var left01 = '-' + num01*1090 +'px';
		for(var i=0 ;i<4;i++){
			$('.lunb_dian').children().eq(i).css({background:'#Fff'});
		}
		$('.lunb_dian').children().eq(num01).css({background:'#f00'});

		//运动和循环
		$('.lunb_img').animate({left: left01},200);
		timer = setTimeout(function(){fun();},2000);
//		clearTimeout(timer);
//		console.log(timer);
	}




	//下边的的当日抢购的循环轮播
	var num02 = 0;
	function dong(){
		if(num02 ==1){
			num02 = 0;
		}else{
			num02++;
		}
		//变换的点击事件
		$('.hong01').click(function(){
			num02 =1;
//			console.log(num02);
		});

		//上边的箭头改变颜色
		$('.hong01').css({backgroundPositionY: '-53px'});
		$('.hong02').css({backgroundPositionY: '-53px'});
		if(num02 ==0){
			$('.hong01').css({backgroundPositionY: '-83px'});
		}else{
			$('.hong02').css({backgroundPositionY: '-83px'});
		}
		var left02 ='-' + num02*1105 + 'px';
		$('.qiangguo01').animate({left: left02},'slow');
		var timer03 = setTimeout(function(){dong();},5000);
	}
	dong();

	//当日抢购，鼠标滑过，阴影，广告
	for(var p = 0;p<8;p++){
		$('.touming')[p].index = p;
		$('.touming').eq(p).mouseover(function(){
			$('.yinying01').eq(this.index).css({display:'block'});
			$('.xiaopai01').eq(this.index).css({display:'block'});
			$('.xiaopai01').eq(this.index).animate({top:'0px'},300)
		});
		$('.touming').eq(p).mouseout(function(){
			var t = this.index;
			$('.xiaopai01').eq(this.index).animate({top:'80px'},300,function(){
				$('.yinying01').eq(t).css({display:'none'});
				$('.xiaopai01').eq(t).css({display:'none'});
			})
		});
	}







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










	//左侧点击消除广告
	$('.guanggao_r02').click(function(){
		$('.guanggao_r').css({display:'none'});
	});
	//左侧广告，下拉显示
	window.onscroll = function(){
		var top = document.body.scrollTop || document.documentElement.scrollTop;
		//如果下拉500px显示广告，否则消失
		if(top > 700){
			$('.guanggao').css({display:'block'});
		}else{
			$('.guanggao').css({display:'none'});
		}
	}



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
//	$('.gouwuc_bg').mousedown(function(){
//		window.location.href='gouwuche.html';
//	});
})
