import React, { useState } from "react";
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/StackNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ArrowLeft, Camera } from "phosphor-react-native";
import {styles} from '../../styles/RegisterLawyerScreen.styles';
import AppText from "../../components/AppText";
import FLoatingLabelInput from "../../components/FloatingLabelInput";



type RegisterTwoLawyerNavigationProp = NativeStackNavigationProp<RootStackParamList, 'RegisterTwoLawyer'>;

export default function RegisterTwoLawyer() {
    const navigation = useNavigation<RegisterTwoLawyerNavigationProp>();
    
    const [adress, setAdress] = useState('');
    const [telephone, setTelephone] = useState('');
    const [comercialTelephone, setComercialTelephone] = useState('');
    const [oab, setOab] = useState('');

    const handleRegister = () => {
        if (!adress || !telephone || !comercialTelephone || !oab ) {
            alert('Preencha todos os campos!');
        }
        else {
            navigation.navigate('Tabs')
        }
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <ArrowLeft size={24} color="#012060" />
            </TouchableOpacity>


            <AppText style={styles.title}>Advogado</AppText>
            <AppText style={styles.subtitle}>Conclua seu cadastro</AppText>

            <FLoatingLabelInput label="Endereço" value={adress} onChangeText={setAdress}></FLoatingLabelInput>
            <FLoatingLabelInput label="telefone" value={telephone} onChangeText={setTelephone}></FLoatingLabelInput>
            <FLoatingLabelInput label="Telefone comercial" value={comercialTelephone} onChangeText={setComercialTelephone}></FLoatingLabelInput>
            <FLoatingLabelInput label="OAB" value={oab} onChangeText={setOab}></FLoatingLabelInput>
        
            <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
                <AppText style={styles.loginButtonText}>Concluir</AppText>
            </TouchableOpacity>
        </View>
    );
}