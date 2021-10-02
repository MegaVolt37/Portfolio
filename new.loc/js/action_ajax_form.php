<?php

if (isset($_POST["name"]) && isset($_POST["phonenumber"]) ) { 

	// Формируем массив для JSON ответа
    $result = array(
    	'name' => $_POST["name"],
    ); 

    // Переводим массив в JSON
    echo json_encode($result); 
}

?>