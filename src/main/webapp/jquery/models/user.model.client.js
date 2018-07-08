function User(username, password, lastName, firstName) {
    this.username = username;
    this.password = password;
    this.lastName = lastName;
    this.firstName = firstName;
    this.phone = -1;
    this.role = "none";
    this.dateOfBirth = new Date("01/01/2000");

    this.setUsername = setUsername;
    this.getUsername = getUsername;
    this.setPassword = setPassword;
    this.getPassword = getPassword;
    this.setLastName = setLastName;
    this.getLastName = getLastName;
    this.getFirstName = getFirstName;
    this.setFirstName = setFirstName;
    this.getPhone = getPhone;
    this.setPhone = setPhone;
    this.getRole = getRole;
    this.setRole = setRole;
    this.getDateOfBirth = getDateOfBirth;
    this.setDateOfBirth = setDateOfBirth;

   function setUsername(username) {
       this.username = username;
   }
   
   function getUsername() {
       return this.username;
   }

    function setPassword(password) {
        this.password = password;
    }

    function getPassword() {
        return this.password;
    }

    function setLastName(lastName) {
        this.lastName = lastName;
    }

    function getLastName() {
        return this.lastName;
    }

    function setFirstName(firstName) {
        this.firstName = firstName;
    }

    function getFirstName() {
        return this.firstName;
    }

    function setPhone(phone) {
        this.phone = phone;
    }

    function getPhone() {
        return this.phone;
    }

    function setRole(role) {
        this.role = role;
    }

    function getRole() {
        return this.role;
    }

    function setDateOfBirth(dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    function getDateOfBirth() {
        return this.dateOfBirth;
    }
}