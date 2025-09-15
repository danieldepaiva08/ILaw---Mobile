import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ReviewCard({ data }: any) {
    return (
        <View style={styles.card}>
            <Text style={styles.name}>{data.name}</Text>
            <Text>{data.text}</Text>
            <View style={styles.footer}>
                <View style={styles.stars}>
                    {[...Array(data.stars)].map((_, i) => (
                        <Ionicons key={i} name="star" size={16} color="#FFD700" />
                    ))}
                </View>
                <Text style={styles.date}>{data.date}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        padding: 12,
        marginBottom: 10,
    },
    name: {
        fontWeight: '600',
        marginBottom: 4,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 6,
    },
    stars: {
        flexDirection: 'row',
    },
    date: {
        color: 'gray',
        fontSize: 12,
    },
});