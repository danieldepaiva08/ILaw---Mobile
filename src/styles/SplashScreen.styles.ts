
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 50,
    },
    logoWrapper: {
      width: 140,
      height: 140,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
    },
    logo: {
      width: 170,
      height: 170,
      tintColor: '#ffffff'
    },
    textContainer: {
      alignItems: 'center',
    },
    appName: {
      color: '#ffffff',
      fontSize: 28,
      fontWeight: 'bold',
      letterSpacing: 3,
      marginBottom: 8,
    },
    tagline: {
      color: 'rgba(255, 255, 255, 0.8)',
      fontSize: 14,
      fontWeight: '300',
      letterSpacing: 1,
    },
  },
);
