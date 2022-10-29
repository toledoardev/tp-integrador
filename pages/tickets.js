const TICKET_PRICE = 200;
const TOTAL = 1;
const STUDENT_DISCOUNT = 0.8; 
const TRAINEE_DISCOUNT = 0.5;
const JUNIOR_DISCOUNT = 0.15;

const categories = ["Estudiante", "Trainee","Junior"];


function calculatePrice(category, amount){
    let rate;

    switch (category) {
        case categories[0]:
            rate = (TOTAL-STUDENT_DISCOUNT)*TICKET_PRICE*amount;
            break;
        case categories[1]:
            rate = (TOTAL-TRAINEE_DISCOUNT)*TICKET_PRICE*amount;
            break;
        default: 
            rate = (TOTAL-JUNIOR_DISCOUNT)*TICKET_PRICE*amount;
    }

    return Math.round(rate);
}


$(document).ready(function(){

    $("#btn-tickets-price").attr("disabled", "disabled");

    $("#btn-tickets-resume").click(function(){

        let name = $("#input-name").val();
        let surname = $("#input-surname").val();
        let email = $("#input-email").val();
        let amount = $("#input-amount").val();
        let category = $("#input-category").val();

        const emptyFields = (name.length == 0 || surname.length == 0 || email.length == 0 || amount.length == 0) ? true : false;

        if (!emptyFields) {
            let price = calculatePrice(category, amount);
            let priceText = "Total a pagar: $" + price;
        
            $("#btn-tickets-price").val(priceText);  
            Swal.fire({
                icon: "success",
                title: "¡Excelente " + name + " " + surname + "!",
                html: "¡Su compra ha sido realizada con éxito! <br> Los tickets serán enviados a <strong>" + email,
                confirmButtonColor: "#36D057",
            })

        } 
        else Swal.fire({
            icon: "error",
            title: "¡Algo ha salido mal!",
            text: "Debe completar todos los campos del formulario.",
            confirmButtonColor: "#dd6b55",
          })
               
    });

    $("#btn-tickets-erase").click(function(){
        $("#input-name").val("");
        $("#input-surname").val("");
        $("#input-email").val("");
        $("#input-amount").val("");
        $("#input-category").val($("#input-category option:nth-child(1)").val());
        $("#btn-tickets-price").val("");
    });

});