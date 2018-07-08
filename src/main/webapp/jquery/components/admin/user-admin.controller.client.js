(function() {
    var $usernameFld, $passwordFld;
    var $removeBtn, $editBtn, $createBtn, $searchBtn;
    var $firstNameFld, $lastNameFld;
    var $userRowTemplate, $tbody;
    var userService = new AdminUserServiceClient();
    $(main);

    function main() {
        $usernameFld = $('#usernameFld');
        $passwordFld = $('#passwordFld');
        $firstNameFld = $('#firstNameFld');
        $lastNameFld = $('#lastNameFld');

        $removeBtn = $('wbdv-remove')
        $editBtn = $('wbdv-edit')
        $createBtn = $('wbdv-create')
        $searchBtn = $('wbdv-search')

    }
    function createUser() {
        var usernameStr = $usernameFld.val();
        var passwordStr = $passwordFld.val();
        var firstNameStr = $firstNameFld.val();
        var lastNameStr = $lastNameFld.val();

        var userObj = {
            username: usernameStr,
            password: passwordStr,
            firstName: firstNameStr,
            lastName: lastNameStr
        };

        userService.createUser(userObj).then(findAllUsers);

    }
    function findAllUsers() {
        userService.findAllUsers().then(renderUsers);
    }
    function findUserById() {

    }
    function deleteUser() {

    }
    function selectUser() {

    }
    function updateUser() {

    }
    function renderUser(user) {

    }
    function renderUsers(users) {

    }
})();
