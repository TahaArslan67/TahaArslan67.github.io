<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GAY METER</title>
    <link rel="icon" href="gay.ico" type="image/x-icon" />
    <style>
        html {
            background: url(lgbt.png) no-repeat center center fixed;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
        }
    </style>
</head>
<body>
    <div class="container">
        <i><h1>
            YÜZDE KAÇ GAYSİN?
        </h1></i>
            </div>

<span class="yüzde">?</span>

<span class="yüzde-2">%</span>
    

<style>
    body{
        align-items: center;
    justify-content: center;
    }
    .container{
        text-align: center;
        margin-top: 10%;
        margin-bottom: 12%;
        font-size: 140%;
    }
    .gay{
        text-align: center;
        width: 10%;
        /* display: block; */
        margin-left: 50%;
        margin-top: 1%;
    }
    .yüzde{
        font-size: 60px;
        margin-left: 47%;
    }
    .yüzde-2{
        font-size: 60px;

       
    }
    .button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  margin-left: 47%;
}
@media screen and (max-width: 700px) {
    .yüzde{
        font-size: 60px;
        margin-left: 36.5%;
    }
    .yüzde-2{
        font-size: 60px;  
    }
    .button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  margin-left: 36.5%;
  margin-top: 30px;
}
.container{
        text-align: center;
        margin-top: 10%;
        margin-bottom: 45%;
        font-size: 140%;
    }
}
</style>
<br>
<audio id="audio" src="Gay Echo Voice TikTok Sound Effect.mp4" autostart="false" ></audio>
<audio id="audio2" src="The Rock.mp4" autostart="false" ></audio>
<button id="selam" type="button" name="button" class="button">BAŞLA</button>
<script>

    document.querySelector(".yüzde").textContent = 0;
let secretNumber = Math.trunc(Math.random()*100)+1;


    var btnSelam=document.getElementsByClassName(".gay");
	btnSelam.onclick=function(){
		window.alert("Siteme Hoşgeldiniz");
	}
    var btnSelam=document.getElementById("selam");
	btnSelam.onclick=function(){
		document.querySelector(".yüzde").textContent = secretNumber;
        secretNumber = Math.trunc(Math.random()*100)+1;
        console.log(secretNumber,typeof secretNumber)
        if(document.querySelector(".yüzde").textContent>=90){
          var sound = document.getElementById("audio");
          sound.play()
      }
     else if(document.querySelector(".yüzde").textContent<90 && document.querySelector(".yüzde").textContent>=65){
        var sound = document.getElementById("audio2");
          sound.play()
        }}
	



</script>
</body>
</html>