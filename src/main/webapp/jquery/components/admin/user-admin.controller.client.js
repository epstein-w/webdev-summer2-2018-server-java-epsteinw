(function() {
    var $usernameFld, $passwordFld;
    var $removeBtn, $editBtn, $createBtn, $searchBtn;
    var $firstNameFld, $lastNameFld, $roleFld;
    var $userRowTemplate, $tbody;
    var userService = new UserServiceClient();
    main();

    function main() {
        $usernameFld = $('#usernameFld');
        $passwordFld = $('#passwordFld');
        $firstNameFld = $('#firstNameFld');
        $lastNameFld = $('#lastNameFld');
        $roleFld = $("#roleFld");
        $removeBtn = $('#wbdv-remove');
        $editBtn = $('#wbdv-edit');
        $createBtn = $('#wbdv-create');
        $searchBtn = $('#wbdv-search');

        $userRowTemplate = $('#wbdv-template');

        $tbody = $(".wbdv-tbody");

        $editBtn.click(updateUser);
        $createBtn.click(createUser);
        $removeBtn.click(deleteUser);
        $searchBtn.click(findUserById);

        findAllUsers();
    }
    function createUser() {
        console.log("createUser");
        var usernameStr = $usernameFld.val();
        var passwordStr = $passwordFld.val();
        var firstNameStr = $firstNameFld.val();
        var lastNameStr = $lastNameFld.val();
        var roleStr = $roleFld.val();
        var userObj = {
            username: usernameStr,
            password: passwordStr,
            firstName: firstNameStr,
            lastName: lastNameStr,
            role: roleStr,
            phone: null,
            dateOfBirth: null,
            email: null
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
        $tbody.empty();
        for(var i=0; i<users.length; i++) {
            var cUser = users[i];
            var clone = $userRowTemplate.clone();

            clone.attr('id', cUser.id);

            clone.find('.delete').click(deleteUser);
            clone.find('.edit').click(updateUser);

            clone.find('.wbdv-username')
                .html(cUser.username);
            clone.find('.wbdv-password')
                .html("&nbsp");
            clone.find('.wbdv-first-name')
                .html(cUser.firstName);
            clone.find('.wbdv-last-name')
                .html(cUser.lastName);
            clone.find('.wbdv-role')
                .html(cUser.role);

            $tbody.append(clone);
        }

    }
})();
