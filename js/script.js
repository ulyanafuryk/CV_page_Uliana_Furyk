$('#name').animateCss('pulse');


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
            $('#forma').html('<h1>Thank you!</h1>');
        })
        .fail(function (jqXHR, textStatus) {
            $('#forma').html('<h1>Error!</h1><br>'+textStatus);
        });
    })
})

