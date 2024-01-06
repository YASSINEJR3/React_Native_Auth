import { StyleSheet } from 'react-native';


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
}


export const adminHomeStyles = StyleSheet.create({
    ...commonStyles,
});

export const userHomeStyles = StyleSheet.create({
    ...commonStyles,
});

export const loginStyles = StyleSheet.create({
    ...commonStyles,
});