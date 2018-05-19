$(document).ready(function() {
   
    /* RHS Navigation */
    $('.dbmanager_rhs__top_bar__navigation__element').on('click', function(){
        var self = $(this);
        $('.dbmanager_rhs__top_bar__navigation__element').removeClass('active');
        self.addClass('active');
    });

    $('select').niceSelect();

});