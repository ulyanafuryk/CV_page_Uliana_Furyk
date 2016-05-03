$(function() {
    $('#btn-send').click(function() {
        $.ajax({
            url: "https://formspree.io/uljka@yahoo.com", 
            method: "POST",
            data: {
                name: name.value,
                email: email.value,
                message: message.value},
            dataType: "json"
        })
        .done(function () {
            $('#textarea').html('<h1>Thank you!</h1>');
        })
        .fail(function (jqXHR, textStatus) {
            $('#textarea').html('<h1>Error!</h1><br>'+textStatus);
        });
    })
})
