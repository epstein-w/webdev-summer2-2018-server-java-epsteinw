(function() {
    var $usernameFld, $passwordFld;
    var $removeBtn, $editBtn, $createBtn, $searchBtn;
    var $firstNameFld, $lastNameFld;
    var $userRowTemplate, $tbody;
    var userService = new UserServiceClient();
    main();

    function main() {
        $usernameFld = $('#usernameFld');
        $passwordFld = $('#passwordFld');
        $firstNameFld = $('#firstNameFld');
        $lastNameFld = $('#lastNameFld');

        $removeBtn = $('wbdv-remove');
        $editBtn = $('wbdv-edit');
        $createBtn = $('wbdv-create');
        $searchBtn = $('wbdv-search');

        $userRowTemplate = $('#wbdv-template');

        $tbody = $("#wbdv-tbody");

        $editBtn.click(updateUser);
        $createBtn.click(createUser);
        $removeBtn.click(deleteUser);
        $searchBtn.click(findUserById);

        //findAllUsers();
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

        console.log("createUser");
        userService.createUser(userObj);
            //.then(findAllUsers);

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
        // $tbody.empty();
        // for(var i=0; i<users.length; i++) {
        //     var user = users[i];
        //     var clone = $userRowTemplate.clone();
        //
        //     clone.attr('id', user.id);
        //
        //     clone.find('.delete').click(deleteUser);
        //     clone.find('.edit').click(editUser);
        //
        //     clone.find('.username')
        //         .html(user.username);
        //     tbody.append(clone);
        // }
    }
})();
