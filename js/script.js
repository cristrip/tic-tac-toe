 var winner=[["a1","a2","a3"],
        ["b1","b2","b3"],["c1","c2","c3"],
        ["a1","b2","c3"],["a1","b1","c1"],
        ["a2","b2","c2"],["a3","b3","c3"],
        ["a3","b2","c1"]];
        var arr = ["a1","a2","a3","b1","b2","b3","c1","c2","c3"];
        var player1=[];
        var player2=[];
        var user1=0;
        var user2=0;
        var pl1=0;
        var pl2=0;
        ////////////////////////////////////////////////////////////////////////////////
        const wrapper1 = document.getElementById('butt');
        wrapper1.addEventListener('click', (event) => {
        const isButton = event.target.nodeName === 'BUTTON';
        if (!isButton) {
            return;
        }
        var a1 =event.target.id;
        if (user2==1){
        var inc_player1=arr.includes(a1);//lets see if exists 
        var inc_player2=arr.includes(a1);//lets see if exists 
        if (pl1<=pl2 && inc_player2==true){
            var index1 = arr.indexOf(a1); 
            arr.splice(index1, 1); // 2nd parameter means remove one item only    
            player1.push(a1);   
            pl1++;   
            var bb=document.getElementById(a1);
            bb.innerHTML='X'; 
        }  
            if(pl1>pl2 & inc_player1==true & pl1<=4){
            const random1 = arr[(Math.floor(Math.random() * (arr.length)))];
            const index = arr.indexOf(random1);
            player2.push(random1);    
            pl2++;//every time we are adding one  
            var bb=document.getElementById(random1);
            bb.innerHTML='O';
            arr.splice(index, 1); // 2nd parameter means remove one item only
            } 
            for (let i = 0; i < winner.length; i++) {
                    let result = winner[i].every(play => player1.includes(play));
                    let result1 = winner[i].every(play => player2.includes(play));
                             if(result==1){
                            var popup = document.getElementById("win");
                            var display1= document.getElementById("win");
                            popup.style.visibility = "visible";
                            display1.innerHTML='You are the winner player 1'; 
                            }  
                            if (result1==1){
                            var popup = document.getElementById("win");
                            var display1= document.getElementById("win");
                            popup.style.visibility = "visible";  
                            display1.innerHTML='You are the winner player 2';   
                            } 
                        if (pl1==5 & result==0 & result==0){
                             var popup = document.getElementById("win");
                        var display1= document.getElementById("win");
                        popup.style.visibility = "visible";
                        display1.innerHTML='No WINNER !!!!';
                        }
                } //
            };
            // } 
            });
 /////////////////////////////////////////////////////////////////////////////////
 /////////////////////////////////////////////////////////////////////////////////
        const wrapper = document.getElementById('butt');
        wrapper.addEventListener('click', (event) => {
        const isButton = event.target.nodeName === 'BUTTON';
        if (!isButton) {
            return;
        }
        var a1 =event.target.id;
        if (user1==1){    
            var inc_player1=arr.includes(a1);//lets see if exists 
            var inc_player2=arr.includes(a1);//lets see if exists 
            if(pl1>pl2 && inc_player1==true){
            var index1 = arr.indexOf(a1); 
            arr.splice(index1, 1); // 2nd parameter means remove one item only 
            player2.push(a1);    
            pl2++;//every time we are adding one  
            var bb=document.getElementById(a1);
            bb.innerHTML='O';
        }
            else if (pl1<=pl2 && inc_player2==true){
            var index1 = arr.indexOf(a1); 
            arr.splice(index1, 1); // 2nd parameter means remove one item only    
            player1.push(a1);   
            pl1++;   
            var bb=document.getElementById(a1);
            bb.innerHTML='X';
            console.log("arr",arr);
            console.log("palyer1",player1);
            console.log("palyer2",player2);
            console.log("pl1",pl1);
            console.log("pl2",pl2);
            
            for (let i = 0; i < winner.length; i++) {
                let result = winner[i].every(play => player1.includes(play));
                let result1 = winner[i].every(play => player2.includes(play));
                        if(result==true){
                        var popup = document.getElementById("win");
                        var display1= document.getElementById("win");
                        popup.style.visibility = "visible";
                        display1.innerHTML='You are the winner player 1'; 
                        }  
                        if (result1==true){
                        var popup = document.getElementById("win");
                        var display1= document.getElementById("win");
                        popup.style.visibility = "visible";  
                        display1.innerHTML='You are the winner player 2';   
                        } 
                    if (pl1==5){ 
                    if(result==1){    
                    var popup = document.getElementById("win");
                    var display1= document.getElementById("win");
                    popup.style.visibility = "visible";
                    display1.innerHTML='You are the winner player 1';
                    }
                    if(result1==1 ){
                    var popup = document.getElementById("win");
                    var display1= document.getElementById("win");
                    popup.style.visibility = "visible";
                    display1.innerHTML='You are the winner player 1';
                    }
                    if(pl1==5 && result==0 && result1==0){
                        var popup = document.getElementById("win");
                    var display1= document.getElementById("win");
                    popup.style.visibility = "visible";
                    display1.innerHTML='No WINNER !!!!';      
                    }
                }
            } //
            }    
            }  
            });            
///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

    var popup = document.getElementById("myPopup");
    var display= document.getElementById("display");
    display.innerHTML='Choose the option';
    if(display.innerHTML =='Choose the option') { 
        var but1=document.getElementById("btn1");
        but1.addEventListener("click",function(){
        popup.classList.toggle("show");
        display.innerHTML='2 players game';
        user1=1;
        user2=0;
        player1=[];
        player2=[];
        pl1=0;
        pl2=0;
        
        });
        var but2=document.getElementById("btn2");
        but2.addEventListener("click",function(){
        popup.classList.toggle("show");
        display.innerHTML='Against the computer game';
        user1=0;
        user2=1;
        player1=[];
        player2=[];
        pl1=0;
        pl2=0;
        });
    }
    document.getElementById('quit').addEventListener('click', function(){
    var popup1 = document.getElementById("myPopup");
    popup1.classList.toggle("show");
    var button=document.querySelectorAll("#a1, #a2, #a3,#b1, #b2, #b3,#c1, #c2, #c3");
        button.forEach((element) => {
        element.innerHTML='';
        });
    player1=[];
    player2=[];
    pl1=0;
    pl2=0;
    user1=0;
    user2=0;
    arr = ["a1","a2","a3","b1","b2","b3","c1","c2","c3"];
    var popup = document.getElementById("win");
    popup.style.visibility = "hidden"; 
    console.log("button",button); 
});


