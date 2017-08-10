function lazyLoad(arr,fun){
    var len = arr.length;
    var imgs={};
    var num = 0;
    for(var i = 0; i < len ; i ++){
        var img = new Image();
        img.src = arr[i];
        img.onload = function(){
            num ++;
            if(num == len){
                fun(imgs);
            }
        }
        var name = arr[i].split('.')[0];
        imgs[name] = img;
    }
}
var can = document.querySelector('canvas');
var pen = can.getContext('2d');



function touch(x1,y1,w1,h1,x2,y2,h2,w2){
    if(x2 > x1 + w1 || x1 > x2 + w2 ||y2 > y1 + h1 || y1 > y2 + h2){
        return false;
    }else{
        return true;
    }
} 