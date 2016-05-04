// Init navigation menu
		jQuery(function(){
		// main navigation init
			jQuery('ul.sf-menu').superfish({
				delay: 1000, // the delay in milliseconds that the mouse can remain outside a sub-menu without it closing
				animation: {
					opacity: "show",
					height: "show"
				}, // used to animate the sub-menu open
				speed: "normal", // animation speed
				autoArrows: false, // generation of arrow mark-up (for submenu)
				disableHI: true // to disable hoverIntent detection
			});

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

