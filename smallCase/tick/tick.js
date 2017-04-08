class tick{
	constructor(options){
		/*
			判断options
		*/
		if(!options){
			throw new Error("please set options");
			return;
		}

		if(!options.el && !options.hour && !options.min && !options.second){
			throw new Error("please set el, hour elemnt, min element and second element");
			return;
		}

		//初始化设置
		let defalutConfig = {
			date: new Date
		}

		//合并自定义的设置和初始化设置
		this.Config = Object.assign(defalutConfig,options);


		/*初始化钟表并且开始运行*/
		this.initTick();
		this.tick();
		setInterval(this.tick.bind(this),30);
	}

	/*初始化钟表*/
	initTick(){
		let points = document.createDocumentFragment();
		for(let i = 0; i < 60; i++){
			let point = document.createElement("span");
			
			if(i%5 === 0){

				point.className = "point hPoint";
				point.innerHTML = `<strong style="transform:rotate(${-i*6}deg)">${i/5}</strong>`;

			}else{
				point.className = "point";
			}
			point.style.transform = `rotate(${i*6}deg)`;
			points.appendChild(point);
		}

		this.Config.el.appendChild(points);
	}

	/*钟表开始走动*/
	tick(){
		this.Config.date = new Date();
		let h = this.Config.date.getHours();
		let m = this.Config.date.getMinutes();
		let s = this.Config.date.getSeconds();
		let millSecond = this.Config.date.getMilliseconds();
			//console.log(millSecond);
		
		this.Config.hour.style.transform = `rotate(${h*30+m/60*6}deg)`;
		this.Config.min.style.transform = `rotate(${m*6+s/60*6}deg)`;
		this.Config.second.style.transform = `rotate(${s*6 + millSecond/1000*6}deg)`;
	}
}