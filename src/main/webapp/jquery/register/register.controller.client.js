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
l
            var response = userService.register(userObj);

            if (!(response.username === userObj.username)) {
                alert("You cannot have the same username as someone else");
            }

        }  else {
            alert("Your passwords must match!");
        }
    }


})();