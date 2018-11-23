/**
 * Created by UPC on 2017/7/16.
 */
var request = require('superagent');
var mkdirp = require('mkdirp');
var schedule = require('node-schedule');
var mytool = require('./src/myTools.js');
var fs = require("fs");
var version="1.0.1"
var url="http://itapi.iforce-media.com/a/v1/NewLog/NewLog/start/"

let Count=0;


let start=0;
let pageNum=500;

var rule1 = new schedule.RecurrenceRule();
rule1.second = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59];

var rule2 = new schedule.RecurrenceRule();
rule2.second =  1;

writeLog("程序开始运行启动----：开始初始化,程序版本："+version);
// writeLog("当前URL："+url);
// getCount();


//没两秒执行一次   从 1秒 -59秒 每隔 2秒执行一次
let SecondSchedul=schedule.scheduleJob("1-59/10 * * * * *", function(){
    getCount();
})



var GetAgin=0;

 function  getCount() {
     if(Count>5){
         writeLog("线程过多，等待..."+Count);
         return
     }

    let __start=start;

    if(__start>301346){
        writeLog("总数超过：301346 ，修改为每分钟执行一次");
        SecondSchedul.reschedule("0 * * * * *");
        return
    }

     Count++;
     writeLog("开始："+__start);
    request
        .get(url+__start)
        .timeout({
            response: 10*60*1000,  // Wait 5 seconds for the server to start sending,
            deadline:30*60*1000 , // but allow 1 minute for the file to finish loading.
        }).end(function (err, res) {
            Count--;
            if(err){
                console.log(err);
                writeLog("-----------完成："+__start+"错误-------------");
            }else{
               let data= JSON.parse(res.text);
                console.log(data)
                let status=data.status;
                data=data.data;
                writeLog("完成："+data.start+"|状态："+status+"|预计："+data.num+"|实际："+data.info+"|开始："+data.startTime+"|结束时间："+data.endTime);
            }
        });
     start+=pageNum;
}

function getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}


function writeLog(err, type) {
    var str = "";
    if (typeof (err) == "object") {
        err.addtime = mytool.getNowFormatDate();
        str = JSON.stringify(err);
    } else {
        var _obj = {}
        _obj.msg = err;
        _obj.addtime = mytool.getNowFormatDate();
        str = JSON.stringify(_obj);
    }

    var t = "main";
    if (type) {
        t = type;
    }
    console.log(str);
    //  return;
    fs.appendFile("log/" + mytool.getNowFormatDate(1) + "-" + t + ".log", str + "\r\n", 'utf8', function (err) {
        if (err) throw err;
    });
}
