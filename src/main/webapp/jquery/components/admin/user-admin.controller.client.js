(function() {
    var $usernameFld, $passwordFld;
    var $removeBtn, $editBtn, $createBtn, $searchBtn;
    var $firstNameFld, $lastNameFld, $roleFld;
    var $userRowTemplate, $tbody;
    var userService = new UserServiceClient();
    main();

    function main() {
        console.log("enterred main");
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

        $tbody = $("#wbdv-tbody");

        $editBtn.click(updateUser);
        $createBtn.click(createUser);
        $removeBtn.click(deleteUser);
        $searchBtn.click(findUserById);

        console.log("main end");
        //findAllUsers();
    }
    function createUser() {
        console.log("createUser");
        var usernameStr = $usernameFld.val();
        var passwordStr = $passwordFld.val();
        var firstNameStr = $firstNameFld.val();
        var lastNameStr = $lastNameFld.val();
        var roleStr = $roleFld.val();
        console.log ($("#roleFld").val());
        console.log($roleFld);
        console.log(roleStr);
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
