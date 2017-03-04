
$(function(){
	//运行循环，添加出来，全部的商品的信息
//	for(var i=0;i<document.cookie.split("; ").length -1;i++){
//		var html ='';
//		
//	}
	 
	//声明变量，进行文字段的存取；
	var html ='';
	var youhui = 0;
	var zobgjia =0;
	var panduan =0;
	//循环整个数组，进行数据的提取预加工
	var arr01 = document.cookie.split("; ");
	for(var i in arr01){
		var acookie =arr01[i];
		var acookieSZ =acookie.split("=");
		if(acookieSZ[0] !='user' &&acookieSZ[0] != 'userzc' && acookieSZ[0] != ''){
			panduan ++;
			//吧数据一个个取出，进行赋值
			var key = acookieSZ[0];
			var aa = decodeURIComponent(acookieSZ[1]).split(",");
			var aa_jiage = aa[4]*aa[5];
			var aa_jiage01 = aa_jiage -aa[7];
			youhui += parseInt(aa[7]);
			zobgjia +=aa_jiage01;
			//现在进行数据的整合
			console.log(acookieSZ[0])
			html +='<div class="shangpin"><div class="biaotou"><div class="shangjia"><a href="javascript:;">'+aa[0]+'</a><p>'+aa[1]+'</p></div>	<span class="b_j">单价（元）</span><span class="b_s">数量（件）</span><span class="b_x">小计（元）</span><span class="b_c">操作</span></div><div class="neirong"><div class="neirong_t"><a href="xiangqing.html" class="img"><img src="'+aa[2]+'" /><div class="key" style="display:none">'+key+'</div></a><span class="neirong_m">'+aa[3]+'</span><span class="neirong_01">￥'+aa[4]+'</span><span class="neirong_02"><div><a class="jiayi" href="javascript:;"></a><input type="text" value="'+aa[5]+'" / class="shuliang"><a class="jianyi" href="javascript:;"></a></div></span><span class="neirong_03">￥'+aa_jiage+'</span><span class="neirong_04"><a href="javascript:;" class="dele">删除</a></span></div><div class="neirong_b"><span>'+aa[6]+'</span><p>已参与</p></div></div><div class="xiaoji"><span class="youhui_xj">已优惠：<p>'+aa[7]+'</p>元</span><span class="wenzi_xioaji">小计：</span><span class="wenzi_jiage">'+aa_jiage01+'</span></div></div>';
		}
	}
	
	//循环结束，加上结尾
	if(panduan >0){
		html +='<div class="youhuima"><div class="youhuima_box"><span class="youhuima_box_l"><input type="text" placeholder="请输入优惠吗" /><a href="javasvript:;"></a>	</span><span class="youhuima_box_m">已优惠:</span><span class="youhuima_box_r">￥'+youhui+'</span></div></div><div class="fuzhang"><span class="fuzhang_l"><a href="javascript:;" class="qingkong">清空购物车</a></span><a href="javascript:;" class="fukuan"></a><span class="zongjia">'+zobgjia+'</span><span class="shuliang_zj">共有<p>9</p>件商品，总计(不含运费)：</span></div>';
		//添加到页面中
	$('.main')[0].innerHTML=html;
		
	}
	
	
	//循环清空购物车
		$('.qingkong').mousedown(function(){
				var asd =document.cookie.split("; ");
				for(var p in asd){
					var ssd = asd[p].split("=");
					if(ssd[0] != 'user' &&ssd[0] != 'userzc'){
						CookieUtil.deleteCookie(ssd[0]);
					}
				}
				window.location.href ="gouwuche.html";
		});
	
	
	//点击修改商品名的数量，修改数字并且存储到cookie，而且重新加载页面
	for(var i =0;i<document.cookie.split("; ").length -1;i++){
		
		//这是减少商品数量， 每次改变完值，重新加载页面
		$('.jiayi')[i].index =i;
		$('.jiayi').eq(i).mousedown(function(){
			var sl01 = $('.shuliang').eq(this.index).val();
			if(sl01 <= 1){
				sl01 =1;
			}else{
				sl01 --;
			}
			$('.shuliang').eq(this.index).val(sl01);
			//获取当前的这个cookie的值，然后刷新这个cookie
			
		
			var q =CookieUtil.getCookie($('.key').eq(this.index)[0].innerHTML).split(",");
			q[5] =sl01;
			var xsp =[q[0],[1],q[2],q[3],q[4],q[5],q[6],q[7]];
			CookieUtil.saveCookie($('.key').eq(this.index)[0].innerHTML,xsp);
			window.location.href='gouwuche.html';
		});
		//增加商品的数量
		$('.jianyi')[i].index =i;
		$('.jianyi').eq(i).mousedown(function(){
			var sl01 = $('.shuliang').eq(this.index).val();
			sl01++;
			$('.shuliang').eq(this.index).val(sl01);
			//获取当前的这个cookie的值，然后刷新这个cookie
			
		
			var q =CookieUtil.getCookie($('.key').eq(this.index)[0].innerHTML).split(",");
			q[5] =sl01;
			var xsp =[q[0],[1],q[2],q[3],q[4],q[5],q[6],q[7]];
			CookieUtil.saveCookie($('.key').eq(this.index)[0].innerHTML,xsp);
			window.location.href='gouwuche.html';
		});
		
		
		//删除按键的点击
		$('.dele')[i].index = i;
		$('.dele').eq(i).mousedown(function(){
			CookieUtil.deleteCookie($('.key').eq(this.index)[0].innerHTML);
			window.location.href='gouwuche.html';
		});
	}
	
	

	
});
