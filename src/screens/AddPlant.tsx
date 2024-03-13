import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import { FontAwesome5 } from '@expo/vector-icons'

export default function AddPlant() {
  return (
    <View style={styles.container}>
      <Header title={'Adicionar planta'} iconOption={<FontAwesome5 name="question-circle" size={20} color="#2F865A" />} />
      <Text>AddPlant</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
