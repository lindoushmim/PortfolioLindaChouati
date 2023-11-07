


<?php 

    // permet de recuperer les données du formalaire du site 

    $nom = $_POST['nom'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    

    // permet de m envoyer les données recuperer 

    $destinataire = "linda.chouati@gmail.com";
    $objet = "Message de $nom";
    $infoMessage = "De: $nom\nE-mail: $email\nMessage:\n$message";
    $mailMessage= "From: $email";

    mail($destinataire, $objet, $infoMessage, $mailMessage);

?>
