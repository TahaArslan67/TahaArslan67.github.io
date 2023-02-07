const cip1 = document.getElementById("cip1");
const cip5 = document.getElementById("cip5");
const cip10 = document.getElementById("cip10");
const cip25 = document.getElementById("cip25");
const cip50 = document.getElementById("cip50");
const cip100 = document.getElementById("cip100");
const cip500 = document.getElementById("cip500");
const cip1000 = document.getElementById("cip1000");
const money = document.querySelector(".para");
const bett = document.querySelector(".bett");


const baslangicpara = money.textContent;

    const cipbir = function(){
        money.textContent -=1;
        bett.textContent ++;
        if(Number(baslangicpara)<1 || Number(money.textContent)<0){
            money.textContent = Number(money.textContent)+1
            bett.textContent =Number(bett.textContent)-1; 
            alert("PARAN YOK");
        }
        else if(Number(baslangicpara)<1){
            money.textContent =baslangicpara;
            bett.textContent =Number(bett.textContent)-1;  
        }
        
        else if(Number(money.textContent)<0){
            money.textContent="0";
            bett.textContent =Number(bett.textContent)-1;
        }
    }
    baslangicpara == money.textContent;
    console.log(baslangicpara);
    const cipbes = function(){
        money.textContent -=5;
        bett.textContent =Number(bett.textContent)+5;
        if(Number(baslangicpara)<5 || Number(money.textContent)<0){
            money.textContent = Number(money.textContent)+5
            bett.textContent =Number(bett.textContent)-5; 
            alert("PARAN YOK");
        }
        else if(Number(baslangicpara)<5){
            money.textContent =baslangicpara;
            bett.textContent =Number(bett.textContent)-5;  
        }
        
        else if(Number(money.textContent)<0){
            money.textContent="0";
            bett.textContent =Number(bett.textContent)-5;
        }
    }
    baslangicpara == money.textContent;
    const cipon = function(){
        money.textContent -=10;
        bett.textContent =Number(bett.textContent)+10;
        if(Number(baslangicpara)<10 || Number(money.textContent)<0){
            money.textContent = Number(money.textContent)+10
            bett.textContent =Number(bett.textContent)-10; 
            alert("PARAN YOK");
        }
        else if(Number(baslangicpara)<10){
            money.textContent =baslangicpara;
            bett.textContent =Number(bett.textContent)-10;  
        }
        
        else if(Number(money.textContent)<0){
            money.textContent="0";
            bett.textContent =Number(bett.textContent)-10;
        }
    }
    baslangicpara == money.textContent;
    const cipyirmibes = function(){
        money.textContent -=25;
        bett.textContent =Number(bett.textContent)+25;
        if(Number(baslangicpara)<25 || Number(money.textContent)<0){
            money.textContent = Number(money.textContent)+25
            bett.textContent =Number(bett.textContent)-25; 
            alert("PARAN YOK");
        }
        else if(Number(baslangicpara)<25){
            money.textContent =baslangicpara;
            bett.textContent =Number(bett.textContent)-25;  
        }
        
        else if(Number(money.textContent)<0){
            money.textContent="0";
            bett.textContent =Number(bett.textContent)-25;
        }
    }
    baslangicpara == money.textContent;
    const cipelli = function(){
        money.textContent -=50;
        bett.textContent =Number(bett.textContent)+50;
        if(Number(baslangicpara)<50 || Number(money.textContent)<0){
            money.textContent = Number(money.textContent)+50
            bett.textContent =Number(bett.textContent)-50; 
            alert("PARAN YOK");
        }
        else if(Number(baslangicpara)<50){
            money.textContent =baslangicpara;
            bett.textContent =Number(bett.textContent)-50;  
        }
        
        else if(Number(money.textContent)<0){
            money.textContent="0";
            bett.textContent =Number(bett.textContent)-50;
        }
    }
    baslangicpara == money.textContent;
    const cipyuz = function(){
        money.textContent -=100;
        bett.textContent =Number(bett.textContent)+100;
        if(Number(baslangicpara)<100 || Number(money.textContent)<0){
            money.textContent = Number(money.textContent)+100
            bett.textContent =Number(bett.textContent)-100; 
            alert("PARAN YOK");
        }
        else if(Number(baslangicpara)<100){
            money.textContent =baslangicpara;
            bett.textContent =Number(bett.textContent)-100;  
        }
        
        else if(Number(money.textContent)<0){
            money.textContent="0";
            bett.textContent =Number(bett.textContent)-100;
        }
           }
           baslangicpara == money.textContent;
    const cipbesyuz = function(){
        money.textContent -=500;
        bett.textContent =Number(bett.textContent)+500;
        
        if(Number(baslangicpara)<500 || Number(money.textContent)<0){
            money.textContent = Number(money.textContent)+500
            bett.textContent =Number(bett.textContent)-500;
            alert("PARAN YOK");
             
        }
        else if(Number(baslangicpara)<500){
            money.textContent =baslangicpara;
            bett.textContent =Number(bett.textContent)-500;  
            console.log("sa");
        }
        
        else if(Number(money.textContent)<0){
            money.textContent="0";
            bett.textContent =Number(bett.textContent)-500;
        }
        
    }
    baslangicpara == money.textContent;
    const cipbin = function(){
        money.textContent -=1000;
        bett.textContent =Number(bett.textContent)+1000;
        if(Number(baslangicpara)<1000 || Number(money.textContent)<0){
            money.textContent = Number(money.textContent)+1000
            bett.textContent =Number(bett.textContent)-1000; 
            alert("PARAN YOK");
        }
        else if(Number(baslangicpara)<1000){
            money.textContent =baslangicpara;
            bett.textContent =Number(bett.textContent)-1000;
  
        }
        
        else if(Number(money.textContent)<0){
            money.textContent="0";
            bett.textContent =Number(bett.textContent)-1000;
        }
    }
    const reset = function(){
        window.location.href = "blackjack2.html";
    }
    const sil = function(){
        const i = Number(bett.textContent);
        const ii = money.textContent;
        money.textContent = Number(bett.textContent)+Number(money.textContent)-10;
        bett.textContent = 10;
    }