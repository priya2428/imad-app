//counter code
var request= new xmlHttpRequest();
request.onreadystatechange=function(){
if (request.readystate===xmlHttpRequest.DONE){
    if(request.status===200){
        request.responseText;
    }
}
request.open('GET','http://priyadharshni2palani.imad.hasura-app.io/',true);
request.send(null);

};



