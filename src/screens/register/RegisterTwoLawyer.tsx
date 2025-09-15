// src/screens/register/RegisterTwoLawyer.tsx
import React, { useState } from "react";
import { View, TouchableOpacity, Alert } from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/StackNavigator";
import { ArrowLeft } from "phosphor-react-native";
import AppText from "../../components/AppText";
import FloatingLabelInput from "../../components/FloatingLabelInput";
import { styles } from "../../styles/RegisterLawyerScreen.styles";
import { registerLawyer } from "../../firebase/firebaseConfig";

type NavProp = NativeStackNavigationProp<RootStackParamList, "RegisterTwoLawyer">;
type RouteProps = RouteProp<RootStackParamList, "RegisterTwoLawyer">;

export default function RegisterTwoLawyer() {
  const navigation = useNavigation<NavProp>();
  const route = useRoute<RouteProps>();
  const { name, email, password } = route.params;

  const [oab, setOab] = useState("");
  const [telephone, setTelephone] = useState("");
  const [address, setAddress] = useState("");
  const [specialty, setSpecialty] = useState("");

  const handleRegister = async () => {
    if (!oab || !telephone || !address || !specialty) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }
    try {
      await registerLawyer(email, password, name, oab, telephone, address, specialty);
      Alert.alert("Sucesso", "Cadastro realizado!");
      navigation.navigate("Tabs"); // navega para home advogado
    } catch (error: any) {
      console.error("Erro ao registrar advogado:", error);
      Alert.alert("Erro", error.message || "Não foi possível cadastrar.");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ArrowLeft size={24} color="#012060" />
      </TouchableOpacity>

      <AppText style={styles.title}>Advogado</AppText>
      <AppText style={styles.subtitle}>Conclua seu cadastro</AppText>

      <FloatingLabelInput label="OAB" value={oab} onChangeText={setOab} />
      <FloatingLabelInput label="Telefone" value={telephone} onChangeText={setTelephone} />
      <FloatingLabelInput label="Endereço" value={address} onChangeText={setAddress} />
      <FloatingLabelInput label="Especialidade" value={specialty} onChangeText={setSpecialty} />

      <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
        <AppText style={styles.loginButtonText}>Concluir</AppText>
      </TouchableOpacity>
    </View>
  );
}
