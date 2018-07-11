(function() {
    var $usernameFld, $passwordFld;
    var $firstNameFld, $lastNameFld, $emailFld, $dateOfBirthFld, $phoneFld, $roleFld;
    var $removeBtn, $editBtn, $createBtn, $searchBtn, $updateButton;

    var $userRowTemplate, $tbody, $inputArea;
    var userService = new UserServiceClient();
    main();

    function main() {
        $usernameFld = $('#usernameFld');
        $passwordFld = $('#passwordFld');
        $firstNameFld = $('#firstNameFld');
        $lastNameFld = $('#lastNameFld');
        $emailFld = $('#emailFld');
        $dateOfBirthFld = $('#dateOfBirthFld');
        $phoneFld = $('#phoneFld');
        $roleFld = $("#roleFld");

        $removeBtn = $('#wbdv-remove');
        $editBtn = $('#wbdv-edit');
        $createBtn = $('#wbdv-create');
        $searchBtn = $('#wbdv-search');
        $updateButton = $('#wbdv-update');

        $userRowTemplate = $('#wbdv-template');
        $inputArea = $('.wbdv-input-section');
        $tbody = $(".wbdv-tbody");

        $editBtn.click(selectUser);
        $createBtn.click(createUser);
        $removeBtn.click(deleteUser);
        $updateButton.click(updateUser);
        $searchBtn.click(findUserById);


        console.log($removeBtn);
        console.log("___");

        findAllUsers();
    }
    function createUser() {
        console.log("createUser");
        var usernameStr = $usernameFld.val();
        var passwordStr = $passwordFld.val();
        var firstNameStr = $firstNameFld.val();
        var lastNameStr = $lastNameFld.val();
        var emailStr = $emailFld.val();
        var dateOfBirthStr = $dateOfBirthFld.val();
        var phoneStr = $phoneFld.val();
        var roleStr = $roleFld.val();
        var userObj = {
            username: usernameStr,
            password: passwordStr,
            firstName: firstNameStr,
            lastName: lastNameStr,
            role: roleStr,
            phone: phoneStr,
            dateOfBirth: dateOfBirthStr,
            email: emailStr
        };


        userService.createUser(userObj).then(findAllUsers);

    }
    function findAllUsers() {
        userService.findAllUsers().then(renderUsers);
    }
    function findUserById(id) {
        return userService.findUserById(id);
    }
    function deleteUser(event) {
        var deleteBtn = $(event.currentTarget);
        var userId = deleteBtn
            .parent()
            .parent()
            .parent()
            .attr('id');

        userService
            .deleteUser(userId)
            .then(findAllUsers);
    }
    function selectUser(event) {
        var deleteBtn = $(event.currentTarget);
        var userId = deleteBtn
            .parent()
            .parent()
            .parent()
            .attr('id');

        var upUser = userService.findUserById(userId).then(copyUserInfoHandler)
        copyUserInfoHandler(upUser, userId);
    }

    function updateUser(event) {
        var updateBtn = $(event.currentTarget);
        var userObj = {
            username: $usernameFld.val(),
            password: $passwordFld.val(),
            firstName: $firstNameFld.val(),
            lastName: $lastNameFld.val(),
            role:  $roleFld.val(),
            email: $emailFld.val(),
            dateOfBirth: $dateOfBirthFld.val(),
            phone: $phoneFld.val()
        };
        var userId = updateBtn.parent().parent().parent().attr('id');
        userService.updateUser(userId, userObj).then(findAllUsers);
    }

    function copyUserInfoHandler(user, userId) {
        console.log(user.username);
        $usernameFld.val(user.username);
        $firstNameFld.val(user.firstName);
        $lastNameFld.val(user.lastName);
        $emailFld.val(user.email);
        $dateOfBirthFld.val(user.dateOfBirth);
        $phoneFld.val(user.phone);
        $roleFld.val(user.role);
        console.log($roleFld.val());
        $inputArea.attr('id', userId);
        // $firstNameFld.html(user.firstName);
        // $lastNameFld.html(user.lastName);
        // $emailFld.html(user.email);
        // $roleFld.html(user.role);
        // $usernameFld.parent.attr('id', userId);
    }


    function renderUsers(users) {
        $tbody.empty();
        for(var i=0; i<users.length; i++) {
            var cUser = users[i];
            var clone = $userRowTemplate.clone();

            clone.attr('id', cUser.id);

            clone.find('.wbdv-remove').click(deleteUser);
            clone.find('.wbdv-edit').click(selectUser);

            clone.find('.wbdv-username')
                .html(cUser.username);
            clone.find('.wbdv-password')
                .html("&nbsp");
            clone.find('.wbdv-first-name')
                .html(cUser.firstName);
            clone.find('.wbdv-last-name')
                .html(cUser.lastName);
            clone.find('.wbdv-email')
                .html(cUser.email);
            clone.find('.wbdv-dateOfBirth')
                .html(cUser.dateOfBirth.toString());
            clone.find('.wbdv-phone')
                .html(cUser.phone);
            clone.find('.wbdv-role')
                .html(cUser.role);

            $tbody.append(clone);
        }

    }
})();
