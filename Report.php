<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rapor</title>
    <link rel="icon" href="cecico.ico"image/x-icon" />
</head>
<body class="banner">
    <!doctype html>
<html lang="en">
  <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  </head>
  <body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
  </body>
  <style>
    .banner{
      background: url('pexels-francesco-ungaro-2835436.jpg') no-repeat center center fixed;
  width: 100%;
  height: 100%;
  -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
}
    .intent1{
        text-indent: 30px;
    }
    .intent2{
        text-indent: 60px;
    }
    .intent3{
        text-indent: 0px;
    }
    body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box;}

input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.container1 {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  margin-left: 7.8%;
  margin-right: 7.8%;
  
}
.gender{
  display: inline;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  padding: 5px;
}
.gender2{
  display: inline;
  margin-left: 30px;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  padding: 5px;
}
</style>

<div class="container">
    <nav class="navbar navbar-expand-lg intent1">
        <div class="container-fluid">
            <a class="navbar-brand" href="Home.html">
                <img src="cec.png" alt="Bootstrap" width="70" height="30">
              </a>
          <a class="navbar-brand" href="#" class="navbarborder"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="Home.html">Home</a>
              </li>
              <li class="nav-item intent2">
                <a class="nav-link" href="Programs.html">Programs</a>
              </li>
              <li class="nav-item intent2">
                <a class="nav-link" href="additions.html">Additions</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle intent2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Help
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item intent3" href="FAQ.HTML">○  FAQ</a></li>
                  <li><a class="dropdown-item intent3" href="Report.html">○  Report</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item intent3" href="Contact.html">○  Contact</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     
</div>
<div class="container1">
  <form action="Report.php" method="post">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name..">

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name..">
<tr>
    <h3 class="gender">Gender</h3>
    <label class="example-radio">
        Male
        <input type="radio" checked="checked" name="radio" id="gender">
        <span class="checkmark-radio"></span>
    </label>
    <label class="example-radio">
        Female
        <input type="radio" name="radio" id="gender">
        <span class="checkmark-radio"></span>
    </label>
    <h4 class="gender2">Age</h4>
    <input type="number" min="0" max="100" id="age" name="age"/>
  </tr>
    <hr>

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
    <input type="submit" value="Submit" onclick="function1()">
  </form>
</div>
<script src="report.js"></script>
</html>
</body>
</html>


<?php

include("baglanti.php");


if(isset($_POST["firstname"], $_POST["lastname"], $_POST["age"], $_POST["subject"]))
{
  $ad=$_POST["firstname"];
  $soyad=$_POST["lastname"];
  $age=$_POST["age"];
  $subject=$_POST["subject"];

  $ekle="INSERT INTO iletisim(ad, soyad, age, subject ) VALUES ('".$ad."','".$soyad."','".$age."','".$subject."')";


  if($baglan->query($ekle)===TRUE)
  {
    echo "<script>alert('Mesajınız başarılı')</script>";
  }
}


?>