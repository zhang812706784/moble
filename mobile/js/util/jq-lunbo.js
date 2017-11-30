$.fn.lunbo=function(){
	var that=this;
	var oMov;
	var iNow=0;
	addHtml();
	function addHtml(){
		//添加结构
		var w=4*400;
		oMov=$('<div style="width:'+w+'px" class="mov"></div>');//创建孤儿节点
		for(var i=0;i<4;i++){
			oMov.append('<div class="item">'+i+'</div>')
		}
		that.append(oMov);//整体加到外壳中
	}
	
	function moveLunbo(){
		iNow++;
		if(iNow>3){
			iNow=0;
		}
		oMov.animate({left:-iNow*400});
	}
	setInterval(function(){
		moveLunbo();
	},2000);
	
	
	
}
