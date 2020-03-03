// In de les gemaakt

$('h1').click ( function() {
    $('main').hide(900).delay(600).show(1200);
});

$('#tim p').click(function(){
    $('#tim img').slideToggle(700);
})

// Buiten de les gemaakt

// Via de video van Theo

// Mouse Events

$('figure img').mouseenter( function() {
    $(this).fadeTo(600, .01);
}).mouseleave(function() {
    $(this).fadeTo(1000, 1);
}).click( function() {
    $(this).next().toggle(700);
});

// Footer

$('footer').click( function() {
    $(this).animate( {
    top: '-=50px',
    opacity: '-=.2'
    }, 900)
} ).dblclick ( function() {
    $(this).animate( {
    top: '0',
    opacity: '1'
    }, 900)
});

// Eigen code

$("h3").dblclick(function(){
    $(this).hide();
})

$("button").click(function(){
    alert("Value: " + $("#test").val());
});