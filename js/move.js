function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else {
        return getComputedStyle(obj,false)[attr];
    }
}


function startMove(obj,attr,target,fn){
clearInterval(obj.timer);
    obj.timer=setInterval(function(){
       //1.取当前的值
        var icur=0;
        if (attr == 'opacity'){

            icur=Math.round(parseFloat(getStyle(obj,attr))*100);

        }
        else {
            icur=parseInt(getStyle(obj,attr));
        }
        //2.算速度
        var speed=(target -icur)/8;
        speed=speed>0?Math.ceil(speed):Math.floor(speed);
        //3.检测停止
        if(target == icur){
            clearInterval(obj.timer);
            if(fn){
                fn();
            }
        }else {
            if(attr == "opacity"){
                obj.style.filter='alpha:(opacity:'+icur+speed+')';
                obj.style.opacity=(icur+speed)/100;
                obj.style.filter='alpha(opacity:'+obj.alpha+')';
                obj.style.opacity=obj.alpha/100;
            }else {
            obj.style[attr]=icur+speed+"px";
            }
        }
    },30);




}