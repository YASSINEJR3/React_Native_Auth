import React, { Component } from 'react';
import { adminHomeStyles as styles } from '../styles';
import { Button, View, Text } from 'react-native';


export default class AdminHomeScreen extends Component {

    render() {
        const { route } = this.props;
        const { user } = route.params;

        return (
            <View style={styles.container}>
                <Text style={styles.welcomeText}>Welcome Admin : {user.email}!</Text>
                <Button title="Logout" onPress={() => this.props.navigation.navigate('Login')} />
            </View>
        );

    }
}