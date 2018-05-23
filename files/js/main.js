$(document).ready(function() {

    /* LHS Navigation */
    $('.dbmanager_lhs__db_section__show_dbs__a_element').on('click', function(){
        var self = $(this);
        var menu_element = self.attr('data-db');
        
        $('.dbmanager_lhs__db_section__show_dbs__a_element').removeClass('active');
        self.addClass('active');

        $('#top_nav_db_name').html(menu_element);
    });
    /* LHS Navigation */
   
    /* RHS TOP Navigation */
    $('.dbmanager_rhs__top_bar__navigation__element').on('click', function(){
        var self = $(this);
        $('.dbmanager_rhs__top_bar__navigation__element').removeClass('active');
        self.addClass('active');
    });
    /* RHS TOP Navigation */

    /* Nice Select */
    $('select').niceSelect();
    /* Nice Select */

    /* Modal */
    $(document).on('click', '#create_database', function(){
        $('.prompt_overlay').show();
        $('.prompt_add_database_div').show();
        $('body').addClass('overlay_applied');
    });

    $(document).on('click', '.cancel_database_delete_js, .cancel_database_modal_js', function() {
        $('.prompt_overlay').hide();
        $('.prompt_add_database_div').hide();
        $('body').removeClass('overlay_applied');
    });
    /* Modal */

    /* Select all checkboxes */
    $("#select_all").change(function(){  //"select all" change 
        $(".checkbox").prop('checked', $(this).prop("checked")); //change all ".checkbox" checked status
    });

    //".checkbox" change 
    $('.checkbox').change(function(){ 
    //uncheck "select all", if one of the listed checkbox item is unchecked
    if(false == $(this).prop("checked")){ //if this item is unchecked
        $("#select_all").prop('checked', false); //change "select all" checked status to false
    }
    //check "select all" if all checkbox items are checked
    if ($('.checkbox:checked').length == $('.checkbox').length ){
        $("#select_all").prop('checked', true);
    }
    });
    /* Select all Checkboxes */

    /* URL Parameter */
    var searchParams = new URLSearchParams(window.location.search);
    var table = searchParams.get('table');

    if(searchParams.has('table')) {
        $('#top_nav_table_name').html(table);
    } else {
        $('#top_nav_table_name').html('table_1');
    }

    
    /* URL Parameter */

});