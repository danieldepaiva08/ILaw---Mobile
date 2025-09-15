// src/screens/register/RegisterLawyer.tsx
import React, { useState } from "react";
import { View, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/StackNavigator";
import { ArrowLeft } from "phosphor-react-native";
import AppText from "../../components/AppText";
import FloatingLabelInput from "../../components/FloatingLabelInput";
import { styles } from "../../styles/RegisterLawyerScreen.styles";

type NavProp = NativeStackNavigationProp<RootStackParamList, "RegisterLawyer">;

export default function RegisterLawyer() {
  const navigation = useNavigation<NavProp>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNext = () => {
    if (!name || !email || !password) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }
    navigation.navigate("RegisterTwoLawyer", { name, email, password });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <ArrowLeft size={24} color="#012060" />
      </TouchableOpacity>

      <AppText style={styles.title}>Advogado</AppText>
      <AppText style={styles.subtitle}>Crie sua conta</AppText>

      <FloatingLabelInput label="Nome" value={name} onChangeText={setName} />
      <FloatingLabelInput label="E-mail" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <FloatingLabelInput label="Senha" value={password} onChangeText={setPassword} secureTextEntry />

      <TouchableOpacity style={styles.loginButton} onPress={handleNext}>
        <AppText style={styles.loginButtonText}>Próximo</AppText>
      </TouchableOpacity>
    </View>
  );
}
