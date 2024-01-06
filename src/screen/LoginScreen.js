import React, { Component } from 'react';
import AuthService from '../service/AuthService';



export default class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    handleLogin = () => {
        const { email, password } = this.state; 
        const user = AuthService.login(email, password);
        if (user) {
            Alert.alert('Success', `Successfully logged in, ${user.email}`);
        } else {
            Alert.alert('Error', 'Invalid credentials');
        }
    }

}

