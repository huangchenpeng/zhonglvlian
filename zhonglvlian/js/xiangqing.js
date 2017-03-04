//声明一个变量，用来声明当前选择的类型
var qizhi =0 ;
$(function(){
	
	
	
	
	
	
	
	
		//数字的点击加减问
		//增加
		var num =0;
		$('.zhengjia').mousedown(function(){
			num = $('.num').children()[0].value;
			num ++;
			$('.num').children()[0].value = num;
		});
		//减少
		$('.jianshao').mousedown(function(){
			num = $('.num').children()[0].value;
			num --;
			if(num<1){
				num = 1;
			}
			$('.num').children()[0].value = num;
		});
	
		
		
		//点击改变不同的放大镜图片
		$('.p_b01').mousedown(function(){
			for(var i=1;i<4;i++){
				$('.p_b').children().eq(i).css({border:'1px solid #fff'});
			}
			$('.p_b01').css({border:'1px solid #FF5C00'});
			$('.dizhi04')[0].innerHTML='栋马奔驰Mercedes-Benz SLR儿童电动车宝宝玩具汽车（可遥控）DMD-158 喷漆香槟金';
			$('.xqing_m01')[0].innerHTML ='栋马奔驰Mercedes-Benz SLR儿童电动车宝宝玩具汽车（可遥控）DMD-158 喷漆香槟金';
			$('.dj_jiage')[0].innerHTML = '￥250.00';
			$('.ximg_01')[0].innerHTML ='<img src="img/xiangqing_img/fd01.jpg" />';
			$('.fdj_x')[0].innerHTML ='<img src="img/xiangqing_img/fdj01.jpg"><div class="fdj_xiansji"></div><div class="xuanzhe"></div><div class="dingwei"><div class="kuangjia"><div class="fangdade"><img src="img/xiangqing_img/fdj01.jpg"></div></div></div>';
			aa();
			qizhi =0;
		});
	
		$('.p_b02').mousedown(function(){
			for(var i=1;i<4;i++){
				$('.p_b').children().eq(i).css({border:'1px solid #fff'});
			}
			$('.p_b02').css({border:'1px solid #FF5C00'});
			$('.dizhi04')[0].innerHTML='栋马奔驰Mercedes-Benz SLR儿童电动车宝宝玩具汽车（可遥控）DMD-159 喷漆玫红';
			$('.xqing_m01')[0].innerHTML ='栋马奔驰Mercedes-Benz SLR儿童电动车宝宝玩具汽车（可遥控）DMD-159 喷漆玫红';
			$('.dj_jiage')[0].innerHTML = '￥300.00';
			$('.ximg_01')[0].innerHTML ='<img src="img/xiangqing_img/fd02.jpg" />';
			$('.fdj_x')[0].innerHTML ='<img src="img/xiangqing_img/fdj02.jpg"><div class="fdj_xiansji"></div><div class="xuanzhe"></div><div class="dingwei"><div class="kuangjia"><div class="fangdade"><img src="img/xiangqing_img/fdj02.jpg"></div></div></div>';
			aa();
			qizhi =1;
		});
		
		$('.p_b03').mousedown(function(){
			for(var i=1;i<4;i++){
				$('.p_b').children().eq(i).css({border:'1px solid #fff'});
			}
			$('.p_b03').css({border:'1px solid #FF5C00'});
			$('.dizhi04')[0].innerHTML='栋马奔驰Mercedes-Benz SLR儿童电动车宝宝玩具汽车（可遥控）DMD-160 喷漆黑';
			$('.xqing_m01')[0].innerHTML ='栋马奔驰Mercedes-Benz SLR儿童电动车宝宝玩具汽车（可遥控）DMD-160 喷漆黑';
			$('.dj_jiage')[0].innerHTML = '￥350.00';
			$('.ximg_01')[0].innerHTML ='<img src="img/xiangqing_img/fd03.jpg" />';
			$('.fdj_x')[0].innerHTML ='<img src="img/xiangqing_img/fdj03.jpg"><div class="fdj_xiansji"></div><div class="xuanzhe"></div><div class="dingwei"><div class="kuangjia"><div class="fangdade"><img src="img/xiangqing_img/fdj03.jpg"></div></div></div>';
			aa();
			qizhi =2;
		});
	
	
	
	
	function aa(){
		//放大镜的实现
		$('.fdj_xiansji').mouseover(function(){
			$('.xuanzhe').css({display:'block'});
			$('.dingwei').css({display:'block'});
		});
		
		$('.fdj_xiansji').mouseout(function(){
			$('.xuanzhe').css({display:'none'});
			$('.dingwei').css({display:'none'});
		});
		
		$('.fdj_xiansji').mousemove(function(){
			var evt = event ||window.event;
			var left = evt.offsetX -$('.xuanzhe')[0].offsetWidth/2;
			var top = evt.offsetY - $('.xuanzhe')[0].offsetHeight/2;
			
			if(left <0){
				left = 0;
			}
			if(left > $('.fdj_xiansji')[0].offsetWidth - $('.xuanzhe')[0].offsetWidth){
				left = $('.fdj_xiansji')[0].offsetWidth - $('.xuanzhe')[0].offsetWidth;
			}
			if(top<0){
				top = 0;
			}
			if(top > $('.fdj_xiansji')[0].offsetHeight - $('.xuanzhe')[0].offsetHeight){
				top = $('.fdj_xiansji')[0].offsetHeight - $('.xuanzhe')[0].offsetHeight;
			}
			
			var xtop = top + 'px';
			var xleft = left + 'px';
			$('.xuanzhe').css({top:xtop,left:xleft});
			
			var bx = left / ($('.fdj_xiansji')[0].offsetWidth - $('.xuanzhe')[0].offsetWidth);
			var by = top / ($('.fdj_xiansji')[0].offsetHeight - $('.xuanzhe')[0].offsetHeight);
			
			var nleft = -bx * ($('.fangdade')[0].offsetWidth - $('.kuangjia')[0].offsetWidth) +'px';
			var ntop = -by * ($('.fangdade')[0].offsetHeight - $('.kuangjia')[0].offsetHeight) +'px';
			
			$('.fangdade').css({top:ntop,left:nleft});
			
			
			
		});
		
	}
	
	
	
	
	//放大镜的实现
		$('.fdj_xiansji').mouseover(function(){
			$('.xuanzhe').css({display:'block'});
			$('.dingwei').css({display:'block'});
		});
		
		$('.fdj_xiansji').mouseout(function(){
			$('.xuanzhe').css({display:'none'});
			$('.dingwei').css({display:'none'});
		});
		
		$('.fdj_xiansji').mousemove(function(){
			var evt = event ||window.event;
			var left = evt.offsetX -$('.xuanzhe')[0].offsetWidth/2;
			var top = evt.offsetY - $('.xuanzhe')[0].offsetHeight/2;
			
			if(left <0){
				left = 0;
			}
			if(left > $('.fdj_xiansji')[0].offsetWidth - $('.xuanzhe')[0].offsetWidth){
				left = $('.fdj_xiansji')[0].offsetWidth - $('.xuanzhe')[0].offsetWidth;
			}
			if(top<0){
				top = 0;
			}
			if(top > $('.fdj_xiansji')[0].offsetHeight - $('.xuanzhe')[0].offsetHeight){
				top = $('.fdj_xiansji')[0].offsetHeight - $('.xuanzhe')[0].offsetHeight;
			}
			
			var xtop = top + 'px';
			var xleft = left + 'px';
			$('.xuanzhe').css({top:xtop,left:xleft});
			
			var bx = left / ($('.fdj_xiansji')[0].offsetWidth - $('.xuanzhe')[0].offsetWidth);
			var by = top / ($('.fdj_xiansji')[0].offsetHeight - $('.xuanzhe')[0].offsetHeight);
			
			var nleft = -bx * ($('.fangdade')[0].offsetWidth - $('.kuangjia')[0].offsetWidth) +'px';
			var ntop = -by * ($('.fangdade')[0].offsetHeight - $('.kuangjia')[0].offsetHeight) +'px';
			
			$('.fangdade').css({top:ntop,left:nleft});
			
			
			
			
			
			
			
			
			
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
	
	
	
	
	
	
	
	
	
	
	
	
	
		//点击加入购物车，然后进行cookie的存储
			$('.jiarugwc').mousedown(function(){
				//根据选择不同的车型，来加载不同的图片
				//获取商品数量 
				
				//这个if用来判断用户是否登录
				if(CookieUtil.getCookie('user') == null){
					window.location.href ="zhuce.html";
					return;
				}
				
				
				var qc_num = $('.qiche_nim').val();
				var qc_name =$('.xqing_m01')[0].innerHTML;
				var qc_yanse =$('.dj_jiage')[0].innerHTML.split('￥')[1];
				if(qizhi ==0){
					var sp_cookie01 =['母婴之家商城','母婴之家商城购物车','img/cookie_img/a01.jpg',qc_name,qc_yanse,qc_num,'特价：营养品专享价',5.00];
					CookieUtil.saveCookie('sp01',sp_cookie01);
				}
				if(qizhi ==1){
					var sp_cookie01 =['母婴之家商城','母婴之家商城购物车','img/cookie_img/a02.jpg',qc_name,qc_yanse,qc_num,'特价：营养品专享价',5.00];
					CookieUtil.saveCookie('sp02',sp_cookie01);
				}
				if(qizhi ==2){
					var sp_cookie01 =['母婴之家商城','母婴之家商城购物车','img/cookie_img/a03.jpg',qc_name,qc_yanse,qc_num,'特价：营养品专享价',5.00];
					CookieUtil.saveCookie('sp03',sp_cookie01);
				}
				
				
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
	
	
	
	
	
	
	
	
})
