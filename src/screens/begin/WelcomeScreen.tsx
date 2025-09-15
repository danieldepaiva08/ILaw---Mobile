import React from "react";
import { View, TouchableOpacity, Image } from 'react-native';
import { useNavigation} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/StackNavigator";
import { styles } from "../../styles/WelcomeScreen.styles"
import AppText from '../../components/AppText';

type WelcomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;

function WelcomeScreen() {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();


  return (
    <View style={styles.container}>
      <AppText style={styles.title}> Bem vindo ao Ilaw</AppText>
      <AppText style={styles.subtitle}>Escolha como deseja continuar:</AppText>

      <View style={styles.optionsContainer}>

         {/* Advogado*/} 
        <TouchableOpacity
        style={styles.optionButton}
        onPress={() => navigation.navigate('LoginLawyer')}
        >
          <Image
          source={require('../../assets/lawyericon.png')}
          style={styles.icon}
          resizeMode="contain"          /> 
          <AppText style={styles.optionText} numberOfLines={1} ellipsizeMode="tail">Advogado</AppText> 
        </TouchableOpacity>  

        {/* CLiente*/} 
        <TouchableOpacity 
        style={styles.optionButton}
        onPress={() => navigation.navigate('LoginClient')}
        >
          <Image
          source={require('../../assets/clienticon.png')}
          style={styles.icon}
          resizeMode='contain'
          />
          <AppText style={styles.optionText}>Cliente</AppText>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default WelcomeScreen;