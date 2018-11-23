var addressInit = function(_carea,_cmbProvince, _cmbCity, _cmbArea,defaultarea1, defaultProvince, defaultCity, defaultArea)  
{  
    var area=document.getElementById(_carea);  
    var cmbProvince = document.getElementById(_cmbProvince);  
    var cmbCity = document.getElementById(_cmbCity);  
    var cmbArea = document.getElementById(_cmbArea);  
    function cmbSelect(cmb, str)  
    {  
        for(var i=0; i<cmb.options.length; i++)  
        {  
            if(cmb.options[i].value == str)  
            {  
                cmb.selectedIndex = i;  
                return;  
            }  
        }  
    }  
    function cmbAddOption(cmb, str, obj)  
    {  
        var option = document.createElement("OPTION");  
        option.innerHTML = str;  
        option.value = str;  
        option.obj = obj;  
        cmb.options.add(option);  
    }  
      
    function changeCity()  
    {  
        cmbArea.options.length = 0;  
        if(cmbCity.selectedIndex == -1)return;  
        var item = cmbCity.options[cmbCity.selectedIndex].obj;  
        for(var i=0; i<item.areaList.length; i++)  
        {  
            cmbAddOption(cmbArea, item.areaList[i], null);  
        }  
        cmbSelect(cmbArea, defaultArea);  
    }  
    function changeProvince()  
    {  
        cmbCity.options.length = 0;  
        cmbCity.onchange = null;  
        if(cmbProvince.selectedIndex == -1)return;  
          
        var item = cmbProvince.options[cmbProvince.selectedIndex].obj;  
        for(var i=0; i<item[cmbProvince.selectedIndex].cityList.length; i++)  
        {  
            cmbAddOption(cmbCity, item[cmbProvince.selectedIndex].cityList[i].name, item[cmbProvince.selectedIndex].cityList[i]);  
        }  
        cmbSelect(cmbCity, defaultCity);  
        changeCity();  
        cmbCity.onchange = changeCity;  
    }  
    function changeArea()  
    {  
        cmbProvince.options.length = 0;  
        cmbProvince.onchange = null;  
        if(area.selectedIndex == -1)return;  
        var item=area.options[area.selectedIndex].obj;  
        for(var i=0;i<item.Allcity.length;i++)  
        {  
            cmbAddOption(cmbProvince,item.Allcity[i].name,item.Allcity);  
        }  
        cmbSelect(cmbProvince,defaultProvince);  
        changeProvince();  
        cmbProvince.onchange=changeProvince;  
    }  
          
          
          
          
    for(var i=0; i<provinceList.length; i++)  
    {  
    //alert(provinceList[i].Allcity[0].name);  
    //var mess=provinceList[i].Allcity.join('--');  
    //alert(mess);  
        cmbAddOption(area, provinceList[i]._area, provinceList[i]);  
    }  
      
    cmbSelect(area, defaultarea1);  
    changeArea();  
    area.onchange = changeArea;  
}  
  
