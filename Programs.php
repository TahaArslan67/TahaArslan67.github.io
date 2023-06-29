<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Programs</title>
    <link rel="icon" href="cecico.ico"image/x-icon" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
      
</head>
<body class="banner">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    
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
        .button-1 {
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}
.button1 {
  background-color: white; 
  color: black; 
  border: 2px solid #4CAF50;
}
.button1:hover {
  background-color: #4CAF50;
  color: white;
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
                    <a class="nav-link" href="Programs.php">Programs</a>
                  </li>
                  <li class="nav-item intent2">
                    <a class="nav-link" href="additions.php">Additions</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle intent2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Help
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item intent3" href="FAQ.php">○  FAQ</a></li>
                      <li><a class="dropdown-item intent3" href="Report.php">○  Report</a></li>
                      <li><hr class="dropdown-divider"></li>
                      <li><a class="dropdown-item intent3" href="Contact.php">○  Contact</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <style>
              .yazibüyütme{
            font-size: 50px;
              }
              @media screen and (max-width: 700px) {
                .s340{
                  width: 340px;

                }
              }
            </style>
          </nav>
<div>
          <ol class="yazibüyütme">
<div class="s340">
              <a href="GayMeter.php"> <button class="button-1 button1">1. GAY METER</button></a>
              <a href="GuessNumber.php"><button class="button-1 button1">2. GUESS NUMBER</button></a>
              <a href="dice.php"><button class="button-1 button1">3. DICE GAME</button></a>
              <a href="english word practice.php"><button class="button-1 button1">4. ENGLISH PRACTICE APP (NOT DONE)</button></a>
              <a href="tarot.php"><button class="button-1 button1">5. TAROT</button></a>
            </div>
        </ol></div>
<br><br>
          </div>
</body>
</html>