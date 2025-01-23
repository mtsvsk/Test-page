<?php
    $sendToWhom = "yulka1998@yandex.ru";
    $topic = "Заявка";
    $name = $_POST['username'];
    $phone = $_POST['number'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $checked = isset($_POST['agreement']);
    $text = "Имя: " . $name . "\n" . "Телефон: " . $phone . "\n" . "E-mail: " . $email . "\n" . "Сообщение: " . $message . "\n";
    if ($checked) {
        $text .= "Согласие на обработку персональных данных получено";
    }
    mail($sendToWhom, $topic, $text, "Content-type:text/plain; charset = utf-8\r\nFrom:$email");
?>