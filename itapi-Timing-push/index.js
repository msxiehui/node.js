/**
 * Created by UPC on 2017/7/16.
 */
var request = require('superagent');
var mkdirp = require('mkdirp');
var schedule = require('node-schedule');
var mytool = require('./src/myTools.js');
var email = require('./src/email.js');
var fs = require("fs");
var version="1.0.1"
var url="http://itapi.demo.iforce-media.com"
// var url="http://itapi.iforce-media.com"

var Count=200;
var Num=0;
var Tnum=0;
var EndHours=24;
var secondNum=0;
var secondArr=[];
var isReset=false;
var isStop=false;
var isFen=false;
var Ttime=0;
var rule1 = new schedule.RecurrenceRule();
rule1.second = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59];

var rule2 = new schedule.RecurrenceRule();
rule2.second =  1;

writeLog("程序开始运行启动----：开始初始化,程序版本："+version);
writeLog("当前URL："+url);
getCount();
//每小时执行一次
schedule.scheduleJob("2 0 7-23 * * *", function(){
    getCount();
})

//每分钟重置一次  提交的时间和提交的数量
schedule.scheduleJob("0 * 7-23 * * *", function(){
    console.log("分钟定时器",mytool.getNowFormatDate())
    randNumArr();
})

//没两秒执行一次   从 1秒 -59秒 每隔 2秒执行一次
var SecondSchedul=schedule.scheduleJob("1-59/2 * 7-23 * * *", function(){
    //console.log("秒针定时器",mytool.getNowFormatDate())
    if(Count<=0){
        writeLog("没有需要PUSH的数据，调整程序为 每分钟执行一次。")
        if(secondNum<1 && isFen==false){
            SecondSchedul.reschedule("10 * 7-23 * * *");
            isReset=true;
            isFen=true;
        }

        return;
    }


    if(secondArr.indexOf(new Date().getSeconds())!=-1){
        PushData();
    }
    if(secondNum<1 && isFen==false){
        writeLog("修改执行时间为每分钟执行一次")
        SecondSchedul.reschedule("10 * 7-23 * * *");
        isReset=true;
        isFen=true;
    }else{
        if(isReset==true){
            writeLog("恢复2秒执行一次")
            SecondSchedul.reschedule("1-59/2 * 7-23 * * *");
            isFen = false;
            isReset=false;
        }
    }
})


function PushData() {
    if(Num<=0){
        writeLog("当前小时已经没有数据")
        return;
    }


    request.get(url+'/a/v1/push/do_data')
        .timeout({
            response: 5000,  // Wait 5 seconds for the server to start sending,
            deadline: 60000, // but allow 1 minute for the file to finish loading.
        })
        .end(function (err, res) {
            if(err){
                writeLog("Push:发送失败："+err.status);
            }else{
               var data= JSON.parse(res.text);
                Num--;
                Count--;
                writeLog("Push:当前小时剩余发送："+Num+" | 剩余总数量:"+Count+" | 发送状态："+data.status+" | 返回信息："+data.msg);
            }
        });

    // SecondSchedul.cancel();
    // console.error("停止执行器")
    //  console.log()
    //
    // isStop=true;
}



//随机 每分钟执行的数量。三种状态：
// 1、正常时间，每分钟刷新，
// 2、夜间，如果还有未刷数量的话0-2条，
// 3、夜间，且没有未刷数量
function randNumArr() {

    if(Ttime>0 && Count>0){

        var _n=mytool.rand(0,Math.ceil(Num/10));
        var _m=new Date().getMinutes()
        secondNum=Math.ceil(Num/(60-_m))+_n;

        //writeLog("----RandNumArr:--"+Num+"--m:"+_m+"--_n:"+_n);

        secondArr=getRandomArrayElements(rule1.second,secondNum);

    }else if(Count>0){
        secondNum=mytool.rand(0,5);
        secondArr=getRandomArrayElements(rule1.second,secondNum);
    }else{
        secondNum=0;
        secondArr=[];
    }
    writeLog("randNumArr:当前小时提交数量："+Num+" | 每分钟提交数量："+secondNum);
}

var GetAgin=0;

 function  getCount() {

   // email.toEmail("今天提交总数："+Count,"通知");

     // Ttime=EndHours-new Date().getHours();
     // //每分钟发送的数据
     //
     // if(Count<=0){
     //     writeLog("getCount:没有需要提交的数据");
     //     randNumArr();
     //
     // }
     // if(Ttime>0 && Count>0){
     //     Num=Math.floor(Count/Ttime)+mytool.rand(-10,20);
     // }
     //
     // randNumArr();
     // // writeLog("今天提交总数:"+Count)
     //
     // writeLog("getCount:提交总数:"+Count+"| 剩余运行时间："+Ttime+"小时");
     // return;

     writeLog("获取提交总数："+url+'/a/v1/push/PushCount');

    request
        .get(url+'/a/v1/push/PushCount')
        .timeout({
            response: 5000,  // Wait 5 seconds for the server to start sending,
            deadline: 60000, // but allow 1 minute for the file to finish loading.
        })
        .end(function (err, res) {
            if(err){
                Count = -1;
                GetAgin++
                if(GetAgin<5){
                    getCount()
                };
            }else{
                Count= res.text;
                if(Count==-1){
                    email.toEmail("获取提交总数失败！"+Count,"程序错误");
                    writeLog("获取提交总数失败！"+Count)
                    GetAgin++
                    if(GetAgin<5){
                        getCount()
                    };

                }else if(Count==0){
                    GetAgin=0
                 //   email.toEmail("提交数量为0！"+Count,"提醒");
                    writeLog("getCount:没有需要提交的数据");
                    randNumArr();
                }else if(Count>0){
                    GetAgin=0
                    // email.toEmail("今天提交总数："+Count,"通知");
                    Ttime=EndHours-new Date().getHours();
                    //每分钟发送的数据
                    if(Ttime>0){
                        Tnum=Math.floor(Count/Ttime)+mytool.rand(-10,20);
                    }
                    Num=Tnum;
                    randNumArr();
                    // writeLog("今天提交总数:"+Count)
                    writeLog("getCount:提交总数:"+Count+" | 当前小时预计提交次数："+Tnum+" | 剩余运行时间："+Ttime+"小时");

                }else{
                    email.toEmail("获取总数未知问题！"+Count,"提醒");
                    writeLog("获取总数未知问题:"+Count)
                    GetAgin++
                    if(GetAgin<5){
                        getCount()
                    };
                }
            }
        });





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
