import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

interface AppTextProps extends TextProps {
  children: React.ReactNode;
}

const AppText: React.FC<AppTextProps> = ({ children, style, ...rest }) => {
  return (
    <Text style={[styles.text, style]} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    color: '#000',
  },
});

export default AppText;