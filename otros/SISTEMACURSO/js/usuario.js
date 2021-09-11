function VerificarUsuario(){
    var usu = $("#txt_usu").val();
    var con = $("#txt_con").val();

    if(usu.length==0 || con.length==0){
        return Swal.fire("Mensaje De Advertencia","Llene los campos vacios","warning");
    }
    $.ajax({
        url:'../controlador/usuario/controlador_verificar_usuario.php',
        type:'POST',
        data:{
            user:usu,
            pass:con
        }
    }).done(function(resp){
        if(resp==0){
            Swal.fire("Mensaje De Error",'Usuario y/o contrase\u00f1a incorrecta',"error");
        }else{
            Swal.fire("Mensaje De Confirmacion",'Bienvenido al sistema',"success");
        }
    })
}