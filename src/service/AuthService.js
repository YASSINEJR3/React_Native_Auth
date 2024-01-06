import UserData from '../data/users.json';

export default class AuthService {

    static login(email, password) {
        console.log(UserData.length);
        return  UserData.find((user) => user.email === email && user.password === password);
    }
}