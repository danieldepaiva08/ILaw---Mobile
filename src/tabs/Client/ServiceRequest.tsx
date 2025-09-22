import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {UsersThree, Laptop} from "phosphor-react-native";
import { RootStackParamList } from "../../navigation/StackNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type ServiceRequestScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ServiceRequest'>;

export default function ServiceRequestScreen(){
const navigation = useNavigation<ServiceRequestScreenNavigationProp>();
return(
    <View style={styles.container}>
        <Text style={styles.title}>Serviço solicitado</Text>
        <Text style={styles.subtitle}>
            Como será realizado a primeira reunião?
        </Text>


        <View style={styles.optionsContainer}>
            <View style={styles.cardWrapper}>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("DateRequest")}>
                <UsersThree size={60} color="#00349E" weight="fill" style={styles.icon}/>
            </TouchableOpacity>
            <Text style={styles.cardText}>Presencial</Text>
            </View>


            <View style={styles.cardWrapper}>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("DateRequest")}>
                <Laptop size={48} color="#00349E" weight="fill" style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.cardText}>Online</Text>
        </View>
        </View>
    </View>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00349E",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 100,
    },
    title: {
        fontSize: 35,
        color: "#fff",
        textAlign: "center",
        fontFamily: "Poppins_700Bold",
        marginBottom: 8,
       
    },
    subtitle: {
        fontSize: 19,
        color: "#fff",
        textAlign: "center",
        fontFamily: "Poppins_600SemiBold",
        marginBottom: 50,
    },
    optionsContainer: {
        marginTop: 70,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
    },
    cardWrapper: {
        alignItems: "center",
        marginHorizontal: 10,
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 16,
        width: 130,
        height: 130,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
        elevation: 4,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: {width: 0, height: 2},
    },
    cardText: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: "600",
         fontFamily: "Poppins_400Regular",
        color: "#fff",
    },
    icon: {
         elevation: 8,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: {width: 0, height: 2},
    }
})