(function() {
    var $usernameFld, $passwordFld;
    var $loginBtn;

    var userService = new UserServiceClient();
    main();

    function main() {
        $usernameFld = $('#username');
        $passwordFld = $('#password');
        $loginBtn = $("#loginBtn");

        $loginBtn.click(loginHandler);
    }

    function loginHandler() {
        var usernameStr = $usernameFld.val();
        var passwordStr = $passwordFld.val();

        var userObj = {
            username: usernameStr,
            password: passwordStr
        };

        userService.login(userObj).then(navigateToProfile, badUser);
    }

    function navigateToProfile(response) {
        window.location.href = "../profile/profile.template.client.html"
    }

    function badUser(response) {
        alert("Incorrect Username or Password");
    }
})();