		//声明五个变量，去判断各个输入框，是否实现了相应规则
		var flay01 = 0,flay02 = 0,flay03 = 0,flay04 = 0,flay05 = 0;
$(function(){
	

	//运用一个循环，input发生焦点的得失时候，发生颜色的变换
	//因为最后一个input是复选框，所以最后的一个不用去管，
	for(var i=0;i<$('input').length - 1;i++){
		$('input')[i].index = i;
		//得到焦点的时候，变成红色边框
		$('input').eq(i).focusin(function(){
			$('input').eq(this.index).css({border:'1px solid #f00'});
//			$('input').eq(this.index).next().css({display:'block'});
		});
		//当input失去焦点的时候颜色返回
		$('input').eq(i).blur(function(){
			$('input').eq(this.index).css({border:'1px solid #c1c1c1'});
		});
	}
	
	//手机号失去焦点触发事件，进行判断是否正确
	$('input').eq(0).blur(function(){
		var phone = /^\d{11}$/;
		if(phone.test($('input').eq(0).val())){
			$('.phone_xc').css({display:'none'});
			return flay01 = 1;
		}else{
			$('.phone_xc').css({display:'block'});
			$('input').eq(0).css({border:'1px solid #f00'});
		}
	});
	
	//密码输入位数不够的警报
	$('input').eq(1).blur(function(){
		var mima_01 = /^\w{6,12}$/;
		if(mima_01.test($('input').eq(1).val())){
			$('.mm_01').css({display:'none'});
			return flay02 = 1;
		}else{
			$('.mm_01').css({display:'block'});
			$('input').eq(1).css({border:'1px solid #f00'});
		}
	});
	
	//确认密码，如果密码不一致警报
	$('input').eq(2).blur(function(){
		if($('input').eq(1).val() == $('input').eq(2).val()){
			$('.mm_02').css({display:'none'});
			return flay03 = 1;
		}else{
			$('.mm_02').css({display:'block'});
			$('input').eq(2).css({border:'1px solid #f00'});
		}
		if($('input').eq(2).val() == ''){
			$('.mm_02').css({display:'block'});
			$('input').eq(2).css({border:'1px solid #f00'});
		}
	});
	
	
	
	
	//点击按钮更换验证码
	var yanzheng_num = 0;
	$('.huan_yzm').click(function(){
		//更换验证码的张数
		if(yanzheng_num ==2){
			yanzheng_num =0;
		}else{
			yanzheng_num++;
		}
		$('.yanzhengma_show').children().eq(yanzheng_num).fadeIn().siblings().fadeOut();
	});
	
	//验证失去焦点，判断验证码是否正确
	$('input').eq(3).blur(function(){                  
		//进行字符串的判断，根据数字的不同生成不同字符串
		var yanzheng_string;
		if(yanzheng_num == 0){
			yanzheng_string = 'yj5ngk';
		}
		if(yanzheng_num ==1){
			yanzheng_string = 'svpdcm';
		}
		if(yanzheng_num == 2){
			yanzheng_string = 'u28cqw';
		}
		if($('.yanzhengma_shuru').val() == yanzheng_string){
			$('.yanzhengma_jg').css({display:'none'});
			return flay04 = 1;
		}else{
			$('.yanzhengma_jg').css({display:'block'});
			$('input').eq(3).css({border:'1px solid #f00'});
		}
	});
	
	//点击注册按钮触发事件
	$('.tijiao').mousedown(function(){
		//判断复选框选择的按钮
		if($('input').eq(4)[0].checked == true){
			flay05 = 1;
		}
		//进入注册判断函数
		zcpd();
	});
	
});


	//注册判断函数
	var zcpd =function(){
		//先判断是否有输入框，没有输入
		if($('input').eq(0).val() == '' || $('input').eq(1).val() =='' || $('input').eq(2).val() =='' || $('input').eq(3).val() ==''){
			alert('信息输入不完整，请完整输入');
			return;
		}
		if(flay01==0||flay02==0||flay03==0||flay04==0||flay05==0 ){
//			console.log(flay01);
//			console.log(flay02);
//			console.log(flay03);
//			console.log(flay04);
//			console.log(flay05);
			
//			alert('信息输入不正确');
			return;
		}
		//如果满足要求保存数据 
		if(flay01==1&&flay02==1&&flay03==1&&flay04==1&&flay05==1){
			var xming = $('input').eq(0).val();
			var mimax = $('input').eq(1).val();
			var userss =[xming,mimax];
        	CookieUtil.saveCookie("userzc",userss);
        	window.location.href ='denglu.html';
		}


	}
