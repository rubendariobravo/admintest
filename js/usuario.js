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
            var data = JSON.parse(resp);
            if (data[0][8]==='I'){
                return Swal.fire("Mensaje de Advertencia","El usuario: "+usu+" no tiene sesión abierta","warning");
            }
            $.ajax({
                url:'../controlador/usuario/controlador_crear_sesion.php',
                type:'POST',
                data:{
                    idusuaio:data[0][0],
                    user:data[0][1],
                    rol:data[0][5]
                }
            //Swal.fire("Mensaje De Confirmacion",'Bienvenido al sistema',"success");
            }).done(function(resp){
                
                let timerInterval
                Swal.fire({
                title: 'Bienvenidos al Sistema',
                html: 'Usted ser&aacute; redireccionado en <b></b> milisegundos.',
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
                }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                   location.reload();
                }
                })

            })
        }
    })
}