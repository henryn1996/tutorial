var ChatStr = "";

function replaceEmojis(){
    chatStr = chatStr.replace(":)","<img class = 'emoji' src='imgs/smile.png'/>");
    
    chatStr = chatStr.replace(":(","<img class = 'emoji' src='imgs/sad.png'/>");

    chatStr = chatStr.replace(":'(","<img class = 'emoji' src='imgs/cry.png'/>");

    chatStr = chatStr.replace(";)","<img class = 'emoji' src='imgs/wink.png'/>");
    
    chatStr = chatStr.replace("<3","<img class = 'emoji' src='imgs/heart.png'/>");
    
    chatStr = chatStr.replace(":D","<img class = 'emoji' src='imgs/smiley.png'/>");
    
    chatStr = chatStr.replace("<:0","<img class = 'emoji' src='imgs/unicorn.png'/>");
    chatStr = chatStr.replace("yeah","****");
    chatStr = chatStr.replace("fuck","****");
}


//----------------p1Chat------------------------//
function changeChatStr(){
    chatStr = document.getElementById("p1Input").value;
    document.getElementById("p1Input").value="";
    
    /*if(chatStr == ":)"){
        chatStr = "<img class = 'emoji' src='imgs/smile.png'/>";
    } else if(chatStr == ":("){
        chatStr = "<img class = 'emoji' src ='imgs/sad.png'/>";
    }*/
    replaceEmojis();
}

//----------------p2Chat------------------------//
function changeChatStr2(){
    chatStr = document.getElementById("p2Input").value;
    document.getElementById("p2Input").value="";
    
    replaceEmojis();
}

//--------------chatDisplay------------/
function createChat(chatNum){
    var ndiv = document.createElement("div");
    ndiv.innerHTML = chatStr;
    
    if(chatNum ==1){
          ndiv.style.backgroundColor = "#AFA";  
    } else if(chatNum==2){
            ndiv.style.backgroundColor = "#AAF";
    }

    ndiv.style.padding = "10px";
    document.getElementById("chatDisplay").appendChild(ndiv);
}


//--------------Interactions--------------//
document.getElementById("p1Input").addEventListener("keyup",function(ev){
   if(ev.keyCode == 13){
       changeChatStr();
       createChat(1);
   } 
});

document.getElementById("p2Input").addEventListener("keyup",function(ev){
   if(ev.keyCode == 13){
       changeChatStr2();
       createChat(2);
   } 
});