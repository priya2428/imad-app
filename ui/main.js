//counter 
var button=document.getElementById('counter');
button.onclick=function(){
    
var httprequest= new XMLHttpRequest();
httprequest.onreadystatechange = function(){

if (httprequest.readystate === XMLHttpRequest.DONE){

    if(httprequest.status===200){
       var counter= request.responseText;
       var span=document.getElementById('count');
       span.innerHTML=counter.toString();
    }
}

};
httprequest.open('GET','http://priyadharshni2palani.imad.hasura-app.io/counter',true);
httprequest.send(null);
};



