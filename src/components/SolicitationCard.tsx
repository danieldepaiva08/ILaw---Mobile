import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function SolicitationCard({data }: any) {
    return(
        <View style={styles.card}>
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.specialty}>{data.specialty}</Text>
                <Text style={styles.date}>Data: {data.date}</Text>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.acceptBtn}>
                    <Text style={styles.acceptText}>Aceitar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rejectBtn}>
                    <Text style={styles.rejectText}>Recusar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 12,
        padding: 14,
        marginBottom: 12,
        shadowOpacity: 0.05,
        shadowRadius: 4,
        shadowOffset: {width: 0, height: 2},
        elevation: 2,
        backgroundColor: '#fff',
    },
    infoContainer: {
        marginBottom: 10,
    },
    name: {
        fontWeight: '700',
        fontSize: 16,
        color: '#000'
    },
    specialty: {
        fontSize: 14,
        color: '#555',
        marginTop: 2,
    },
    date: {
        fontSize: 13,
        color: '#555',
        marginTop: 2,
    },
    buttons: {
        flexDirection: 'row',
        gap: 8,
    },
    acceptBtn: {
        backgroundColor: '#004AAD',
        paddingVertical: 8,
        borderRadius: 8,
        alignItems: 'center',
        flex: 1,
        
    },
    rejectBtn: {
        backgroundColor: '#F0F0F0',
        flex: 1,
        paddingVertical: 8,
        borderRadius: 8,
       alignItems: 'center',
    },
    acceptText: {
        color: '#fff',
        fontWeight: '600',
    },
    rejectText: {
        color: '#555',
        fontWeight: '600',
    },
});