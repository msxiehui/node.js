var xlsx = require('node-xlsx');var fs = require('fs');var confnum = process.argv.lengthvar pathOut = ""if (confnum < 3) {    console.log("请输入 文件名 如：XX.xlsx   或  siwei/.xlsx")    return;}var xlsxName = process.argv.splice(2)[0];var outName = xlsxName.split(".")[0]//读取文件内容var obj = xlsx.parse(__dirname + '/' + xlsxName);var excelObj = obj[0].data;// 声明省份  一级数组  arr["北京"] var sheng = new Array();//声明 城市 arr[0]["朝阳区"]  第一位 为 省份数组索引  第二位为 城市数组var city = new Array();// 声明经销商  arr[0][1]["朝阳XX经销商"]   第一位 为 省份数组索引  第二位为 城市数组索引值 第三位为经销商数组var jingxiao = new Array();// 声明经销商 ID   根据总行数 生成 ID值，var id = new Array();// 循环省份数组for (var i = 0; i < excelObj.length; i++) {    sheng.push(excelObj[i][0]);}// 省份去重复var sheng = unique5(sheng);//console.log(sheng)console.log("省份数量：", sheng.length);// 生成 城市和经销商的 二级数组for (var i = 0; i < sheng.length; i++) {    city.push(new Array());    jingxiao.push(new Array());}// 添加城市到二级数组  读取当前城市名称 并查询其所在省份数组中的索引，然后写入对应的二级数组内for (var i = 0; i < excelObj.length; i++) {    var s = excelObj[i][0];    var c = excelObj[i][1];    var num = sheng.indexOf(s);    //  console.log(s,c,num);    city[num].push(c);}//城市二级数组去重复//for (var i = 0; i < city.length; i++) {    city[i] = unique5(city[i]);}//console.log(city);// return;//声明  经销商 根据城市数量生成 三级数组阵列for (var i = 0; i < city.length; i++) {    for (var j = 0; j < city[i].length; j++) {        jingxiao[i].push(new Array());    }}// 添加经销商到三级数组  读省份，城市，并获取省份和城市的数组索引  并将经销商写入对应的阵列位置for (var i = 0; i < excelObj.length; i++) {    var s = excelObj[i][0];    var c = excelObj[i][1];    var x = excelObj[i][2];    var num = sheng.indexOf(s);    var cnum = city[num].indexOf(c);    jingxiao[num][cnum].push(x);}// 判断 如果 第一行有4列时 及说明有经销商 ID列，因此生成  ID数组// 是否需要生成IDvar haveID = false;if (excelObj[0].length > 3) {    haveID = true;    for (var i = 0; i < excelObj.length; i++) {        id.push(excelObj[i][3]);    }}var xxx = 0;var citylist = JSON.parse("[]");for (var i = 0; i < sheng.length; i++) {    var s = {};    if (typeof(sheng[i]) == "undefined") {        console.log("发现空省份-跳过");        continue;    }    s["p"] = sheng[i];    console.log("+++++++++++++++++++++++++++++" + i + "-省份：" + s["p"] + "+++++++++++++++++++++++++++++");    var city1 = JSON.parse("[]");    for (var j = 0; j < city[i].length; j++) {        var c = {};        c["n"] = city[i][j];        console.log(".................." + i + ":" + j + "城市：" + c["n"] + "..................");        var disk = JSON.parse("[]");        for (var k = 0; k < jingxiao[i][j].length; k++) {            var di = {};            di["s"] = jingxiao[i][j][k];            console.log(i + ":" + j + ":" + k + ":--经销商-->" + di["s"]);            if (haveID) {                if (typeof(id[xxx]) != "undefined") {                    di["id"] = id[xxx].toString();                    console.log("--经销商ID-->" + id[xxx]);                } else {                    di["id"] = "";                    console.log("警告！！！-----此经销商ID为空-->" + id[xxx]);                }            }            xxx++;            disk.push(di);        }        console.log("");        c["a"] = disk;        city1.push(c);    }    console.log("");    console.log("");    s["c"] = city1;    citylist.push(s);    //console.log(JSON.stringify(city1));}console.log("循环次数：" + xxx);//console.log(citylist);var jsonDD = {};jsonDD['citylist'] = citylist;var filename = __dirname + "/" + outName + ".json";fs.writeFileSync(filename, JSON.stringify(jsonDD));function unique5(array) {    var r = [];    for (var i = 0, l = array.length; i < l; i++) {        for (var j = i + 1; j < l; j++)            if (array[i] === array[j]) j = ++i;        r.push(array[i]);    }    return r;}