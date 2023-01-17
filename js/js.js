//header
$(function(){
    $("header .checkBox").click(function(event){
        $("header .checkBox ul")
        .toggleClass("display");

        event.stopPropagation();
    })
})
//time
function currentTime() {
    now = new Date();
    yy = now.getFullYear();
    mm = now.getMonth() + 1;
    dd = now.getDate();
    h = now.getHours();
    m = now.getMinutes();
    s = now.getSeconds();
    var curTime = document.getElementsByClassName('time');
    curTime[0].innerHTML = yy+'/'+mm+'/'+dd+'&emsp;'+h+' : '+m+' : '+s;
    setTimeout('currentTime()',1000);

    if(h < 10)
    {
        curTime[0].innerHTML = yy+'/'+mm+'/'+dd+'&emsp;0'+h+' : '+m+' : '+s;
    }
    if(m < 10)
    {
        curTime[0].innerHTML = yy+'/'+mm+'/'+dd+'&emsp;'+h+' : 0'+m+' : '+s;
    }
    if(s < 10)
    {
        curTime[0].innerHTML = yy+'/'+mm+'/'+dd+'&emsp;'+h+' : '+m+' : 0'+s;
    }
}

