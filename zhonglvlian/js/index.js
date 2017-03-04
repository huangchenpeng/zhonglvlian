$(function(){
	//手机图标的运动
	$('.header_xz_l_a2').mouseover(function(){
//		$('.header_xz_l_i').css('background-position-y','-265px');
		$('.header_xz_l_i').animate({backgroundPositionY: '-265px'},'slow');
	});
	$('.header_xz_l_a2').mouseout(function(){
//		$('.header_xz_l_i').css('background-position-y','-240px');
		$('.header_xz_l_i').animate({backgroundPositionY: '-240px'},'slow')
	});
	
	//下拉菜单的显示
	$('.xl').eq(0).mouseover(function(){
		$('.xl').eq(0).css({border:'1px solid #FF5C00',background:'#fff'});
		$('.header_xz_r_d1').eq(0).css('display','block');
	});
	$('.xl').eq(0).mouseout(function(){
		$('.xl').eq(0).css({border:'1px solid #eeecef',background:'#eeecef'});
		$('.header_xz_r_d1').eq(0).css('display','none');
	});
	$('.header_xz_r_d1').eq(0).mouseover(function(){
		$('.xl').eq(0).css({border:'1px solid #FF5C00',background:'#fff'});
		$('.header_xz_r_d1').eq(0).css('display','block');
	});
	$('.header_xz_r_d1').eq(0).mouseout(function(){
		$('.xl').eq(0).css({border:'1px solid #eeecef',background:'#eeecef'});
		$('.header_xz_r_d1').eq(0).css('display','none');
	});
	
	
	
	$('.xl').eq(1).mouseover(function(){
		$('.xl').eq(1).css({border:'1px solid #FF5C00',background:'#fff'});
		$('.header_xz_r_d1').eq(1).css('display','block');
	});
	$('.xl').eq(1).mouseout(function(){
		$('.xl').eq(1).css({border:'1px solid #eeecef',background:'#eeecef'});
		$('.header_xz_r_d1').eq(1).css('display','none');
	});
	$('.header_xz_r_d1').eq(1).mouseover(function(){
		$('.xl').eq(1).css({border:'1px solid #FF5C00',background:'#fff'});
		$('.header_xz_r_d1').eq(1).css('display','block');
	});
	$('.header_xz_r_d1').eq(1).mouseout(function(){
		$('.xl').eq(1).css({border:'1px solid #eeecef',background:'#eeecef'});
		$('.header_xz_r_d1').eq(1).css('display','none');
	});
	
	$('.xl').eq(2).mouseover(function(){
		$('.xl').eq(2).css({border:'1px solid #FF5C00',background:'#fff'});
		$('.header_xz_r_d1').eq(2).css('display','block');
	});
	$('.xl').eq(2).mouseout(function(){
		$('.xl').eq(2).css({border:'1px solid #eeecef',background:'#eeecef'});
		$('.header_xz_r_d1').eq(2).css('display','none');
	});
	$('.header_xz_r_d1').eq(2).mouseover(function(){
		$('.xl').eq(2).css({border:'1px solid #FF5C00',background:'#fff'});
		$('.header_xz_r_d1').eq(2).css('display','block');
	});
	$('.header_xz_r_d1').eq(2).mouseout(function(){
		$('.xl').eq(2).css({border:'1px solid #eeecef',background:'#eeecef'});
		$('.header_xz_r_d1').eq(2).css('display','none');
	});
	
	
	//商品分类的箭头运动
	$('#shangpin').mouseover(function(){
		$('.jiao').css('backgroundPosition','-117px -74px');
	});
	$('#shangpin').mouseout(function(){
		$('.jiao').css('backgroundPosition','-110px -65px');
	});
	
	
	//直邮的下拉菜单
	$('.zhiyou').mouseover(function(){
		$('.oz').css({display:'block'});
	});
	$('.zhiyou').mouseout(function(){
		$('.oz').css({display:'none'});
	});
	$('.oz').mouseover(function(){
		$('.oz').css({display:'block'});
	});
	$('.oz').mouseout(function(){
		$('.oz').css({display:'none'});
	});
	
	//三级下拉菜单的第二级
	$('#fenlei').mouseover(function(){
		$('.erji').css({display:'block'});
	});
	$('#fenlei').mouseout(function(){
		$('.erji').css({display:'none'});
	});
	$('.erji').mouseover(function(){
		$('.erji').css({display:'block'});
	});
	$('.erji').mouseout(function(){
		$('.erji').css({display:'block'});
	});
	
	
	$('.li01').mouseover(function(){
//		$('.li01').css({border:'1px solid #FF5C00',borderRight:'none',zIndex:'9999'});
		$('.san01').css({display:'block'});
	});
	$('.li01').mouseout(function(){
		$('.san01').css({display:'none'});
	});
	
	$('.li02').mouseover(function(){
		$('.san02').css({display:'block'});
	});
	$('.li02').mouseout(function(){
		$('.san02').css({display:'none'});
	});
	
	$('.li03').mouseover(function(){
		$('.san03').css({display:'block'});
	});
	$('.li03').mouseout(function(){
		$('.san03').css({display:'none'});
	});
	
	$('.li04').mouseover(function(){
		$('.san04').css({display:'block'});
	});
	$('.li04').mouseout(function(){
		$('.san04').css({display:'none'});
	});
	
	$('.li05').mouseover(function(){
		$('.san05').css({display:'block'});
	});
	$('.li05').mouseout(function(){
		$('.san05').css({display:'none'});
	});
	
	$('.li06').mouseover(function(){
		$('.san06').css({display:'block'});
	});
	$('.li06').mouseout(function(){
		$('.san06').css({display:'none'});
	});
	
	$('.li07').mouseover(function(){
		$('.san07').css({display:'block'});
	});
	$('.li07').mouseout(function(){
		$('.san07').css({display:'none'});
	});
	
	$('.li08').mouseover(function(){
		$('.san08').css({display:'block'});
	});
	$('.li08').mouseout(function(){
		$('.san08').css({display:'none'});
	});
	
	$('.li09').mouseover(function(){
		$('.san09').css({display:'block'});
	});
	$('.li09').mouseout(function(){
		$('.san09').css({display:'none'});
	});
	
	
	
	
	//顶部的登录注册，如果注册显示用户名
	var ssr = CookieUtil.getCookie('user');
	if(ssr == null){
		
	}else{
		var user_name = ssr.split(',')[0];
		$('.header_xz_r_l1')[0].innerHTML ='<p>欢迎来到母婴之家！</p><a href="javascript:;" target="_blank" class="welcome">欢迎</a><a href="gouwuche.html" target="_blank" class="yongName">'+user_name+'</a>';
	}
	
	
	
	
	
	
	
	
})