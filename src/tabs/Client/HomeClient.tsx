import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import { FunnelSimple, MagnifyingGlass, ChatCircle } from 'phosphor-react-native';
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../components/HomeStack';


type HomeClientNavigationProp = NativeStackNavigationProp<HomeStackParamList, "HomeClient">;


const lawyers = [
  { id: "1", name: "Ronaldo Pessoa", specialty: "Advogado da Mulher" },
  { id: "2", name: "Ronaldo Pessoa", specialty: "Advogado da Mulher" },
  { id: "3", name: "Ronaldo Pessoa", specialty: "Advogado da Mulher" },
  { id: "4", name: "Ronaldo Pessoa", specialty: "Advogado da Mulher" },
  { id: "5", name: "Ronaldo Pessoa", specialty: "Advogado da Mulher" },
  { id: "6", name: "Ronaldo Pessoa", specialty: "Advogado da Mulher" },
  { id: "7", name: "Ronaldo Pessoa", specialty: "Advogado da Mulher" },
];

export default function HomeClient() {
  const navigation = useNavigation<HomeClientNavigationProp>();
  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Encontre seu Advogado</Text>
      </View>

      {/* SEARCH */}
      <View style={styles.searchWrapper}>
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#004AAD" />
          <TextInput
            placeholder="Buscar um advogado"
            style={styles.searchInput}
            placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.filterButton}>
            <FunnelSimple size={22} weight="regular" color="#003087" />
          </TouchableOpacity>
        </View>
      </View>

      {/* LISTA DE ADVOGADOS */}
      <Text style={styles.subtitle}>Advogados disponíveis</Text>
      <FlatList
        data={lawyers}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png" }}
              style={styles.avatar}
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.specialty}>{item.specialty}</Text>
            </View>
            <TouchableOpacity style={styles.chatButton} onPress={() => navigation.navigate("ServiceRequest")}>
              <ChatCircle size={28} color="#003087" weight="regular" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    backgroundColor: "#00349E",
    paddingHorizontal: 30,
    paddingTop: 40,
    paddingBottom: 60,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  headerText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },
  searchWrapper: {
    paddingHorizontal: 15,
    marginTop: -23,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 50,
    borderWidth: 2,
    borderColor: "#00349E"
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    color: "#000",
  },
  filterButton: {
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 5,
    paddingHorizontal: 20,
    color: "#333",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    marginHorizontal: 10,
    marginVertical: 6,
    borderRadius: 10,
    padding: 25,
    elevation: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  specialty: {
    fontSize: 13,
    color: "#666",
  },
  chatButton: {
    padding: 5,
  },
});
