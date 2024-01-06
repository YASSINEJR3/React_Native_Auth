import UserData from '../data/users.json';

export default class AuthService {

    static login(username, password) {
        const user = UserData.find((user) => user.username === username && user.password === password);
        return user ? true : false;
    }
}