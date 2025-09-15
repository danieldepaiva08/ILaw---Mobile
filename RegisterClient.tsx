// src/screens/register/RegisterClient.tsx
import React, { useState } from "react";
import { View, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/StackNavigator";
import { ArrowLeft } from "phosphor-react-native";
import AppText from "../../components/AppText";
import FloatingLabelInput from "../../components/FloatingLabelInput";
import { registerClient } from "../../firebase/firebaseConfig";

type NavProp = NativeStackNavigationProp<RootStackParamList, "RegisterClient">;

export default function RegisterClient() {
  const navigation = useNavigation<NavProp>();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");
  const [city, setCity] = useState("");

  const handleRegister = async () => {
    if (!name || !email || !password || !telephone || !city) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }
    try {
      await registerClient(email, password, name, telephone, city);
      Alert.alert("Sucesso", "Cadastro realizado!");
      navigation.navigate("TabClient"); // navega para home cliente
    } catch (error: any) {
      console.error("Erro ao registrar cliente:", error);
      Alert.alert("Erro", error.message || "Não foi possível cadastrar.");
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ArrowLeft size={24} color="#012060" />
      </TouchableOpacity>

      <AppText style={{ fontSize: 20, marginVertical: 10 }}>Registro de Cliente</AppText>

      <FloatingLabelInput label="Nome" value={name} onChangeText={setName} />
      <FloatingLabelInput label="E-mail" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <FloatingLabelInput label="Senha" value={password} onChangeText={setPassword} secureTextEntry />
      <FloatingLabelInput label="Telefone" value={telephone} onChangeText={setTelephone} />
      <FloatingLabelInput label="Cidade" value={city} onChangeText={setCity} />

      <TouchableOpacity style={{ backgroundColor: "#012060", padding: 15, marginTop: 20 }} onPress={handleRegister}>
        <AppText style={{ color: "#fff", textAlign: "center" }}>Cadastrar</AppText>
      </TouchableOpacity>
    </View>
  );
}
