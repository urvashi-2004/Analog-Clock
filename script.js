var second=0;
var minute=0;
var hour=0;
var d= new Date();

setInterval(
    function() {
        d=new Date();
        second=((d.getSeconds() /60 ) *360 ) + 90;
        minute=((d.getMinutes() /60 ) *360 ) +90;
        hour=((d.getHours() / 12 ) *360 ) + 90;

        document.getElementById("hour-hand").style.transform="rotate(" + hour + "deg)";
        document.getElementById("minute-hand").style.transform="rotate(" + minute + "deg)";
        document.getElementById("second-hand").style.transform="rotate(" + second + "deg)";

    }, 1000
);

