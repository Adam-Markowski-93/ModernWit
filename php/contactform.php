<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "markowski.adam93@gmail.com";
    $subject = 'Zapytanie';
    $headers = "From: ".$mailFrom;
    $txt = "Otrzymałeś wiadomość od ".$name.".\n\n".$message;
   
    mail($mailTo, $subject, $txt, $headers);

    header("Location: index.html");
}

?>
