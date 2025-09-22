import React from "react";
import {View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import SolicitationCard from "../../components/SolicitationCard";
import ReviewCard from "../../components/ReviewCard";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/StackNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useAuth } from "../../Context/AuthContext";


type HomePrincipalNavigationProp= NativeStackNavigationProp<RootStackParamList, 'HomePrincipal'>;

export default function HomePrincipal() {
    const navigation = useNavigation<HomePrincipalNavigationProp>();
    const {user} = useAuth();


    const solicitations = [
        {id: 1, name: 'Barack Obama', specialty: 'Direito de Familia', date: '01/08/2025'},
        {id: 2, name: 'Ronaldo', specialty: 'Direito de Familia', date: '01/08/2025'},

    ];

    const reviews = [
        {id: 1, name: 'Ronaldo Fenomeno', text: 'Gostei muito! Com certeza vou indicar aos mes amigos!', date: '4 ago 2025', stars: 5},
        {id: 2, name: 'Ronaldo Fenomeno', text: 'Gostei muito! Com certeza vou indicar aos mes amigos!', date: '4 ago 2025', stars: 5},
    ];



    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{user?.name ?? "Usuário"}</Text>
                </View>
                <View style={styles.searchWrapper}>
                <View style={styles.searchContainer}>
                    <Ionicons name="search-outline" size={20} color="#004AAD" />
                    <TextInput placeholder="Buscar no aplicativo"
                                placeholderTextColor="#7D7D7D"
                                style={styles.search}
                                />
                    </View>
                    </View>
           <View style={styles.content}>
            <Text style={styles.sectionTitle}>Solicitações Pendentes</Text>
            {solicitations.map(item => (
                <SolicitationCard key={item.id} data={item} />
            ))}
            

            <TouchableOpacity>
                <Text style={styles.moreText}>Ver mais...</Text>
            </TouchableOpacity>

            <Text style={styles.sectionTitle}>Avaliações Recentes</Text>
            {reviews.map(item => (
                <ReviewCard key={item.id} data={item} />
            ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#004AAD',
        paddingHorizontal: 50,
        paddingTop: 50,
        paddingBottom: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    searchWrapper: {
        paddingHorizontal: 15,
        marginTop: -20,
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 15,
        fontFamily: 'Montserrat_700Bold',
        color: '#fff',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical:5,
        borderWidth: 2,
        borderColor: '#004AAD',

    },
    search: {
        flex: 1,
        marginLeft: 8,
        fontSize: 14,
        color: '#333',
        marginTop: 3,
        fontFamily: 'Montserrat_400Regular'
    },
    content: {
        paddingHorizontal: 16,
        paddingTop: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 12,
        fontFamily: 'Montserrat_700Bold'
    },
    moreText: {
        color: '#B0B0B0',
        textAlign: 'center',
        marginVertical: 10,
        fontFamily: 'Montserrat_400Regular'
    },
});