$(function(){
	
	var xh = new XMLHttpRequest();
	xh.open('GET',"json/paixu.json",true);
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
	
	
	
	
	$('.aaa01').mousedown(function(){
		console.log('dad')
		for(var i=0;i<3;i++){
			$('.aaa').eq(i).css({background:'#fff',color:"#666"});
		}
		$('.aaa01').css({background:'#f00',color:"#fff"});
		
		
		
		
		
		
		var xh = new XMLHttpRequest();
	xh.open('GET',"json/paixu.json",true);
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
	});
	
	
	var rel;
	var arr = [];
	//用json去吧数据传输出来，得到一个价格的排序数组
	$.ajax({
		type:"get",
		url:"json/paixu.json",
		dataType: "json",
		success: function(data) {
			rel =data;
			
			for(var i=0;i<rel.length;i++){
				arr.push(parseInt(rel[i].jianjie.split(' ')[1].split('.')[0]))
			}
			arr.sort(function(a,b){
				return a-b;
			})
			
			
			//最后的目的得到排序后的相应json的一个数组。用来确定加载的顺序
		}
		
		

		
	});
	
	
	
	
	//此时的arr是一个由低到高的
	
			
		//便宜万岁
		$('.aaa03').mousedown(function(){
		console.log(arr);
		for(var i=0;i<3;i++){
			$('.aaa').eq(i).css({background:'#fff',color:"#666"});
		}
		$('.aaa03').css({background:'#f00',color:"#fff"});
		
		
		arr.sort(function(a,b){
			return a-b;
		})
		
		
		
		var xh = new XMLHttpRequest();
	xh.open('GET',"json/paixu.json",true);
	xh.send(null);
	xh.onreadystatechange=function(){
		if(xh.readyState == 4&&xh.status ==200){
			rel = eval(xh.responseText);
			var html01='';
			var mmk =0;
			while(mmk < 8){
				for(var i=0;i<rel.length;i++){
					if(parseInt(rel[i].jianjie.split(' ')[1].split('.')[0]) == arr[mmk]){
						html01 +='<li><span><a href="xiangqing.html"><img src="'+rel[i].url+'"/></a></span><a href="xiangqing.html" class="mz">'+rel[i].name+'</a><b>玩具专场</b><strong>'+rel[i].jianjie+'</strong><a href="xiangqing.html" class="dian04"></a></li>';
						mmk++;
					}
					
				}
			}
			
			
			document.getElementById('xhr').innerHTML =html01;		
			
			
			
		}
	}
	});
		
	
	
	
	
	
	//贵的典范
		$('.aaa02').mousedown(function(){
		for(var i=0;i<3;i++){
			$('.aaa').eq(i).css({background:'#fff',color:"#666"});
		}
		$('.aaa02').css({background:'#f00',color:"#fff"});
		
		
		
		
		
		arr.sort(function(a,b){
			return b-a;
		})
		console.log(arr);
		var xh = new XMLHttpRequest();
	xh.open('GET',"json/paixu.json",true);
	xh.send(null);
	xh.onreadystatechange=function(){
		if(xh.readyState == 4&&xh.status ==200){
			rel = eval(xh.responseText);
			var html01='';
			var mmk =0;
			while(mmk <= 8){
				for(var i=0;i<rel.length;i++){
					if(parseInt(rel[i].jianjie.split(' ')[1].split('.')[0]) == arr[mmk]){
						html01 +='<li><span><a href="xiangqing.html"><img src="'+rel[i].url+'"/></a></span><a href="xiangqing.html" class="mz">'+rel[i].name+'</a><b>玩具专场</b><strong>'+rel[i].jianjie+'</strong><a href="xiangqing.html" class="dian04"></a></li>';
						mmk++;
					}
					
				}
				console.log(mmk)
			}
			
			
			document.getElementById('xhr').innerHTML =html01;		
			
			
			
		}
	}
	});
	
	
})
