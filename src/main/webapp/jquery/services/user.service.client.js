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
    this.login = login;
    var self = this;

    function createUser(user, callback) {
        return fetch(self.url, {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function(response){
            return response.json();
        });
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

    function register(userObj, callback) {

        return fetch(self.url, {
            method: "post",
            body: JSON.stringify(userObj),
            credentials: "include",
            headers: {
                'content-type': 'application/json'
            }
        }).then(function(response){
            return response.json();
        });
    }
    function login(userObj, callback) {
        return fetch(self.url + "/login", {
            method: "post",
            body: JSON.stringify(userObj),
            credentials: "include",
            headers: {
                'content-type': 'application/json'
            }
        }).then(function(response){
            return response.json();
        });;
    }

}
