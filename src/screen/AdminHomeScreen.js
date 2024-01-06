import React, { Component } from 'react';
import { adminHomeStyles as styles } from '../styles';
import { View } from 'react-native';


class AdminHomeScreen extends Component {
    render() {
        const { route } = this.props;

        return (
            <View style={styles.container}>
                <Text>Admin Home Screen</Text>
            </View>
        );

    }
}