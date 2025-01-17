function  initialize() {
    require('../pagesScripts/addTechnics').initializeEquipments();
}

$(function(){
    $('#logo').click(function () {
        document.location.href = "http://localhost:5050/";
    })

    require('../basket').initialiseBasket();

    $('#login').click(function() {
        require('../profile/login_form').openForm();
    })

    $('.cancel').click(function() {
        require('../profile/login_form').closeForm();
    })

    $('#user_photo').click(function() {
        require('../profile/login_form').userInfo();
    })

    $('#exit_btn').click(function() {
        require('../profile/user_form').deleteInfoFromLocalStorage();
        require('../profile/user_form').isLogged();
        $('#user_info').css("display", "none");
    })

    require('../profile/signup_form').initializeLogin();
    require('../pagesScripts/leftPanel').initialize();

   // initialize();
    require('../profile/login_form').login();

    require('../profile/user_form').isLogged();

    $('.edit-profile').click(function(){
        document.location.href = "http://localhost:5050/profile";
    })

    initialize();
});