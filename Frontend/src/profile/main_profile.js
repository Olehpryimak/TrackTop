$(function(){

    $('#logo').click(function () {
        document.location.href = "http://localhost:5050/";
    })

    require('../basket').initialiseBasket();

    $('#login').click(function() {
        require('./login_form').openForm();
    })

    $('.cancel').click(function() {
        require('./login_form').closeForm();
    })

    $('#user_photo').click(function() {
        require('./login_form').userInfo();
    })

    $('.edit-profile').click(function(){
        document.location.href = "http://localhost:5050/profile";
    })

    // added
    $('#exit_btn').click(function() {
        require('./user_form').deleteInfoFromLocalStorage();
        require('./user_form').isLogged();
        $('#user_info').css("display", "none");
    })
    require('./signup_form').initializeLogin();
    require('./login_form').login();
    require('./user_form').isLogged();
    require('./profile').updateClient();


    require('./login_form').login();
    require('./user_form').isLogged();
    require('./profile').initializeUser();



})