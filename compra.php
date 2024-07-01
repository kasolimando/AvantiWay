<?php

// Access data sent from the AJAX request
$nombre = $_POST['nombre']; 
$apellido = $_POST['apellido']; 
$articulos = $_POST['articulos']; 

// Prepare a response (optional)
$response = array(
  "message" => "Compra procesada exitosamente!",
  "nombre" => $nombre,
  "apellido" => $apellido,
  "cant_prod" => count($articulos)
);

header('Access-Control-Allow-Origin: *'); // Allow requests from *


// Echo the response (optional)
echo json_encode($response);

?>
