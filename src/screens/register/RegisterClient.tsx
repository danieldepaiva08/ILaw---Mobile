import React, { useState } from "react";
import { View, TouchableOpacity, Alert } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../styles/RegisterClient.styles";
import { ArrowLeft } from "phosphor-react-native";
import AppText from "../../components/AppText";
import { RootStackParamList } from "../../navigation/StackNavigator";
import FLoatingLabelInput from "../../components/FloatingLabelInput";
import {
  isNameValid,
  isEmailValid,
  isPasswordValid,
  canRegister,
} from "../../Functions/ValidationUtils";

// Firebase (usando função helper corrigida)
import { registerClient } from "../../firebase/firebaseConfig";

type RegisterClientNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "RegisterClient"
>;

export default function RegisterClient() {
  const navigation = useNavigation<RegisterClientNavigationProp>();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (
      !isNameValid(name) ||
      !isEmailValid(email) ||
      !isPasswordValid(password)
    ) {
      Alert.alert("Erro", "Preencha os campos corretamente.");
      return;
    }

    setLoading(true);

    try {
      // chama função do firebaseConfig
      await registerClient(email, password, name, telephone, city);

      Alert.alert("Sucesso", "Conta criada com sucesso!");
      navigation.navigate("LoginClient");
    } catch (error: any) {
      console.error("Erro ao registrar: ", error);
      Alert.alert(
        "Erro",
        error.message || "Não foi possível criar a conta"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <ArrowLeft size={24} color="#012060" />
      </TouchableOpacity>

      <AppText style={styles.title}>Está em busca de Advogados?</AppText>
      <AppText style={styles.subtitle}>Crie sua conta!</AppText>

      <FLoatingLabelInput label="Nome" value={name} onChangeText={setName} />
      <FLoatingLabelInput
        label="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <FLoatingLabelInput
        label="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <FLoatingLabelInput
        label="Telefone"
        value={telephone}
        onChangeText={setTelephone}
      />
      <FLoatingLabelInput
        label="Cidade"
        value={city}
        onChangeText={setCity}
      />

      <TouchableOpacity
        style={[
          styles.loginButton,
          {
            backgroundColor: canRegister(name, email, password)
              ? "#012060"
              : "#999",
          },
        ]}
        disabled={!canRegister(name, email, password)}
        onPress={handleRegister}
      >
        <AppText style={styles.loginButtonText}>
          {loading ? "Carregando..." : "Enviar"}
        </AppText>
      </TouchableOpacity>
    </View>
  );
}
