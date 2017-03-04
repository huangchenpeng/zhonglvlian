//声明4个变量，进行验证 
var yes01 = 0,yes02 = 0,yes03 = 0,yes04 = 0;
$(function(){
	//循环设置输入框的普遍特效
	for(var i=0;i<$('input').length -1;i++){
		$('input')[i].index =i;
		//循环遍历输入框给予特效
		//得到焦点的时候，变成红色边框
		$('input').eq(i).focusin(function(){
			$('input').eq(this.index).css({border:'1px solid #f00'});
		});
		//当input失去焦点的时候颜色返回
		$('input').eq(i).blur(function(){
			$('input').eq(this.index).css({border:'1px solid #c1c1c1'});
		});
	}
	
	//从cookie中取出数据，进行保存比较
	//如果数据存在进行相应的计算，如果不存在，则进行调整
	var arr_user01 = CookieUtil.getCookie('userzc');
	if(arr_user01 == null){
		
		//设置用户名的问题
		$('input').eq(0).blur(function(){
				$('.un').css({display:'block'});
				$('input').eq(0).css({border:'1px solid #f00'});
		});
		
		//密码的验证问题
		$('input').eq(1).blur(function(){
				$('.mimaya').css({display:'block'});
				$('input').eq(1).css({border:'1px solid #f00'});
		});
		
	}else{
		
		var arr_user = arr_user01.split(',');
		var arr_name = arr_user[0];
		var arr_password = arr_user[1];
		
		
		
		//设置用户名的问题
		$('input').eq(0).blur(function(){
			if($('input').eq(0).val() == arr_name){
				$('.un').css({display:'none'});
				return yes01 = 1;
			}else{
				$('.un').css({display:'block'});
				$('input').eq(0).css({border:'1px solid #f00'});
			}
		});
		
		//密码的验证问题
		$('input').eq(1).blur(function(){
			if($('input').eq(1).val() == arr_password){
				$('.mimaya').css({display:'none'});
				return yes02 = 1;
			}else{
				$('.mimaya').css({display:'block'});
				$('input').eq(1).css({border:'1px solid #f00'});
			}
		});
	}	
		
		
		
		
		
		
		//验证码的验证问题
		var yanzheng_sz = 0;
		$('.ppt').click(function(){
			//更换验证码的张数
			if(yanzheng_sz ==2){
				yanzheng_sz =0;
			}else{
				yanzheng_sz++;
			}
			$('.yanzheng_tupian').children().eq(yanzheng_sz).fadeIn().siblings().fadeOut();
		});
		
		//验证失去焦点，判断验证码是否正确
		$('input').eq(2).blur(function(){                  
			//进行字符串的判断，根据数字的不同生成不同字符串
			var yanzheng_string01;
			if(yanzheng_sz == 0){
				yanzheng_string01 = 'yj5ngk';
			}
			if(yanzheng_sz ==1){
				yanzheng_string01 = 'svpdcm';
			}
			if(yanzheng_sz == 2){
				yanzheng_string01 = 'u28cqw';
			}
			if($('.yanzheng_write').val() == yanzheng_string01){
				$('.a117').css({display:'none'});
				return yes03 = 1;
			}else{
				$('.a117').css({display:'block'});
				$('input').eq(2).css({border:'1px solid #f00'});
			}
		});
		
		//点击登录按钮触发事件
		$('.dlanniu').mousedown(function(){
			//判断复选框选择的按钮
			if($('input').eq(3)[0].checked == true){
				yes04 = 1;
			}else{
				yes04 = 0;
			}
			//进入注册判断函数
			dlhs();
		});
		
		//登录调用函数
		var dlhs =function(){
			if($('input').eq(0).val() == '' || $('input').eq(1).val() =='' || $('input').eq(2).val() ==''){
				alert('请输入内容');
				return;
			}
			if(yes01 ==0 ||yes02==0||yes03==0){
				alert('输入不正确，请正确输入');
				return;
			}
			if(yes04 == 0){
				alert('需要同意用户协议');
				return;
			}
//			console.log(arr_user)
			CookieUtil.saveCookie('user',arr_user);
			window.location.href = 'index.html';
		}
		
});
