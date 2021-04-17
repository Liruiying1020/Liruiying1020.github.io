document.write();
// 页面加载
window.onload = function () {

    // 定义随机数函数
    function getRandom(min, max) {
        return parseInt((Math.random() * (max - min)) + min);
    }

    // 获取 DOM 对象
    var num = document.getElementById("num");
    var start = document.getElementById("start");
    var show = document.getElementById('show');
    var preNum = document.getElementById('preNum');
    var restart = document.getElementById("restart");

    // 定义游戏函数
    function game() {

        // 通过 flag 记录点击次数
        var flag = 0;

        // 创建随机数对象
        var ran = getRandom(0, 100);

        // 按钮注册点击事件
        start.onclick = function () {

            // 获取用户输入的值
            var val = num.value;

            // 显示提示框
            show.style.display = "block";
            // 判断用户输入的值
            if (val > 0 && val < 100) {
                flag += 1;
                var showResult = preNum.innerText;
                preNum.innerText = showResult ? showResult + "，" + val : val;

                // 判断用户是否超过了 10 次
                if (flag < 11) {

                    // 判断用户输入的数字和产生的随机数
                    if (val < ran) {
                        show.innerText = "小了一点噢";
                        show.style.backgroundColor = "midnightblue";

                    } else if (val > ran) {
                        show.innerText = "大了一点噢";
                        show.style.backgroundColor = "midnightblue";

                    } else {
                        show.innerText = "恭喜你！猜对了！你很棒哦";
                        show.style.backgroundColor = "green";

                    }
                } else {
                    show.innerText = "你的10次机会已经用完了，下次加油哦！";
                    show.style.backgroundColor = "midnightblue";
                }
            } else {
                show.innerText = "再看看要求噢～请输入0 - 100之间的数字";
                show.style.backgroundColor = "midnightblue";
            }


        }

    }


    game();

    // 重新开始游戏

    restart.onclick = function () {

        // 允许按钮点击
        start.removeAttribute("disabled");

        // 允许数字框输入
        num.removeAttribute("disabled");

        // 隐藏提示框
        show.style.display = "none";

        // 清空
        preNum.innerText = "";

        // 初始化数字框
        num.value = "";

        // 再次调用
        game();
    }


}
