import React, { useState } from "react";
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/StackNavigator";
import { ArrowLeft, Camera } from "phosphor-react-native";
import {styles} from '../../styles/RegisterLawyerScreen.styles';
import AppText from "../../components/AppText";
import FLoatingLabelInput from "../../components/FloatingLabelInput";

type RegisterLawyerScrenNavigationprop = NativeStackNavigationProp<RootStackParamList, 'RegisterLawyer'>;

export default function RegisterLawyerScreen() {
    const navigation = useNavigation<RegisterLawyerScrenNavigationprop>();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        if (!name || !email || !password) {
            alert('Preencha todos os campos!');
        }
        else {
            navigation.navigate('RegisterTwoLawyer');
        }

        console.log('Dados Enviados', {name, email, password});

    }


    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <ArrowLeft size={24} color="#012060" />
            </TouchableOpacity>

            <AppText style={styles.title}>Advogado</AppText>
            <AppText style={styles.subtitle}>Crie sua conta.</AppText>


            <View style={styles.avatarContainer}>
                <TouchableOpacity style={styles.avatarCircle}>
                    <Camera size={32} color="#001F54" />
                </TouchableOpacity>
            </View>

            <FLoatingLabelInput label="Nome" value={name} onChangeText={setName}/>
            <FLoatingLabelInput label="E-mail" value={email} onChangeText={setEmail} keyboardType="email-address"/>
            <FLoatingLabelInput label="Senha" value={password} onChangeText={setPassword} secureTextEntry />
            
            <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
                <AppText style={styles.loginButtonText}>Enviar</AppText>
            </TouchableOpacity>
            
            </View>
    );
};