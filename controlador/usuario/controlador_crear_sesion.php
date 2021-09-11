<?php
 //recibo las variables de ajax
 $IDUSUARIO = $_POST['idusuario'];
 $USUARIO = $_POST['user'];
 $ROL = $_POST['rol'];
 //creo la sesion
 session_start();
 //asigno las variables de sesion
 $_SESSION['S_IDUSUARIO'] = $IDUSUARIO;
 $_SESSION['S_USUARIO'] = $USUARIO;
 $_SESSION['S_ROL'] = $ROL;

?>