(function () {

    var $usernameFld, $firstNameFld, $lastNameFld, $phoneFld, $emailFld, $roleFld, $dateOfBirthFld,
        $updateBtn, $logoutBtn;
    var currentUser = null;
    var userService = new UserServiceClient();

    function init() {

        $usernameFld = $("#usernameFld");
        $firstNameFld = $("#firstNameFld");
        $lastNameFld = $("#lastNameFld");
        $phoneFld = $("#phoneFld");
        $emailFld = $("#emailFld");
        $roleFld = $("#roleFld");
        $dateOfBirthFld = $("#dateOfBirthFld");

        $updateBtn = $("#updateBtn");
        $logoutBtn = $("#logoutBtn");
        $updateBtn.click(updateUser);
        $logoutBtn.click(logout);
        profile()
            .then(renderUser);
    }
    init();

    function updateUser() {
        var user = {
            username: $usernameFld.val(),
            password: "****",
            firstName: $firstNameFld.val(),
            lastName: $lastNameFld.val(),
            phone: $phoneFld.val(),
            email: $emailFld.val(),
            role: $roleFld.val(),
            dateOfBirth: $dateOfBirthFld.val().toString(),
        };

        console.log(user.firstName);
        userService.updateProfile(user).then(renderUser(currentUser));
    }

    function renderUser(user) {
        currentUser = user;
        currentUser.id = user.id;
        $usernameFld.val(user.username);
        $firstNameFld.val(user.firstName);
        $lastNameFld.val(user.lastName);
        $phoneFld.val(user.phone);
        $emailFld.val(user.email);
        $roleFld.val(user.role);
        $dateOfBirthFld.val(user.dateOfBirth);
    }

    function profile() {
        return userService.profile().then(goodResponse, badResponse);
    }
    function goodResponse(response) {
        return response;
    }

    function badResponse(response) {
        var userObj = {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            role: "",
            dateOfBirth: ""
        };
        return userObj;
    }

    function logout() {
        userService.logout().then(window.location.reload());
    }

})();