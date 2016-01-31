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
        [1,1,1,1,1,1,0],
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

var ballColors = ["#666699", "#6666CC", "#6666FF", "#669966", "#669999", "#6699CC", "#6699FF", "#66CC66", "#66CC99", "#66CCCC", "#66CCFF", "#66FF66", "#66FF99", "#66FFCC", "#66FFFF", "#996666", "#996699", "#9966CC", "#9966FF", "#999966", "#999999", "#9999CC", "#9999FF", "#99CC66", "#99CC99", "#99CCCC", "#99CCFF", "#99FF66", "#99FF99", "#99FFCC", "#99FFFF", "#CC6666", "#CC6699", "#CC66CC", "#CC66FF", "#CC9966", "#CC9999", "#CC99CC", "#CC99FF", "#CCCC66", "#CCCC99", "#CCCCCC", "#CCCCFF", "#CCFF66", "#CCFF99", "#CCFFCC", "#CCFFFF", "#FF6666", "#FF6699", "#FF66CC", "#FF66FF", "#FF9966", "#FF9999", "#FF99CC", "#FF99FF", "#FFCC66", "#FFCC99", "#FFCCCC", "#FFCCFF", "#FFFF66", "#FFFF99", "#FFFFCC", "#FFFFFF"];

var canvasTimer = (function () {
    var Canvas, Context, Interval, Radius, nowTime, MarginLeft, MarginTop, timeColor,
        lastTimeMatrix = [],  //上一个时间点的时间矩阵
        timeMatrix = [],      //时间矩阵
        balls = [],           //动画小球
        isStop = false;       //是否停止动画

    var init = function (canvasObj, interval, radius, marginleft, margintop, timecolor) {
        Canvas = canvasObj || document.getElementsByTagName('canvas')[0]; //获取canvas对象
        //设置画布高度为canvas父级的高度
        Canvas.height = parseInt((Canvas.parentNode.currentStyle ? Canvas.parentNode.currentStyle : window.getComputedStyle(Canvas.parentNode, null)).height);
        //设置画布高度为canvas父级的宽度
        Canvas.width = parseInt((Canvas.parentNode.currentStyle ? Canvas.parentNode.currentStyle : window.getComputedStyle(Canvas.parentNode, null)).width);
        Context = Canvas.getContext('2d');
        Interval = interval || 50;          //动画间隙默认50ms
        Radius = radius || 5;               //球半径默认为5px
        MarginLeft = marginleft || 10;      //左间距
        MarginTop = margintop || 10;        //右间距
        timeColor = timecolor || '#666666'; //背景时间颜色
        run();
    };

    var run = function () {
        setInterval(function () {
            _update();
            _render();
        }, Interval);
    };

    var stop = function () {
        isStop = true;
    };

    var getCurrentTime = function () {
        var date = new Date();
        return [
            parseInt(date.getHours()/10),
            date.getHours()%10,
            10, //:
            parseInt(date.getMinutes()/10),
            date.getMinutes()%10,
            10, //:
            parseInt(date.getSeconds()/10),
            date.getSeconds()%10
        ];
    };

    //渲染
    var _render = function () {
        Context.clearRect(0, 0, Canvas.width, Canvas.height); //清空画布

        // 渲染时间
        for (var i = 0; i < timeMatrix.length; i++) {
            Context.fillStyle = timeColor;
            for (var j = 0; j < timeMatrix[i].length; j++) {
                if (timeMatrix[i][j] == 1) {
                    Context.beginPath();
                    Context.arc(10 + (2 * j + 1) * Radius + j, 10 + (2 * i + 1) * Radius + i, Radius, 0, 2*Math.PI);
                    Context.closePath();
                    Context.fill();
                }
            }
        }

        // 渲染小球
        for (var i = 0; i < balls.length; i++) {
            Context.fillStyle = balls[i].color;
            Context.beginPath();
            Context.arc(balls[i].x, balls[i].y, Radius, 0, 2*Math.PI);
            Context.closePath();
            Context.fill();
        }
    };

    //更新要渲染的数据
    var _update = function () {
        nowTime = getCurrentTime();
        timeMatrix = [];

        //生成时间矩阵
        for (var i = 0; i < canvasChars[0].length; i++) {
            for (var j = 0; j < nowTime.length; j++) {
                timeMatrix[i] = timeMatrix[i] ? timeMatrix[i].concat(canvasChars[nowTime[j]][i]) : canvasChars[nowTime[j]][i];
            }
        }

        //时间变化时产生小球{x: x轴距离, y: y轴距离, vx: x轴速度, vy: y轴速度, g: y轴加速度}
        //当上一个时间点矩阵某一值由1变为0时,生成小球,做随机抛物线运动
        if (lastTimeMatrix.length != 0 && !isStop) {
            for (var i = 0; i < lastTimeMatrix.length; i++) {
                for (var j = 0; j < lastTimeMatrix[i].length; j++) {
                    if (lastTimeMatrix[i][j] == 1 && timeMatrix[i][j] == 0) {
                        balls.push({
                            x: 10 + (2 * j + 1) * Radius + j,
                            y: 10 + (2 * i + 1) * Radius + i,
                            vx: (Math.random() * 50 + 50) * (Math.random() > 0.5 ? 1 : -1),
                            vy: 0,
                            g: 500,
                            color: ballColors[Math.floor(Math.random() * ballColors.length)]
                        });
                    }
                    lastTimeMatrix[i][j] = timeMatrix[i][j];
                }
            }
        } else if (!isStop) {
            lastTimeMatrix = timeMatrix;
        }

        //更新小球状态
        for (var i = 0; i < balls.length; i++) {
            var y = balls[i].y + balls[i].vy * Interval/1000 + 1/2 * balls[i].g * Math.pow(Interval/1000, 2);
            balls[i].x = balls[i].x + balls[i].vx * Interval/1000;
            balls[i].y = (y > Canvas.height - Radius ? Canvas.height - Radius : y);

            //小球反弹
            if (balls[i].y == Canvas.height - Radius) {
                balls[i].vy = balls[i].vy * -(Math.random() * 0.3 + 0.5);
            } else {
                balls[i].vy = balls[i].vy + balls[i].g * Interval / 1000;
            }

            //小球超出可见区域,删除小球
            if (balls[i].x + Radius < 0 || balls[i].x - Radius > Canvas.width) {
                balls.splice(i, 1);
            }
        }
    };

    return {
        init: init,
        stop: stop
    };
}());

canvasTimer.init();