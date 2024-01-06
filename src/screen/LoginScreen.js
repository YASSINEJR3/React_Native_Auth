import React, { Component } from 'react';
import AuthService from '../service/AuthService';
import { loginStyles as styles } from '../styles';
import { View, Text, TextInput, Button, Alert } from 'react-native';

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

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.label}>Login</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                    secureTextEntry
                />
                <Button
                    style={styles.button}
                    title="Login"
                    onPress={this.handleLogin}
                />
            </View>
        );
    }

}

