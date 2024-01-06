import UserData from '../data/users.json';

export default class AuthService {

    static login(username, password) {
        return  UserData.find((user) => user.username === username && user.password === password);
    }
}