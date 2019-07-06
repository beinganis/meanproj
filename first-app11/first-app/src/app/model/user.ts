

export class User{
  

    constructor(name = '', lastname = '', email = '', password = '',userStatus=true) {
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.userStatus = userStatus;
    }

    name: string;
    lastname: string;
    email: string;
    password: string;
    userStatus:boolean
}
