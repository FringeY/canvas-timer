/**
 * Created by yaorui on 16/1/24.
 */
// A-Z, 0-9字符矩阵图
var canvasChars = [
    [
        [0,0,1,1,1,0,0],
        [0,1,1,0,1,1,0],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,0,1,1,0],
        [0,0,1,1,1,0,0]
    ],//0
    [
        [0,0,0,1,1,0,0],
        [0,1,1,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,1,1,1,1,1,1]
    ],//1
    [
        [0,1,1,1,1,1,0],
        [1,1,0,0,0,1,1],
        [0,0,0,0,0,1,1],
        [0,0,0,0,1,1,0],
        [0,0,0,1,1,0,0],
        [0,0,1,1,0,0,0],
        [0,1,1,0,0,0,0],
        [1,1,0,0,0,0,0],
        [1,1,0,0,0,1,1],
        [1,1,1,1,1,1,1]
    ],//2
    [
        [1,1,1,1,1,1,1],
        [0,0,0,0,0,1,1],
        [0,0,0,0,1,1,0],
        [0,0,0,1,1,0,0],
        [0,0,1,1,1,0,0],
        [0,0,0,0,1,1,0],
        [0,0,0,0,0,1,1],
        [0,0,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,1,1,1,0]
    ],//3
    [
        [0,0,0,0,1,1,0],
        [0,0,0,1,1,1,0],
        [0,0,1,1,1,1,0],
        [0,1,1,0,1,1,0],
        [1,1,0,0,1,1,0],
        [1,1,1,1,1,1,1],
        [0,0,0,0,1,1,0],
        [0,0,0,0,1,1,0],
        [0,0,0,0,1,1,0],
        [0,0,0,1,1,1,1]
    ],//4
    [
        [1,1,1,1,1,1,1],
        [1,1,0,0,0,0,0],
        [1,1,0,0,0,0,0],
        [1,1,0,0,0,0,0],
        [1,1,1,1,1,1,0],
        [0,0,0,0,0,1,1],
        [0,0,0,0,0,1,1],
        [0,0,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,1,1,1,0]
    ],//5
    [
        [0,0,0,0,1,1,0],
        [0,0,1,1,0,0,0],
        [0,1,1,0,0,0,0],
        [1,1,0,0,0,0,0],
        [1,1,0,1,1,1,0],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,1,1,1,0]
    ],//6
    [
        [1,1,1,1,1,1,1],
        [1,1,0,0,0,1,1],
        [0,0,0,0,1,1,0],
        [0,0,0,0,1,1,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,1,1,0,0,0],
        [0,0,1,1,0,0,0],
        [0,0,1,1,0,0,0],
        [0,0,1,1,0,0,0]
    ],//7
    [
        [0,1,1,1,1,1,0],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,1,1,1,0],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,1,1,1,0]
    ],//8
    [
        [0,1,1,1,1,1,0],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,1,1,1,1],
        [0,0,0,0,0,1,1],
        [0,0,0,0,0,1,1],
        [0,0,0,0,1,1,0],
        [0,0,0,1,1,0,0],
        [0,1,1,0,0,0,0]
    ],//9
    [
        [0,0,0,0],
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0],
        [0,0,0,0]
    ]//:
];

var canvasTimer = (function () {
    var Canvas, Context, Interval, Radius, lastTime,
        isStop = false;
    git
    var init = function (canvasObj, interval, radius) {
        Canvas = canvasObj || document.getElementsByTagName('canvas')[0]; //获取canvas对象
        //设置画布高度为canvas父级的高度
        Canvas.height = parseInt((Canvas.parentNode.currentStyle ? Canvas.parentNode.currentStyle : window.getComputedStyle(Canvas.parentNode, null)).height);
        //设置画布高度为canvas父级的宽度
        Canvas.width = parseInt((Canvas.parentNode.currentStyle ? Canvas.parentNode.currentStyle : window.getComputedStyle(Canvas.parentNode, null)).width);
        Context = Canvas.getContext('2d');
        Interval = interval || 20; //动画间隙默认50ms
        Radius = radius || 5; //点半径默认为5px
        run();
    };

    var run = function () {
        setInterval(function () {
            if (isStop) {
                return false;
            }
            _render();
            //_update();
        }, Interval);
    };

    var stop = function () {

    };

    var getCurrentTime = function () {
        var date = new Date();
        return [
            parseInt(date.getHours()/10),
            date.getHours()%10,
            parseInt(date.getMinutes()/10),
            date.getMinutes()%10,
            parseInt(date.getSeconds()/10),
            date.getSeconds()%10
        ];
    };
    //渲染
    var _render = function () {
        var newTime = getCurrentTime();
        Context.clearRect(0, 0, Canvas.width, Canvas.height); //清空画布
        Context.fillStyle = '#000';
        for (var i = 0; i < newTime.length; i++) {
            for (var j = 0; j < canvasChars[newTime[i]].length; j++) {
                for (var k = 0; k < canvasChars[newTime[i]][j].length; k++) {
                    if (canvasChars[newTime[i]][j][k] == 1) {
                        Context.beginPath();
                        Context.arc(10 + (14 * (Radius + 1) + 10) * i + (2 * k + 1) * Radius + k, 10 + (2 * j + 1) * Radius + j, Radius, 0, 2*Math.PI);
                        Context.closePath();
                        Context.fill();
                    }
                }
            }
        }
    };
    //更新要渲染的数据
    var _update = function () {

    };
    return {
        init: init,
        stop: stop
    };
}());

canvasTimer.init();