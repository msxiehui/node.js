var xlsx = require('node-xlsx');var fs = require('fs');//读取文件内容var obj = xlsx.parse(__dirname + '/t.xlsx');var excelObj = obj[0].data;//console.log(excelObj);//console.log(excelObj[0]);var sheng = new Array();for (var i = 0; i < excelObj.length; i++) {    //var sheng={"p":excelObj[i][0],"c":excelObj[i][2]}        sheng.push(excelObj[i][0]);}var sheng = unique5(sheng);//console.log(sheng);console.log(sheng.length);//声明 城市 var city = new Array();var jingxiao = new Array();for (var i = 0; i < sheng.length; i++) {    city.push(new Array());    jingxiao.push(new Array());}for (var i = 0; i < excelObj.length; i++) {    var s = excelObj[i][0];    var c = excelObj[i][1];    var num = sheng.indexOf(s);    city[num].push(c);}console.log(city.length);//数组去重复for (var i = 0; i < city.length; i++) {    city[i] = unique5(city[i]);}//声明 经销商for (var i = 0; i < city.length; i++) {    for (var j = 0; j < city[i].length; j++) {        jingxiao[i].push(new Array());    }}for (var i = 0; i < excelObj.length; i++) {    var s = excelObj[i][0];    var c = excelObj[i][1];    var x = excelObj[i][2];    var num = sheng.indexOf(s);    var cnum = city[num].indexOf(c);    jingxiao[num][cnum].push(x);}var citylist = JSON.parse("[]");for (var i = 0; i < sheng.length; i++) {    var s = {};    s["p"] = sheng[i];    console.log("-----------------------------------------"+i+"--省-->"+ s["p"]);    var city1 = JSON.parse("[]");    for (var j = 0; j < city[i].length; j++) {        var c = {};        c["n"] = city[i][j];        console.log(i+":"+j+"------------------------市-->"+ c["n"]);        var disk = JSON.parse("[]");        for (var k = 0; k <jingxiao[i][j].length; k++) {            var di = {};            di["s"] = jingxiao[i][j][k];            console.log(i+":"+j+":"+k+":-->" +c["n"]+"--经销商-->"+  di["s"]);            disk.push(di);        }        c["a"] = disk;        city1.push(c);    }    s["c"] = city1;    citylist.push(s);    //console.log(JSON.stringify(city1));}//console.log(citylist);var jsonDD = {};jsonDD['citylist'] = citylist;var filename = "new.json";fs.writeFileSync(filename, JSON.stringify(jsonDD));function unique5(array) {    var r = [];    for (var i = 0, l = array.length; i < l; i++) {        for (var j = i + 1; j < l; j++)            if (array[i] === array[j]) j = ++i;        r.push(array[i]);    }    return r;}