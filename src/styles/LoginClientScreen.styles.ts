import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        padding: 24,
        justifyContent: 'center',
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#012060'
    },
    subtitle: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 40,
        color: '#888',
    },
    input: {
        height: 45,
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 6,
        marginBottom: 20,
        paddingHorizontal: 12,
    },
    loginButton: {
        backgroundColor: '#012060',
        paddingVertical: 12,
        borderRadius: 24,
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 16,
    },
    loginButtonText: {
        color: "#fff",
        fontWeight: 'bold',
    },
    registerText: {
        textAlign: 'center',
        color: '#444',
    }
})