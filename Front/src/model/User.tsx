export default class User {
    firstname: string;
    password: string;
    phonenumber: string;
    lastname: string;
    address: string;


    constructor(
        firstname: string,
        password: string,
        phonenumber: string,
        lastname: string,
        address: string,
    ) {
        this.firstname = firstname;
        this.password = password;
        this.phonenumber  = phonenumber;
        this.lastname = lastname;
        this.address = address;
    }
}