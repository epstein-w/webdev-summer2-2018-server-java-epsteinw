(function() {
    var $usernameFld, $passwordFld, $password2Fld;
    var $registerBtn ;
    var userService = new UserServiceClient();

    main();

    function main() {

        $usernameFld = $('#username');
        $passwordFld = $('#password');
        $password2Fld = $('#password2');
        $registerBtn = $('#registerBtn');
        $registerBtn.click(registerHandler);
    }


    function registerHandler() {
        var usernameStr = $usernameFld.val();
        var passwordStr = $passwordFld.val();
        var password2Str = $password2Fld.val();

        if (passwordStr === password2Str) {
            var userObj = {
                username: usernameStr,
                password: passwordStr
            };

            userService.register(userObj).then(goodResponse, badResponse);

        }  else {
            alert("Your passwords must match!");
        }
    }

    function goodResponse(response) {
        window.location.href = "../profile/profile.template.client.html";
    }

    function badResponse(response) {
        alert("You cannot use that username, it is already taken!");
    }



})();