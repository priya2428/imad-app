//counter 
var button=document.getElementById('counter');
button.onclick=function(){
var request= new xmlHttpRequest();
request.onreadystatechange=function(){
if (request.readystate===xmlHttpRequest.DONE){
    if(request.status===200){
       var counter= request.responseText;
       var span=document.getElementById('count');
       span.innerHTML=counter.toString();
    }
}

};
request.open('GET','http://priyadharshni2palani.imad.hasura-app.io/counter',true);
request.send(null);
};



