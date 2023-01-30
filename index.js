function fonksio(){
var username1 = document.getElementById("klncadi").value;
var password1 = document.getElementById("password").value;

console.log(username1);
console.log(password1);

// ALTTAKİNİ KOPYALAYARAK HESAP EKLE
if(username1=="taharslan" && password1=="00228t"){
        window.location.href ="Home.php" ;
}  
else if(username1=="tunat" && password1=="dayımınözoğlu67"){
  window.location.href ="Home.php" ;
} 
else if(username1=="ayı" && password1=="şalterci"){
  window.location.href ="Home.php" ;
}
    

// ÜSTTEKİNİ KOPYALAYARAK HESAP EKLE

else if(username1=="Taharslan" && password1=="00228t"){
    window.location.href ="Home.php" ;
}
else if(username1=="Taharslan" && password1=="0022800228t"){
  window.location.href ="Home.php" ;
}
else if(username1=="taharslan" && password1=="0022800228t"){
  window.location.href ="Home.php" ;
}












 else{
    username1=false;
    password1=false;
}
if(username1==false && password1==false){
    document.querySelector(".alert").classList.remove("hidden");
    }};



  function fonksio1(){
    document.querySelector(".alert").classList.add("hidden");
  }