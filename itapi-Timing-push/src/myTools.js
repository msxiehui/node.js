/**
 * Created by UPC on 2017/7/13.
 */
var fs = require("fs");
function world() {
    console.log('Hello World');
}


//判断目录是否存在
function fsExistsSync(path) {
    try {
        fs.accessSync(path, fs.F_OK);
    } catch (e) {
        return false;
    }
    return true;
}
function _getNowFormatDate(type) {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var hours=date.getHours();
    var min=date.getMinutes();
    var sec= date.getSeconds();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    if (hours >= 0 && hours <= 9) {
        hours = "0" + hours;
    }
    if (min >= 0 && min <= 9) {
        min = "0" + min;
    }
    if (sec >= 0 && sec <= 9) {
        sec = "0" + sec;
    }


    var currentdate;
    if(type==1){
        currentdate = year + seperator1 + month + seperator1 + strDate
    }else if(type==2){
        currentdate =hours + seperator2 + min+ seperator2 + sec;
    }else{
        currentdate = year + seperator1 + month + seperator1 + strDate+ " " + hours + seperator2 +min+ seperator2 + sec;
    }
    return currentdate;
}

function arrToOne(arr){
    var newArr=new Array();
    return function toOne(arr) {
        for(var i=0;i<arr.length;i++){
            if(Array.isArray(arr[i])){
                toOne(arr[i]);
            }else{
                newArr.push(arr[i]);
            }
        }
        return newArr;
    }(arr);
}

function rand(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

exports.world = world;
exports.fsExistsSync = fsExistsSync;
exports.getNowFormatDate = _getNowFormatDate;
exports.arrToOne = arrToOne;
exports.rand = rand;