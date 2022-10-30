$(document).ready(function(){

    $("#btn-send").click(function(){

        let name = $("#speaker-name").val();
        let surname = $("#speaker-surname").val();
        let text = $("#speaker-text").val();

        const emptyFields = (name.length == 0 || surname.length == 0 || text.length == 0) ? true : false;

        if (!emptyFields) {
            Swal.fire({
                icon: "success",
                title: "!Gracias " + name + " " + surname + "!",
                html: "Su solicitud será evaluada en breve.",
                confirmButtonColor: "#36D057",
            })
            
            $("#speaker-name").val("");
            $("#speaker-surname").val("");
            $("#speaker-text").val("");
            
        } 
        else Swal.fire({
            icon: "error",
            title: "¡Algo ha salido mal!",
            text: "Debe completar todos los campos del formulario.",
            confirmButtonColor: "#dd6b55",
          })
               
    });

});