window.onload = function(){
	let container = document.getElementById("container");
	let imgs = container.getElementsByTagName("img");

	/*设置初始位置*/
	//一张图片宽度
	let imgWidth = imgs[0].offsetWidth;
	//设置露出宽度
	let expose = 168;
	//容器总宽度
	let containerWidth = imgWidth + expose * (imgs.length - 1);
	container.style.width = containerWidth + "px";
	//初始化图片位置
	function initPosition(){
		for (let i = 1; i < imgs.length; i++) {
			imgs[i].style.left = imgWidth + expose * (i - 1) + "px";
		}
	}
	
	initPosition();
	/*
		鼠标移入slide(搞清楚这里var和let的区别)
	*/
	
	for(let i = 0; i < imgs.length; i++){
		
		imgs[i].onmouseenter = function(){
			initPosition();
			for(let j = 0; j <= i; j++){

				imgs[j].style.left = expose * j + "px" 
			}
		}
	
	}

	
	
		
	
}