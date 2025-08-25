let currentdate = new Date();
let d = currentdate.getDay();
let h = currentdate.getHours()
let m = currentdate.getMinutes()
let hm = m + h * 60;
let t;
let tt;

//location.replace('dghs.site');

function myLoop() {
    setTimeout(function() {
        currentdate = new Date();
        h = currentdate.getHours()
        //h = document.getElementById('aaa').value;
        //m = document.getElementById('aaaa').value;
        hm = Number(m) + Number(h * 60);
        m = currentdate.getMinutes()
        if (hm < 490){
            document.getElementById('label').value = "등교"
        }
        if (hm >= 490 && hm < 530){
            t = 50;
            tt = 520 - hm;
            document.getElementById('prgg').max = t;
            document.getElementById('prgg').value = t - tt;
            document.getElementById('label').value = "아침시간"
        }
        if (hm >= 530 && hm < 580){
            t = 50;
            tt = 580 - hm;
            document.getElementById('prgg').max = t;
            document.getElementById('prgg').value = t - tt;
            document.getElementById('label').value = "1교시"
        }
        if (hm >= 580 && hm < 590){
            t = 10;
            tt = 590 - hm;
            document.getElementById('prgg').max = t;
            document.getElementById('prgg').value = t - tt;
            document.getElementById('label').value = "쉬는시간"
        }
        if (hm >= 590 && hm < 630){
            t = 50;
            tt = 630 - hm;
            document.getElementById('prgg').max = t;
            document.getElementById('prgg').value = t - tt;
            document.getElementById('label').value = "2교시"
        }
        if (hm >= 630 && hm < 640){
            t = 10;
            tt = 640 - hm;
            document.getElementById('prgg').max = t;
            document.getElementById('prgg').value = t - tt;
            document.getElementById('label').value = "쉬는시간"
        }
        if (hm >= 640 && hm < 690){
            t = 50;
            tt = 690 - hm;
            document.getElementById('prgg').max = t;
            document.getElementById('prgg').value = t - tt;
            document.getElementById('label').value = "3교시"
        }
        if (hm >= 690 && hm < 700){
            t = 10;
            tt = 700 - hm;
            document.getElementById('prgg').max = t;
            document.getElementById('prgg').value = t - tt;
            document.getElementById('label').value = "쉬는시간"
        }
        if (hm >= 700 && hm < 750){
            t = 50;
            tt = 750 - hm;
            document.getElementById('prgg').max = t;
            document.getElementById('prgg').value = t - tt;
            document.getElementById('label').value = "4교시"
        }
        if (hm >= 750 && hm < 810){
            t = 60;
            tt = 810 - hm;
            document.getElementById('prgg').max = t;
            document.getElementById('prgg').value = t - tt;
            document.getElementById('label').value = "점심시간"
        }
        if (hm >= 810 && hm < 860){
            t = 50;
            tt = 860 - hm;
            document.getElementById('prgg').max = t;
            document.getElementById('prgg').value = t - tt;
            document.getElementById('label').value = "5교시"
        }
        if (hm >= 860 && hm < 870){
            t = 10;
            tt = 870 - hm;
            document.getElementById('prgg').max = t;
            document.getElementById('prgg').value = t - tt;
            document.getElementById('label').value = "쉬는시간"
        }
        if (hm >= 870 && hm < 920){
            t = 50;
            tt = 920 - hm;
            document.getElementById('prgg').max = t;
            document.getElementById('prgg').value = t - tt;
            document.getElementById('label').value = "6교시"
        }
        if (hm >= 920 && hm < 930){
            t = 10;
            tt = 930 - hm;
            document.getElementById('prgg').max = t;
            document.getElementById('prgg').value = t - tt;
            document.getElementById('label').value = "쉬는시간"
        }
        if (hm >= 930 && hm < 980){
            t = 50;
            tt = 980 - hm;
            document.getElementById('prgg').max = t;
            document.getElementById('prgg').value = t - tt;
            document.getElementById('label').value = "7교시"
        }
        if (hm >= 980 && hm < 990){
            t = 10;
            tt = 990 - hm;
            document.getElementById('prgg').max = t;
            document.getElementById('prgg').value = t - tt;
            document.getElementById('label').value = "쉬는시간"
        }
        if (hm >= 990 && hm < 1040){
            t = 50;
            tt = 1040 - hm;
            document.getElementById('prgg').max = t;
            document.getElementById('prgg').value = t - tt;
            document.getElementById('label').value = "8교시"
        }
        if (hm >= 1050 && hm < 1140){
            t = 90;
            tt = h - 17;
            tt = tt * 60;
            tt = tt + m;
            document.getElementById('prgg').max = t;
            document.getElementById('prgg').value = tt;
            document.getElementById('label').value = "저녁시간"
        }
        if (hm >= 1140 && hm < 1220){
            t = 80;
            tt = h - 19;
            tt = tt * 60;
            tt = tt + m;
            document.getElementById('prgg').max = t;
            document.getElementById('prgg').value = tt;
            document.getElementById('label').value = "자습 1교시"
        }
        if (hm >= 1220 && hm < 1240){
            t = 20;
            tt = h - 20;
            tt = tt * 60;
            tt = tt + m - 20;
            document.getElementById('prgg').max = t;
            document.getElementById('prgg').value = tt;
            document.getElementById('label').value = "쉬는시간"
        }
        if (hm >= 1240 && hm < 1320){
            t = 80;
            tt = 1320 - hm;
            document.getElementById('prgg').max = t;
            document.getElementById('prgg').value = t - tt;
            document.getElementById('label').value = "자습 2교시"
        }
        if (hm >= 1310 && hm < 1340){
            t = 30;
            tt = 1320 - hm;
            document.getElementById('prgg').max = t;
            document.getElementById('prgg').value = t - tt;
            document.getElementById('label').value = "귀사전 자유사간"
        }
        if (hm > 1340){
            document.getElementById('prgg').max = 1;
            document.getElementById('prgg').value = 0;
            document.getElementById('label').value = "귀사"
        }
        document.getElementById('prggtdy').value = hm;
        document.getElementById('prggwd').value = d * 1440 + hm - 1440;
        myLoop();
    }, 100)
}
  
myLoop();   