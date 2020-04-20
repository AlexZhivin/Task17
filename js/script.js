$(document).ready(function(){

    $('.main_btna').on('click', function(){
        $('.overlay').show(1000);
        $('.modal').animate(
            {
                height: 'toggle',
                opacity: 'toggle'
            }, 2000
        );
    
    });
    $('.main_btn').on('click', function(){
        $('.overlay').show(1000);
        $('.modal').animate(
            {
                height: 'toggle',
                opacity: 'toggle'
            }, 2000
        );
    
    });
    $('a:contains("расписания туров")').on('click', function(){
        $('.overlay').show(1000);
        $('.modal').animate(
            {
                height: 'toggle',
                opacity: 'toggle'
            }, 2000
        );
    
    });
    $('.close').on('click', function(){
        $('.overlay').hide(1000);
        $('.modal').animate(
            {
                height: 'toggle',
                opacity: 'toggle'
            }, 2000
        );
    });

    


});