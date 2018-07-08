(function() {
    var $usernameFld, $passwordFld, $password2Fld;
    var $registerBtn ;
    var userService = new UserServiceClient();
    console.log("?");
    main();

    function main() {

        $usernameFld = $('#username');
        $passwordFld = $('#password');
        $password2Fld = $('#password2');
        $registerBtn = $('#registerBtn');
        $registerBtn.click(registerHandler);
    }


    function registerHandler() {
        console.log("register button clicked");
        var usernameStr = $usernameFld.val();
        var passwordStr = $passwordFld.val();
        var password2Str = $password2Fld.val();
        console.log("____");
        console.log(passwordStr);
        console.log(password2Str);
        if (passwordStr === password2Str) {
            var userObj = {
                username: usernameStr,
                password: passwordStr
            };

            if (!userService.register(userObj)) {
                "You cannot have the same username as someone else";
            }

        }  else {
            alert("Your passwords must match!");
        }
    }


})();