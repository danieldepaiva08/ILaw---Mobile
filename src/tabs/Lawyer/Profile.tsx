import React from 'react';
import { useState } from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import ReviewCard from "../../components/ReviewCard";
import { ChatCircle, Users } from 'phosphor-react-native';

import {styles} from "../../styles/ProfileTab";

export default function ProfileScreen() {
  const [selectedTab, setSelectedTab] = useState<"avaliacoes" | "informacao">("avaliacoes");


  const reviews = [
     {id: 1, name: 'Ronaldo Fenomeno', text: 'Gostei muito! Com certeza vou indicar aos mes amigos!', date: '4 ago 2025', stars: 5},
      {id: 2, name: 'Ronaldo Fenomeno', text: 'Gostei muito! Com certeza vou indicar aos mes amigos!', date: '4 ago 2025', stars: 5},
      {id: 3, name: 'Ronaldo Fenomeno', text: 'Gostei muito! Com certeza vou indicar aos mes amigos!', date: '4 ago 2025', stars: 5},
  ];
  return (
    <View style={styles.container}>
      <View style={styles.content}>
      
      {/*Avatar e nome*/}
      <View style={styles.profile}>
        <View style={styles.avatar} />
        <View style={styles.ratingBadge}>
          <Text style={styles.ratingText}> 5,4</Text>
        </View>
        <Text style={styles.name}>Layslla Eduarda</Text>
        <Text style={styles.subtitle}>Advogada especialista em Direito do idoso</Text>
      </View>

      {/*Estatisticas */}
      <View style={styles.stats}>
        <View style={styles.statItem}>
          <ChatCircle size={24} color="#fff" />
          <Text style={styles.statNumber}>237</Text>
          <Text style={styles.statLabel}>Feedback</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.statItem}>
          <Users size={24} color="#fff" />
          <Text style={styles.statNumber}>333</Text>
          <Text style={styles.statLabel}>Clientes</Text>
        </View>
      </View>

      {/* Tabs*/}
      <View style={styles.tabs}>
        <TouchableOpacity style={[styles.tabButton, selectedTab === "avaliacoes" && styles.tabSelected]}
        onPress={() => setSelectedTab("avaliacoes")}
        >
          <Text style={[styles.tabText, selectedTab === "avaliacoes" && styles.tabTextSelected]}>
            Avaliações
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={[styles.tabButton, selectedTab === "informacao" && styles.tabSelected]}
        onPress={() => setSelectedTab("informacao")}
        >
          <Text style={[styles.tabText, selectedTab === "informacao" && styles.tabTextSelected]}>
            Informação
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, marginTop: 10}}>
        {selectedTab === "avaliacoes" ? (
          <FlatList
          data={reviews}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <ReviewCard data ={item} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 20}}
          />
        ) : (
          <Text style={styles.information}>Bla bla bla
          </Text>
        )}
      </View>
    </View>
    </View>
  );
}
