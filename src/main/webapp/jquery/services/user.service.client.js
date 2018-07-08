function UserServiceClient() {
    this.path = window.location.href;
    console.log(this.path);
    this.url = this.path.substring(0, this.path.indexOf("/", 8))+ "/api/user";
    console.log(this.url);

    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.register = register;

    var self = this;
    function createUser(user, callback) {
        return fetch(self.url, {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        })
    }
    function findAllUsers(callback) {
        return fetch(self.url)
            .then(function (response) {
                return response.json();
            });
    }
    function findUserById(userId, callback) {
        return fetch(self.url + '/' + userId)
            .then(function(response){
                return response.json();
            });
    }
    function updateUser(userId, user, callback) {
        return fetch(self.url + "/" + userId, {
        method: 'put',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(function(response){
            if(response.bodyUsed) {
                return response.json();
            } else {
                return null;
            }
        });
    }
    function deleteUser(userId, callback) {
        return fetch(self.url + "/" + userId, {
            method: 'delete'
        })
    }
    function register(userObj) {
        var users = findAllUsers().then(console.log("completed"));

        console.log(users);
        for (var i = 0; i < users.length; i++) {
            var cUser = users[i];
            console.log(cUser.username + " | " + userObj.username);
            if (cUser.username === userObj.username) {

                console.log("copied username");
                return false;
            }
        }
        fetch(self.url, {
            method: "post",
            body: JSON.stringify(userObj),
            headers: {
                'content-type': 'application/json'
            }
         });
        return true;

    }
}
