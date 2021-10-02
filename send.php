<?php
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $text_comment = $_POST["text_comment"];

    if($name=="" or $email=="" or $phone=="" or $text_comment==""){ 
        echo "Заполните все поля";
    }

    else{
        $to = "alexandr0095@mail.ru"; /* Адрес, куда отправляем письма*/
        $subject = "Письмо с обратной связи"; /*Тема письма*/
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n";
        $headers .= "From: <test@mail.ru>\r\n";/*ОТ КОГО*/


        $message .= "Имя пользователя: ".$name."\n";
        $message .= "Почта: ".$email."\n";
        $message .= "Телефон: ".$phone."\n";
        $message .= "Сообщение: ".$text_comment."\n";

        print_r($message);

        $send = mail($to, $subject, $message, $headers);

        if ($send == "true")
        {
            echo "Ваше сообщение отправлено. Мы ответим вам в ближайшее время.\r\n";
        }
        else
        {
            echo "Не удалось отправить, попробуйте снова!";
        }
    }

?>