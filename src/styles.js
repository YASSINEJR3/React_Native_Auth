import { Button, StyleSheet } from 'react-native';


const commonStyles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    welcomeText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    label: {
        width: 200,
        height: 44,
        padding: 10,
        margin: 10,
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
    button: {
        width: 200,
        height: 44,
        padding: 10,
        margin: 10,
    },
};


export const adminHomeStyles = StyleSheet.create({
    ...commonStyles,
});

export const userHomeStyles = StyleSheet.create({
    ...commonStyles,
});

export const loginStyles = StyleSheet.create({
    ...commonStyles,
});