$(function() {
    let items = $('.nav-item');
    items.on('click', function() {
        items.removeClass('active');
        $(this).addClass('active');
    })
})