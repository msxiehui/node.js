/* 
Ajax 三级联动插件  根据 jquery.cityselect.js 改编 
日期：2018-4-27 

settings 参数说明
-----
url:省市数据josn文件路径
prov:默认省份
city:默认城市
dist:默认地区（县）
cars:默认车型
nodata:无数据状态
required:必选项


required 为 flase 时 自动读取 
html 中 设置的  第一个 option 值，作为 默认的显示信息

prov city dist 增加 ID 项， 当id 不为空 时 value 填充 id 

！注意！：
如需自动填充 ：required:true 时，如果设置了 ID 值  那么 prov city dist cars 都需要填写 ID 值 


------------------------------ */
(function($){
	$.fn.citySelect=function(settings){
		if(this.length<1){return;};

		// 默认值
		settings=$.extend({
			url:"js/kaiyi.json",
			prov:null,
			city:null,
			dist:null,
			cars:null,
			nodata:null,
			required:true
		},settings);

		var box_obj=this;
		var prov_obj=box_obj.find(".prov");
		var city_obj=box_obj.find(".city");
		var dist_obj=box_obj.find(".dist");
		var cars_obj=box_obj.find(".cars");


		var prov_val=settings.prov;
		var city_val=settings.city;
		var dist_val=settings.dist;
		var cars_val=settings.cars;


		var prov_str=$(prov_obj).html()
		var city_str=$(city_obj).html()
		var dist_str=$(dist_obj).html()
		var cars_str=$(cars_obj).html()


		var select_prehtml=(settings.required) ? "" : prov_str;
		var city_json;


		// 赋值市级函数
		var cityStart=function(){

			console.log("city")
			var prov_id=prov_obj.get(0).selectedIndex;
			if(!settings.required){
				prov_id--;
			};
			city_obj.empty().attr("disabled",true);
			dist_obj.empty().attr("disabled",true);

			if(prov_id<0||typeof(city_json.citylist[prov_id].c)=="undefined"){
				if(settings.nodata=="none"){
					city_obj.css("display","none");
					dist_obj.css("display","none");
				}else if(settings.nodata=="hidden"){
					city_obj.css("visibility","hidden");
					dist_obj.css("visibility","hidden");
				};
				
				console.log("city 列表为空时")
				var city=(settings.required) ? "" : city_str;
				city_obj.html(city).attr("disabled",false).css({"display":"","visibility":""});

				var dist=(settings.required) ? "" : dist_str;
				dist_obj.html(dist).attr("disabled",false).css({"display":"","visibility":""});
				return;
			};

			select_prehtml=(settings.required) ? "" : city_str;
			// 遍历赋值市级下拉列表
			temp_html=select_prehtml;
			$.each(city_json.citylist[prov_id].c,function(i,city){
				var id= city.id!=null ? city.id :city.n
				temp_html+="<option value='"+id+"'>"+city.n+"</option>";
			});
			city_obj.html(temp_html).attr("disabled",false).css({"display":"","visibility":""});
			distStart();
		};

		// 赋值地区（县）函数
		var distStart=function(){
			console.log("查询 dist")
			var prov_id=prov_obj.get(0).selectedIndex;
			var city_id=city_obj.get(0).selectedIndex;
			if(!settings.required){
				prov_id--;
				city_id--;
			};
			dist_obj.empty().attr("disabled",true);

			if(prov_id<0||city_id<0||typeof(city_json.citylist[prov_id].c[city_id].a)=="undefined"){
				if(settings.nodata=="none"){
					dist_obj.css("display","none");
				}else if(settings.nodata=="hidden"){
					dist_obj.css("visibility","hidden");
				};

				console.log("dist 列表为空时")
				select_prehtml=(settings.required) ? "" : dist_str;
				dist_obj.html(select_prehtml).attr("disabled",false).css({"display":"","visibility":""});
		
				return;
			};
			select_prehtml=(settings.required) ? "" : dist_str;
			// 遍历赋值市级下拉列表
			temp_html=select_prehtml;
			$.each(city_json.citylist[prov_id].c[city_id].a,function(i,dist){
				var id= dist.id!=null ? dist.id :dist.s
				temp_html+="<option value='"+id+"'>"+dist.s+"</option>";
			});
			dist_obj.html(temp_html).attr("disabled",false).css({"display":"","visibility":""});
			carsStart();
		};





		// 赋值 车型 函数
		var carsStart=function(){


			console.log("查询车型")
			var prov_id=prov_obj.get(0).selectedIndex;
			var city_id=city_obj.get(0).selectedIndex;
			var dist_id=dist_obj.get(0).selectedIndex;
			if(!settings.required){
				prov_id--;
				city_id--;
				dist_id--;
			};


			cars_obj.empty().attr("disabled",true);

			if(prov_id<0||city_id<0||dist_id<0||typeof(city_json.citylist[prov_id].c[city_id].a[dist_id].d)=="undefined"){
				if(settings.nodata=="none"){
					cars_obj.css("display","none");
				}else if(settings.nodata=="hidden"){
					cars_obj.css("visibility","hidden");
				};

				console.log("车型列表为空时")
				select_prehtml=(settings.required) ? "" : cars_str;
				cars_obj.html(select_prehtml).attr("disabled",false).css({"display":"","visibility":""});
		
				return;
			};

			select_prehtml=(settings.required) ? "" : cars_str;
			// 遍历赋值市级下拉列表
			temp_html=select_prehtml;
			$.each(city_json.citylist[prov_id].c[city_id].a[dist_id].d,function(i,cars){
				var id= cars.id!=null ? cars.id :cars.c
				temp_html+="<option value='"+id+"'>"+cars.c+"</option>";
			});
			cars_obj.html(temp_html).attr("disabled",false).css({"display":"","visibility":""});
		};



		var init=function(){
			// 遍历赋值省份下拉列表
			temp_html=select_prehtml;
			$.each(city_json.citylist,function(i,prov){
				var id= prov.id!=null ? prov.id :prov.p

				console.log(prov.id)
				temp_html+="<option value='"+id+"'>"+prov.p+"</option>";
			});
			prov_obj.html(temp_html);
			console.log(temp_html)
			// 若有传入省份与市级的值，则选中。（setTimeout为兼容IE6而设置）
			setTimeout(function(){
				if(settings.prov!=null){
					prov_obj.val(settings.prov);
					cityStart();
					setTimeout(function(){
						if(settings.city!=null){
							city_obj.val(settings.city);
							distStart();
							setTimeout(function(){
								if(settings.dist!=null){
									dist_obj.val(settings.dist);
									carsStart();
									setTimeout(function(){
										if(settings.cars!=null){
											cars_obj.val(settings.cars);
										};
									},1);
								};

								
							},1);
						};
					},1);
				};
			},1);

			// 选择省份时发生事件
			prov_obj.bind("change",function(){
				cityStart();
			});

			// 选择市级时发生事件
			city_obj.bind("change",function(){
				distStart();
			});
			// 选择市级时发生事件
			dist_obj.bind("change",function(){
				carsStart();
			});
		};

		// 设置省市json数据
		if(typeof(settings.url)=="string"){
			$.getJSON(settings.url,function(json){
				city_json=json;
				init();
			});
		}else{
			city_json=settings.url;
			init();
		};
	};
})(jQuery);