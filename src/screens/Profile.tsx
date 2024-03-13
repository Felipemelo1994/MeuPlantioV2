import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Header title={'Perfil'} />
      <Text>Profile</Text>
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