var provinceList = [{
    _area: "黑龙江",
    Allcity: [{
        name: "哈尔滨",
        cityList: [{
            name: "哈尔滨哈得力",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }, {
            name: "黑龙江哈得力",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "黑河",
        cityList: [{
            name: "黑河腾鑫",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x"]
        }]
    }, {
        name: "佳木斯",
        cityList: [{
            name: "黑龙江宇宏",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "牡丹江",
        cityList: [{
            name: "牡丹江腾宇",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "齐齐哈尔",
        cityList: [{
            name: "齐齐哈尔铭泰",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "绥化",
        cityList: [{
            name: "绥化大正",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x"]
        }]
    }]
}, {
    _area: "吉林",
    Allcity: [{
        name: "白城",
        cityList: [{
            name: "白城润达",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "长春",
        cityList: [{
            name: "吉林旗瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }, {
            name: "吉林瑞宏",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "吉林",
        cityList: [{
            name: "吉林久奇",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }, {
            name: "吉林久瑞",
            areaList: ["艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "四平",
        cityList: [{
            name: "四平鑫泰",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "松原",
        cityList: [{
            name: "松原子余",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "通化",
        cityList: [{
            name: "通化长久旗瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "延边",
        cityList: [{
            name: "延边庄园",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "白山",
        cityList: [{
            name: "白山城东名车",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }]
}, {
    _area: "辽宁",
    Allcity: [{
        name: "鞍山",
        cityList: [{
            name: "鞍山鞍奇",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "本溪",
        cityList: [{
            name: "本溪利腾",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "朝阳",
        cityList: [{
            name: "朝阳万里行",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "大连",
        cityList: [{
            name: "大连通洋",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }, {
            name: "大连成信",
            areaList: ["艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "大连龙威",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3"]
        }, {
            name: "大连华为",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "丹东",
        cityList: [{
            name: "丹东华瑞",
            areaList: ["艾瑞泽5", "瑞虎3"]
        }]
    }, {
        name: "抚顺",
        cityList: [{
            name: "辽宁用心",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "阜新",
        cityList: [{
            name: "阜新众智",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "葫芦岛",
        cityList: [{
            name: "葫芦岛新宇",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "盘锦",
        cityList: [{
            name: "盘锦安顺",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "沈阳",
        cityList: [{
            name: "沈阳庞大",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }, {
            name: "沈阳优易卡",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }, {
            name: "沈阳优易卡铁西",
            areaList: ["艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "铁岭",
        cityList: [{
            name: "铁岭北方",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "营口",
        cityList: [{
            name: "营口奇祥",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "锦州",
        cityList: [{
            name: "锦州百观",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "辽阳",
        cityList: [{
            name: "辽阳天瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }]
}, {
    _area: "内蒙古",
    Allcity: [{
        name: "包头",
        cityList: [{
            name: "内蒙古风行之星",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "赤峰",
        cityList: [{
            name: "浙江和平",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "呼和浩特",
        cityList: [{
            name: "内蒙古庞大冀瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "呼伦贝尔",
        cityList: [{
            name: "呼伦贝尔利丰泰奇",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "鄂尔多斯",
        cityList: [{
            name: "鄂尔多斯天安",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }]
}, {
    _area: "北京",
    Allcity: [{
        name: "北京",
        cityList: [{
            name: "大通远鑫",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "北京名威",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "北京诚信达",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "北京渔洋郡",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x"]
        }, {
            name: "北京新瑞福",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }]
}, {
    _area: "河北",
    Allcity: [{
        name: "保定",
        cityList: [{
            name: "保定天道",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "保定冀瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "保定冀中",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "保定林瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "沧州",
        cityList: [{
            name: "沧州天威",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }, {
            name: "沧州天信",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "沧州天狮",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3"]
        }, {
            name: "沧州庞大",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "任丘京开",
            areaList: ["艾瑞泽5", "瑞虎3"]
        }]
    }, {
        name: "承德",
        cityList: [{
            name: "承德乐骋",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "邯郸",
        cityList: [{
            name: "河北万合",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "邯郸冀旭",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "邯郸达昊",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "衡水",
        cityList: [{
            name: "衡水盛和",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "衡水昌达",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }, {
            name: "衡水庞大",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "廊坊",
        cityList: [{
            name: "廊坊君瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "廊坊鑫旗胜",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "霸州合创丰瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "秦皇岛",
        cityList: [{
            name: "秦皇岛冀瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "秦皇岛恒丰伟业",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "石家庄",
        cityList: [{
            name: "石家庄华强",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "石家庄御轩",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "河北奇轩",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "石家庄虎轩",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "唐山",
        cityList: [{
            name: "冀东凯瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "邢台",
        cityList: [{
            name: "邢台瑞曼",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎5x"]
        }, {
            name: "邢台誉丰",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎5x"]
        }, {
            name: "邢台国瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3", "瑞虎3x"]
        }]
    }, {
        name: "张家口",
        cityList: [{
            name: "张家口瑞垣",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "张家口冀瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }]
}, {
    _area: "山西",
    Allcity: [{
        name: "长治",
        cityList: [{
            name: "长治一运",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "大同",
        cityList: [{
            name: "大同恒山",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "晋城",
        cityList: [{
            name: "晋城机电",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "晋城卡马特",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3"]
        }]
    }, {
        name: "晋中",
        cityList: [{
            name: "晋中领先",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "介休岩兴",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "吕梁",
        cityList: [{
            name: "吕梁奇祥",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "太原",
        cityList: [{
            name: "山西香山",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "山西香山新宇",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "太原绯云",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "忻州",
        cityList: [{
            name: "忻州盈丰",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "阳泉",
        cityList: [{
            name: "山西华建集团",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x"]
        }]
    }, {
        name: "运城",
        cityList: [{
            name: "运城瑞鹏",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "运城鑫潮",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }]
    }]
}, {
    _area: "天津",
    Allcity: [{
        name: "天津",
        cityList: [{
            name: "天津天杭",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "天津博瑞祥通",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "天津庞大冀瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "天津冀津",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }]
}, {
    _area: "江苏",
    Allcity: [{
        name: "常州",
        cityList: [{
            name: "常州瑞彩",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "淮安",
        cityList: [{
            name: "淮安长菱",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "连云港",
        cityList: [{
            name: "连云港腾瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3"]
        }, {
            name: "连云港腾瑞新浦",
            areaList: ["艾瑞泽7", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "南京",
        cityList: [{
            name: "南京金瑞",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "江苏长菱",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }]
    }, {
        name: "南通",
        cityList: [{
            name: "南通和奇祥",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "南通乾通",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "如皋广益",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "海门乾顺",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "苏州",
        cityList: [{
            name: "昆山永达",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "常熟中天",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "苏州苏丰",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "苏州瀚明",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "苏州恒众",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3"]
        }]
    }, {
        name: "宿迁",
        cityList: [{
            name: "宿迁长菱",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "泰州",
        cityList: [{
            name: "泰州安奇",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎5x"]
        }, {
            name: "靖江宝瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "无锡",
        cityList: [{
            name: "无锡飞亚",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "江阴扬名",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "宜兴广通",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "徐州",
        cityList: [{
            name: "邳州捷奥",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "徐州瑞彩",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "徐州瑞彩云龙分公司",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "盐城",
        cityList: [{
            name: "盐城众惠",
            areaList: ["艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "盐城瑞天",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }]
    }, {
        name: "扬州",
        cityList: [{
            name: "扬州百瑞杰",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "镇江",
        cityList: [{
            name: "丹阳新时代",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x"]
        }, {
            name: "镇江长菱",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }]
}, {
    _area: "江西",
    Allcity: [{
        name: "抚州",
        cityList: [{
            name: "抚州鑫锐",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "赣州",
        cityList: [{
            name: "赣州瑞华",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "赣州盈丰",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "吉安",
        cityList: [{
            name: "吉安美日",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "吉安搭手",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3"]
        }]
    }, {
        name: "九江",
        cityList: [{
            name: "九江东神",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "南昌",
        cityList: [{
            name: "江西永瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "萍乡",
        cityList: [{
            name: "萍乡洪豪",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "上饶",
        cityList: [{
            name: "上饶东安",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "婺源东安",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "宜春",
        cityList: [{
            name: "宜春天天",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "鹰潭",
        cityList: [{
            name: "鹰潭瑞丰",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "景德镇",
        cityList: [{
            name: "乐平国华",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "景德镇安顺",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }]
}, {
    _area: "上海",
    Allcity: [{
        name: "上海",
        cityList: [{
            name: "上海联海",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "上海瑞杰",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "上海鸿翎",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "上海二茆",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x"]
        }, {
            name: "上海弘怡",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "上海弘迅",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }]
}, {
    _area: "浙江",
    Allcity: [{
        name: "杭州",
        cityList: [{
            name: "浙江隆中",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "浙江奇祥",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "杭州志勤",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "湖州",
        cityList: [{
            name: "湖州奇祥",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "嘉兴",
        cityList: [{
            name: "嘉兴国信",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "嘉兴凯瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }]
    }, {
        name: "金华",
        cityList: [{
            name: "金华元瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "永康奇博",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "东阳和通",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "义乌成瑞",
            areaList: ["艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "义乌正瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }]
    }, {
        name: "丽水",
        cityList: [{
            name: "丽水奥奇",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "宁波",
        cityList: [{
            name: "宁波宏瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "宁波途瑞",
            areaList: ["艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "余姚佳达",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "宁波翔瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "宁波德瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "衢州",
        cityList: [{
            name: "衢州广瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "绍兴",
        cityList: [{
            name: "诸暨丰瑞",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "绍兴裕盛",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }]
    }, {
        name: "台州",
        cityList: [{
            name: "台州福马",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "台州宏瑞",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "台州天鹰",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3"]
        }]
    }, {
        name: "温州",
        cityList: [{
            name: "温州祥凯",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "瑞安奔迈",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "苍南鹏瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }]
}, {
    _area: "福建",
    Allcity: [{
        name: "福州",
        cityList: [{
            name: "福建美捷",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "福州名星",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }]
    }, {
        name: "龙岩",
        cityList: [{
            name: "龙岩鑫鑫",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "南平",
        cityList: [{
            name: "建阳鑫顺捷",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "宁德",
        cityList: [{
            name: "宁德揽晟",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "莆田",
        cityList: [{
            name: "莆田步峰",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "泉州",
        cityList: [{
            name: "泉州国润",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }, {
            name: "泉州恒永盛",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "福建骏豪",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }]
    }, {
        name: "三明",
        cityList: [{
            name: "三明美捷",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "厦门",
        cityList: [{
            name: "厦门瑞德隆",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x"]
        }, {
            name: "厦门瑞德隆旗云",
            areaList: ["艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "厦门铂维尔",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "厦门昆祺",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3"]
        }]
    }, {
        name: "漳州",
        cityList: [{
            name: "漳州华骏天瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }]
}, {
    _area: "广东",
    Allcity: [{
        name: "东莞",
        cityList: [{
            name: "东莞东富",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "东莞东富塘厦分公司",
            areaList: ["艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "东莞东瑞",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "佛山",
        cityList: [{
            name: "佛山兴协瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }, {
            name: "佛山安奇",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }, {
            name: "佛山瑞启",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "佛山新劲之星",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3"]
        }, {
            name: "佛山陆华",
            areaList: ["艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "广州",
        cityList: [{
            name: "广州保瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "广州众赢",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "广州旺华",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "广州陆高",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "河源",
        cityList: [{
            name: "惠州辉达河源分公司",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "惠州",
        cityList: [{
            name: "惠州辉达惠瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }, {
            name: "惠州辉达贸易",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "惠州宝瑞华",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "惠州三泰",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3"]
        }]
    }, {
        name: "江门",
        cityList: [{
            name: "江门东富",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "揭阳",
        cityList: [{
            name: "揭阳宏达",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "茂名",
        cityList: [{
            name: "茂名腾跃",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "梅州",
        cityList: [{
            name: "梅州政奋",
            areaList: ["艾瑞泽5", "瑞虎3", "瑞虎3x"]
        }, {
            name: "梅州华运",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎5x"]
        }]
    }, {
        name: "清远",
        cityList: [{
            name: "清远众合力",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "清远冠荣",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "汕头",
        cityList: [{
            name: "汕头汕阳",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "汕头福和",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "韶关",
        cityList: [{
            name: "韶关卓瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "深圳",
        cityList: [{
            name: "深圳东富",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "深圳祥麒",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "深圳锦昊",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "阳江",
        cityList: [{
            name: "阳江粤隆",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "中山",
        cityList: [{
            name: "中山中天",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }, {
            name: "中山利盈",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }, {
            name: "中山威晟",
            areaList: ["艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "中山利瑞",
            areaList: ["艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "潮州",
        cityList: [{
            name: "广东骏路宝",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "珠海",
        cityList: [{
            name: "珠海多盈",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "珠海利盈",
            areaList: ["艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "云浮",
        cityList: [{
            name: "云浮云瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "肇庆",
        cityList: [{
            name: "肇庆旺华",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "湛江",
        cityList: [{
            name: "湛江东富",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "湛江飞杰",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }]
}, {
    _area: "广西",
    Allcity: [{
        name: "百色",
        cityList: [{
            name: "百色鑫广达",
            areaList: ["艾瑞泽5", "瑞虎3", "瑞虎3x"]
        }, {
            name: "百色龙腾",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "桂林",
        cityList: [{
            name: "桂林桂路通",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "桂林大旗",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3"]
        }, {
            name: "桂林申永达",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3"]
        }]
    }, {
        name: "贺州",
        cityList: [{
            name: "贺州广深",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "柳州",
        cityList: [{
            name: "柳州鑫广达",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "柳州鹏越",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "柳州德龙",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3"]
        }]
    }, {
        name: "南宁",
        cityList: [{
            name: "广西鑫广达",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "广西鑫广达科园分公司",
            areaList: ["艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "南宁海胜",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }, {
            name: "南宁瑞义川",
            areaList: ["艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "钦州",
        cityList: [{
            name: "钦州鑫广达",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x"]
        }]
    }, {
        name: "梧州",
        cityList: [{
            name: "梧州鑫广达",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x"]
        }]
    }, {
        name: "玉林",
        cityList: [{
            name: "玉林鑫广达",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x"]
        }]
    }, {
        name: "河池",
        cityList: [{
            name: "河池鑫广达",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x"]
        }]
    }, {
        name: "北海",
        cityList: [{
            name: "北海鑫广达",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x"]
        }]
    }, {
        name: "贵港",
        cityList: [{
            name: "贵港鑫广达",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x"]
        }]
    }, {
        name: "来宾",
        cityList: [{
            name: "来宾畅达",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }]
}, {
    _area: "海南",
    Allcity: [{
        name: "海口",
        cityList: [{
            name: "海南仁通",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "海南和奇祥",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }]
}, {
    _area: "安徽",
    Allcity: [{
        name: "安庆",
        cityList: [{
            name: "安庆冠豪",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }, {
            name: "安庆乐瑞行",
            areaList: ["艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "蚌埠",
        cityList: [{
            name: "蚌埠润利",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "亳州",
        cityList: [{
            name: "亳州英旗",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "蒙城英旗",
            areaList: ["艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "池州",
        cityList: [{
            name: "池州万众",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "滁州",
        cityList: [{
            name: "滁州和奇祥",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "阜阳",
        cityList: [{
            name: "阜阳和奇祥",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x"]
        }, {
            name: "安徽顺泰",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "阜阳迎宾",
            areaList: ["艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "合肥",
        cityList: [{
            name: "安徽复兴",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎5x"]
        }, {
            name: "安徽骋瑞",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x"]
        }, {
            name: "合肥盈丰",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "巢湖盈丰",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "淮北",
        cityList: [{
            name: "淮北安奇",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "淮南",
        cityList: [{
            name: "淮南鑫皇分公司",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "黄山",
        cityList: [{
            name: "黄山兆瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "六安",
        cityList: [{
            name: "六安欧亚",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }, {
            name: "六安祥瑞",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "马鞍山",
        cityList: [{
            name: "马鞍山中大",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }, {
            name: "马鞍山中瑞",
            areaList: ["艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "宿州",
        cityList: [{
            name: "宿州海磊",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "宿州盈丰",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }]
    }, {
        name: "铜陵",
        cityList: [{
            name: "铜陵大地",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "芜湖",
        cityList: [{
            name: "芜湖安奇",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "无为奇祥",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "宣城",
        cityList: [{
            name: "宣城祥瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }]
}, {
    _area: "湖北",
    Allcity: [{
        name: "黄冈",
        cityList: [{
            name: "黄冈益泰",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "黄冈安泰顺",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3"]
        }]
    }, {
        name: "黄石",
        cityList: [{
            name: "黄石东瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "荆门",
        cityList: [{
            name: "荆门汭鑫",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "荆州",
        cityList: [{
            name: "荆州东瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }, {
            name: "荆州尚瑞",
            areaList: ["艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "十堰",
        cityList: [{
            name: "十堰贸联",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x"]
        }, {
            name: "十堰奇达",
            areaList: ["艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "随州",
        cityList: [{
            name: "随州东瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "天门",
        cityList: [{
            name: "天门东瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "武汉",
        cityList: [{
            name: "湖北东瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "湖北东瑞汉阳分公司",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "武汉顺祥",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "武汉瑞泽",
            areaList: ["艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "襄阳",
        cityList: [{
            name: "湖北英驰",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "襄阳东凯",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3"]
        }]
    }, {
        name: "孝感",
        cityList: [{
            name: "孝感汇众",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "宜昌",
        cityList: [{
            name: "宜昌东英",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "宜昌九宝",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3"]
        }]
    }, {
        name: "潜江",
        cityList: [{
            name: "潜江奇佳",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "恩施",
        cityList: [{
            name: "恩施九宝",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x"]
        }]
    }]
}, {
    _area: "湖南",
    Allcity: [{
        name: "长沙",
        cityList: [{
            name: "长沙泰阳",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "长沙金塔",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "长沙瑞瀚",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "湖南兰天",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "常德",
        cityList: [{
            name: "常德骏达",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7"]
        }, {
            name: "常德骏诚",
            areaList: ["艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "郴州",
        cityList: [{
            name: "郴州瑞顺",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "郴州昊鹏",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }]
    }, {
        name: "衡阳",
        cityList: [{
            name: "衡阳顺成",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "怀化",
        cityList: [{
            name: "怀化亚飞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "娄底",
        cityList: [{
            name: "娄底阳光",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "邵阳",
        cityList: [{
            name: "邵阳巨龙",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "湘潭",
        cityList: [{
            name: "湖南三鑫",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }, {
            name: "湘潭泽瑞",
            areaList: ["艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "湘西",
        cityList: [{
            name: "吉首双星",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "张家界",
        cityList: [{
            name: "张家界双星",
            areaList: ["瑞虎7", "艾瑞泽5"]
        }]
    }, {
        name: "益阳",
        cityList: [{
            name: "益阳广瑞开元",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "益阳广瑞开元分公司",
            areaList: ["瑞虎7", "艾瑞泽5"]
        }]
    }, {
        name: "永州",
        cityList: [{
            name: "永州万顺",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "岳阳",
        cityList: [{
            name: "岳阳瑞宏",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "平江大道车业",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "株洲",
        cityList: [{
            name: "株洲奇骏",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "株洲豪骏",
            areaList: ["艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }]
}, {
    _area: "河南",
    Allcity: [{
        name: "安阳",
        cityList: [{
            name: "安阳广丰",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "安阳瑞祥",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }]
    }, {
        name: "鹤壁",
        cityList: [{
            name: "鹤壁盛鸿",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "济源",
        cityList: [{
            name: "济源瑞兴 ",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "焦作",
        cityList: [{
            name: "焦作众瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "开封",
        cityList: [{
            name: "开封万宝实业",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "开封瑞鼎",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3"]
        }]
    }, {
        name: "洛阳",
        cityList: [{
            name: "洛阳众瑞",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "洛阳喜瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }, {
            name: "洛阳瑞群",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3"]
        }]
    }, {
        name: "漯河",
        cityList: [{
            name: "漯河源发",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }, {
            name: "漯河陵瑞",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "南阳",
        cityList: [{
            name: "南阳博德祥",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }, {
            name: "南阳成功",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "邓州鸿大",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3"]
        }]
    }, {
        name: "平顶山",
        cityList: [{
            name: "平顶山盛世德瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "濮阳",
        cityList: [{
            name: "濮阳龙鑫",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "三门峡",
        cityList: [{
            name: "三门峡铁龙",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "商丘",
        cityList: [{
            name: "永城瑞华",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "商丘广瑞",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "商丘联盛",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3"]
        }]
    }, {
        name: "新乡",
        cityList: [{
            name: "新乡诚信",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }, {
            name: "新乡诚达",
            areaList: ["艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "长垣诚翔",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "信阳",
        cityList: [{
            name: "信阳瑞龙",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }, {
            name: "信阳新东方",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "许昌",
        cityList: [{
            name: "许昌车之园",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "郑州",
        cityList: [{
            name: "郑州盈丰",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "郑州盈丰花园北路分公司",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "河南和邦",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "河南道可",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "河南瑞庆",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "周口",
        cityList: [{
            name: "周口舒翔",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "驻马店",
        cityList: [{
            name: "驻马店豫园",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "驻马店瑞通",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3"]
        }]
    }]
}, {
    _area: "山东",
    Allcity: [{
        name: "滨州",
        cityList: [{
            name: "滨州汇源",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "惠民汇翔",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }]
    }, {
        name: "德州",
        cityList: [{
            name: "德州瑞诚",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "山东圣达",
            areaList: ["艾瑞泽7", "瑞虎3"]
        }]
    }, {
        name: "东营",
        cityList: [{
            name: "东营恒基",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "东营恒盛",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "菏泽",
        cityList: [{
            name: "菏泽电力",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎5x"]
        }, {
            name: "菏泽金溢",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "济南",
        cityList: [{
            name: "山东瑞诚",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎5x"]
        }, {
            name: "济南瑞华",
            areaList: ["艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "济宁",
        cityList: [{
            name: "济宁亚飞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "济宁华顺",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "济宁交运",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "莱芜",
        cityList: [{
            name: "莱芜东昇",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "聊城",
        cityList: [{
            name: "聊城金瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "聊城新成",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "临沂",
        cityList: [{
            name: "临沂九州",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎5x"]
        }, {
            name: "临沂九州顺明",
            areaList: ["艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "临沂骏驰",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎5x"]
        }, {
            name: "临沂瑞通",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "青岛",
        cityList: [{
            name: "青岛易成",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "青岛惠泰",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "青岛华泰",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎5x"]
        }, {
            name: "青岛英瑞",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "日照",
        cityList: [{
            name: "日照东方",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }, {
            name: "日照正大",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "泰安",
        cityList: [{
            name: "泰安胜力",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "泰安中楚",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎5x"]
        }]
    }, {
        name: "威海",
        cityList: [{
            name: "威海银河",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "潍坊",
        cityList: [{
            name: "潍坊广潍",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "山东长劲",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "寿光盈丰",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "高密华泰",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "诸城海禄",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "烟台",
        cityList: [{
            name: "莱州平安",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "烟台恒邦",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "龙口富龙",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "招远东圣",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "枣庄",
        cityList: [{
            name: "滕州瑞达",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "淄博",
        cityList: [{
            name: "淄博奥泰",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }, {
            name: "淄博宝悦",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "山东康富",
            areaList: ["艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }]
}, {
    _area: "甘肃",
    Allcity: [{
        name: "定西",
        cityList: [{
            name: "定西致远",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "酒泉",
        cityList: [{
            name: "酒泉良志",
            areaList: ["瑞虎7", "艾瑞泽7", "瑞虎3", "瑞虎3x"]
        }]
    }, {
        name: "兰州",
        cityList: [{
            name: "兰州良志",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "甘肃金岛",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x"]
        }]
    }, {
        name: "庆阳",
        cityList: [{
            name: "庆阳金瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "天水",
        cityList: [{
            name: "天水良志",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }]
    }, {
        name: "武威",
        cityList: [{
            name: "武威良志",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "武威恒利通",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }]
    }, {
        name: "张掖",
        cityList: [{
            name: "张掖宇通",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "白银",
        cityList: [{
            name: "白银瑞通",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }]
}, {
    _area: "宁夏",
    Allcity: [{
        name: "固原",
        cityList: [{
            name: "固原宁鲁",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "银川",
        cityList: [{
            name: "宁夏宁安银瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }]
}, {
    _area: "青海",
    Allcity: [{
        name: "西宁",
        cityList: [{
            name: "青海金宏达",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }]
}, {
    _area: "陕西",
    Allcity: [{
        name: "宝鸡",
        cityList: [{
            name: "宝鸡宝瑞诚",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "汉中",
        cityList: [{
            name: "汉中冀瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "渭南",
        cityList: [{
            name: "渭南嘉豪",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "西安",
        cityList: [{
            name: "陕西瑞鑫",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "西安军丰源",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "陕西耀泰",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "陕西泰丰",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3"]
        }]
    }, {
        name: "咸阳",
        cityList: [{
            name: "西咸盈丰",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "榆林",
        cityList: [{
            name: "榆林金泰",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x"]
        }, {
            name: "榆林瑞泰",
            areaList: ["艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }]
}, {
    _area: "新疆",
    Allcity: [{
        name: "阿克苏",
        cityList: [{
            name: "阿克苏名扬",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x"]
        }, {
            name: "阿克苏迈锐",
            areaList: ["艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "巴音郭楞",
        cityList: [{
            name: "巴州万华",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "昌吉",
        cityList: [{
            name: "昌吉征亚",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "哈密",
        cityList: [{
            name: "哈密世纪车行",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "喀什",
        cityList: [{
            name: "喀什通工",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "乌鲁木齐",
        cityList: [{
            name: "新疆跃龙",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "赛博特跃龙",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3"]
        }]
    }, {
        name: "伊犁",
        cityList: [{
            name: "伊犁汇兴",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }, {
            name: "伊犁恒达",
            areaList: ["艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "阿勒泰",
        cityList: [{
            name: "新疆润信通",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }]
}, {
    _area: "贵州",
    Allcity: [{
        name: "毕节",
        cityList: [{
            name: "贵州乾瑞达",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "贵阳",
        cityList: [{
            name: "贵州瑞翼",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "清镇鼎信",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "六盘水",
        cityList: [{
            name: "贵州乾瑞祥",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "黔东南",
        cityList: [{
            name: "凯里天源",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "贵州众恒瑞之行",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3"]
        }]
    }, {
        name: "黔南",
        cityList: [{
            name: "黔南瑞航",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "黔西南",
        cityList: [{
            name: "黔西南乾江",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "铜仁",
        cityList: [{
            name: "铜仁驰骋",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "遵义",
        cityList: [{
            name: "遵义欣龙威",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "遵义龙腾",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }]
    }]
}, {
    _area: "四川",
    Allcity: [{
        name: "巴中",
        cityList: [{
            name: "巴中先锋",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "成都",
        cityList: [{
            name: "成都建国",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "成都精瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "成都金堂驭马",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "成都瑞一",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "成都嘉和",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "西物中锐",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "达州",
        cityList: [{
            name: "达州建国",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }, {
            name: "达州创奇",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3", "瑞虎5x"]
        }]
    }, {
        name: "德阳",
        cityList: [{
            name: "德阳众瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }, {
            name: "德阳源升",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "广安",
        cityList: [{
            name: "广安蜀东",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "广元",
        cityList: [{
            name: "广元驭马",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "广元金顺",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }]
    }, {
        name: "乐山",
        cityList: [{
            name: "乐山众瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎5x"]
        }]
    }, {
        name: "凉山",
        cityList: [{
            name: "西昌建国",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "泸州",
        cityList: [{
            name: "泸州达昌",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }, {
            name: "泸州建国",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "眉山",
        cityList: [{
            name: "眉山超越",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "绵阳",
        cityList: [{
            name: "绵阳京美维修",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }, {
            name: "绵阳瑞锦",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "内江",
        cityList: [{
            name: "内江达昌",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎5x"]
        }]
    }, {
        name: "南充",
        cityList: [{
            name: "南充天顺",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "南充润德",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }]
    }, {
        name: "攀枝花",
        cityList: [{
            name: "攀枝花建国",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "遂宁",
        cityList: [{
            name: "遂宁建国",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "宜宾",
        cityList: [{
            name: "宜宾精瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3", "瑞虎5x"]
        }]
    }, {
        name: "资阳",
        cityList: [{
            name: "资阳大昌",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎5x"]
        }]
    }]
}, {
    _area: "西藏",
    Allcity: [{
        name: "拉萨",
        cityList: [{
            name: "拉萨丰田",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }, {
            name: "拉萨凯丰",
            areaList: ["艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }]
}, {
    _area: "云南",
    Allcity: [{
        name: "楚雄",
        cityList: [{
            name: "楚雄启德",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "大理",
        cityList: [{
            name: "大理商务",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "红河",
        cityList: [{
            name: "红河宸瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "昆明",
        cityList: [{
            name: "云南商务",
            areaList: ["艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "昆明森通",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }]
    }, {
        name: "曲靖",
        cityList: [{
            name: "曲靖商务",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }, {
        name: "玉溪",
        cityList: [{
            name: "玉溪商务",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }]
}, {
    _area: "重庆",
    Allcity: [{
        name: "重庆",
        cityList: [{
            name: "重庆商社强力",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3", "瑞虎3x"]
        }, {
            name: "重庆力瑞",
            areaList: ["艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "重庆盛联辉瑞",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x"]
        }, {
            name: "重庆盛联名瑞",
            areaList: ["艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "重庆众宜",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3"]
        }, {
            name: "重庆智鑫",
            areaList: ["艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "重庆诚锐",
            areaList: ["瑞虎7", "艾瑞泽5", "瑞虎3"]
        }, {
            name: "重庆欣万奇",
            areaList: ["瑞虎7", "艾瑞泽5", "艾瑞泽7", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }, {
            name: "重庆众宜驰尚",
            areaList: ["艾瑞泽5", "瑞虎3", "瑞虎3x", "瑞虎5x"]
        }]
    }]
}];
