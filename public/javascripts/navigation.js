$(document).ready(function(){
    console.log('Ready');
    $('body').click(function(){
        $('.perfil-dropdown').addClass('d-none');
    });
    $('.perfil-dropdown ul li').click(function(event){
        event.stopPropagation();
    });
});

function mostrarDropdown(event) {
    event.stopPropagation();
    $('.perfil-dropdown').toggleClass('d-none');
}

