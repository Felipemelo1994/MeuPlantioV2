import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderHome from '../components/Header';

export default function Settings() {
  return (
    <View style={styles.container}>
      <HeaderHome title={'Preferências'} />
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
