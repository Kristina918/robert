<?php
header('Content-Type: text/html; charset=utf-8');
error_reporting(-1);

$fio = $_POST['name'];
$phone = $_POST['phone'];

$date = $_POST['date'];
$email = $_POST['email'];
$address = $_POST['address'];
$procedure = $_POST['procedure'];
$day = $_POST['day'];
$time = $_POST['time'];

$fio = htmlspecialchars($fio);
$phone = htmlspecialchars($phone);

$date = htmlspecialchars($date);
$email = htmlspecialchars($email);
$address = htmlspecialchars($address);
$procedure = htmlspecialchars($procedure);
$day = htmlspecialchars($day);
$time = htmlspecialchars($time);


$fio = urldecode($fio);
$phone = urldecode($phone);

$date = urldecode($date);
$email = urldecode($email);
$address = urldecode($address);
$procedure = urldecode($procedure);
$day = urldecode($day);
$time = urldecode($time);


$fio = trim($fio);
$phone = trim($phone);

$date = trim($date);
$email = trim($email);
$address = trim($address);
$procedure = trim($procedure);
$day = trim($day);
$day    = DateTime::createFromFormat('Y-m-d', $day);
$day = $day->format('m.d.Y');
$time = trim($time);

//echo $fio;
//echo "<br>";
//CNK75@web.de;
//infocnk.com@infonaro.com
//infonaro.com@infonaro.com
if (mail("infonaro.com@infonaro.com", "Anwendung von der Website", "Vollstandiger Name: ".$fio. " 

Geburtsdatum: ".$date." 

Telefonnummer: ".$phone. "

Email: ".$email. "

Adresse: ".$address." 

Service: ".$procedure. "

Wunschtermin: ".$day. " 

Gewunschte Uhrzeit: ".$time,"From: infocnk.com@infonaro.com \r\n"))
 {     echo "Nachricht erfolgreich gesendet";
} else {
    echo "Beim Senden der Nachricht sind Fehler aufgetreten";
}?>
<script type="text/javascript">
setTimeout('location.replace("/index.html")', 3000);
/*Изменить текущий адрес страницы через 3 секунды (3000 миллисекунд)*/
</script>