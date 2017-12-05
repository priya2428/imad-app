console.log('Loaded!');
alert('hi');
console.log('absd');
var element=document.getElementById('main-text');
element.innerHTML ='new value';
var img= document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+10;
    img.style.marginLeft+'px';
}
img.onclick= function(){
var interval=setInterval(moveRight,100);
};



