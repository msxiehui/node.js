var fs=require('fs');
var pinyin = require("pinyin");
var JsonObj=JSON.parse(fs.readFileSync('new.json'));
//省份数组
var citylist=JsonObj.citylist;

//循环省份
for(var i=0;i<citylist.length;i++){
	var p=citylist[i].p;
    citylist[i].m=pinyin(p.slice(0,1),{style: pinyin.STYLE_FIRST_LETTER})[0][0]

    //取城市数组，循环城市
    var c=citylist[i].c;

    for(var j=0;j<c.length;j++){
        var n=c[j].n;
        console.log(i,j,n);
        c[j].m=pinyin(n.slice(0,1),{style: pinyin.STYLE_FIRST_LETTER})[0][0];

        //取经销商列表，循环经销商
        var a=c[j].a;
        //数组排序，不用循环；
        // for(var k=0;k<a.length;k++){
        //     var s=a[k].s;
        //     a[k].m=pinyin(s.slice(0,1),{style: pinyin.STYLE_FIRST_LETTER})[0][0];
        // }

        //数组排序
        var newA=a.sort(pinyin.compare);
        c[j].a=newA;

    }
    //根据 m 排序
    var newC=c.sort(mySorter);
    citylist[i].c=newC;
}

//根据 m 排序
var newCity=citylist.sort(mySorter);
citylist=newCity;



var filename = "city.json";
JsonObj.citylist=citylist;
fs.writeFileSync(filename, JSON.stringify(JsonObj));


//排序规则
function mySorter(a, b){
    if (/^\d/.test(a.m) ^ /^\D/.test(b.m)) return a.m>b.m?1:(a.m==b.m?0:-1);
    return a.m>b.m?-1:(a.m==b.m?0:1);
}
