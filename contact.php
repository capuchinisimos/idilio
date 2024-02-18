<?php
    $toEmail = "capuchinisimos@gmail.com";
    $mailHeaders = "From: " . $_POST["nom"] . "<". $_POST["mail"] .">\r\n";
    if(mail($toEmail, $_POST["objet"], $_POST["message"], $mailHeaders)) {
        print "<p class='success'>Merci! Votre demande a bien été enregistrée.</p>";
    } else {
        print "<p class='Error'>Oups.Un problème était survenu</p>";
    }
?>