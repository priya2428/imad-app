var button=document.getElementById('counter');
button.onclick = function() {
    //create request
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readystate===XMLHttpRequest.DONE)
        {
            //take some action
            if(request.status===200){
                var counter=request.responseText;
                var span= document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
        //not done 
    };
    request.open('GET','http://priyadharshni2palani.imad.hasura-app.io/counter',true);
    request.send(null);
};
//submit name
var nameInput=document.getElementById('name');
nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    var names=['name1','name2','name3'];
    var list='';
    for(var i=0;i<name.length;i++){
        list+='<li>'+name[i]+'</li>';
    }
    var ul= document.getElementById('namelist');
    ul.innerHTML=list;

    };
    
}


