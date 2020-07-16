import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BoasVindas from './components/BoasVindas';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <BoasVindas texto="Boas Vindas!" />
      <BoasVindas texto="União Flasco" />
      <BoasVindas texto="Mano é sem KO" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000dff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
