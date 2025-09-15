import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../styles/LoginClientScreen.styles";
import AppText from "../../components/AppText";
import { ArrowLeft } from "phosphor-react-native";
import { RootStackParamList } from "../../navigation/StackNavigator";
import {
  isEmailValid,
  isPasswordValid,
  canLogin,
} from "../../Functions/ValidationUtils";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Firebase
import { loginUser } from "../../firebase/firebaseConfig";

type LoginClientScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "LoginClient"
>;

export default function LoginClientScreen() {
  const navigation = useNavigation<LoginClientScreenNavigationProp>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!isEmailValid(email) || !isPasswordValid(password)) {
      Alert.alert("Erro", "Preencha os campos corretamente.");
      return;
    }

    setLoading(true);
    try {
      const userData = await loginUser(email, password);

      if (!userData.role) {
        Alert.alert("Erro", "Conta sem tipo definido.");
        return;
      }

      if (userData.role !== "client") {
        Alert.alert("Erro", "Essa conta não é de cliente.");
        return;
      }

      Alert.alert("Sucesso", "Login realizado com sucesso!");
      navigation.navigate("TabClient");
    } catch (error: any) {
      console.error("Erro no login:", error);

      let errorMessage = "Não foi possível fazer login.";
      if (error.code === "auth/user-not-found") {
        errorMessage = "Usuário não encontrado.";
      } else if (error.code === "auth/wrong-password") {
        errorMessage = "Senha incorreta.";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "E-mail inválido.";
      }

      Alert.alert("Erro", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <ArrowLeft size={24} color="#012060" />
      </TouchableOpacity>

      <AppText style={styles.title}>Cliente</AppText>
      <AppText style={styles.subtitle}>Efetue seu login</AppText>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        placeholderTextColor="#999"
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={[
          styles.loginButton,
          { backgroundColor: canLogin(email, password) ? "#012060" : "#999" },
        ]}
        disabled={!canLogin(email, password)}
        onPress={handleLogin}
      >
        <AppText style={styles.loginButtonText}>
          {loading ? "Entrando..." : "Acessar"}
        </AppText>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("RegisterClient")}
      >
        <AppText style={styles.registerText}>
          Não possui conta? Cadastre-se
        </AppText>
      </TouchableOpacity>
    </View>
  );
}
