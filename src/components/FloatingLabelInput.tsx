import React from "react";
import { TextInput, View, Text, StyleSheet, TextInputProps } from "react-native";
import { useState } from "react";

interface FloatingLabelInputProps extends TextInputProps {
    label: string;
}

export default function FLoatingLabelInput({label, value, ...rest}: FloatingLabelInputProps) {
    const [isFocused, setIsFocused] = useState(false);

    const shouldFloatLabel = isFocused || !value;

    return (    
        <View style={styles.container}>
            <Text style={[styles.label, shouldFloatLabel && styles.labelFocused]}>
                {label}
            </Text>
            <TextInput
            style={styles.input}
            value={value}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...rest}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        paddingTop: 18,
    },
    label: {
        position: 'absolute',
        left: 10,
        top: 22,
        fontSize: 14,
        color: '#999',
        zIndex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 4,
    },
    labelFocused: {
        top: 4,
        fontSize: 12,
        color:'#001F54',
    },
    input: {
        height: 44,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        paddingHorizontal: 10,
        fontSize: 14,
    },
});