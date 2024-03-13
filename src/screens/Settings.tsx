import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';

export default function Settings() {
  return (
    <View style={styles.container}>
      <Header title={'Preferências'} />
      <Text>Settings</Text>
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
