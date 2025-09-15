import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AgendaClient() {
  return (
    <View style={styles.container}>
      <Text>Agenda do Cliente</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
