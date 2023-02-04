<?php

$vt_sunucu="localhost";
$vt_kullanici="root";
$vt_sifre="";
$vt_adi="cec";


$baglan=mysqli_connect($vt_sunucu,$vt_kullanici,$vt_sifre,$vt_adi);


if(!$baglan)
{
die("Veritabanı bağlantı işlemi başarısız".mysqli_connect_error());
}

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