
var CookieUtil = {
	saveCookie : function(key, value, days){
		//增加和修改都用saveCookie，因为会覆盖
		var date = new Date();  //根据时间的传输删除cookie
		var d = days || 7;//默认7天days参数可以省略
		date.setDate(date.getDate()+d);//d天之后过期
		//编码,否则可能在HBuilder上中文有问题,有问题清除浏览器的历史记录和Cookie即可
		//存储cookie
		document.cookie = key + "="+encodeURIComponent(value) + ";expires=" + date.toGMTString() + ";path=/";
	},
	
	
	
	deleteCookie : function(key){
		//删除cookie原理：设置过期时间为过去的时间，浏览器会自动删除
		//调用保存cookie的方法，直接设置过期的时间
		this.saveCookie(key,"",-3);
		
	},
	
	
	
	//  cookie取出来的格式："key1=value1; key2=value2; key3=value3"
	getCookie : function(key){
		//查找一个值，可以把它转换为数组，通过循环、对比来查找
		var arr = document.cookie.split("; ");//不要忘记空格!!!
		//变成一个数组，进行数组的转换
		//arr = ["key1=value1","key2=value2","key3=value3"]
		for(var i in arr){
			var acookie = arr[i];//某一条cookie,是一个字符串，可再次分割为数组
			//arr2 = ["key1",:"value1"];
			var arr2 = acookie.split("=");//再次切割，变成键值对单独的一个有两个数据的数组
			if(arr2[0] == key){//找到了你要找的那个cookie的key
				return decodeURIComponent(arr2[1]);//arr2[1]就是cookie对应的值				
			}			
		}
		return null;//没有找到该cookie，返回null
	}
};

