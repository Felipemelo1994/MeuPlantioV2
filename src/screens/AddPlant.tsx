import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AddPlant() {
  return (
    <View style={styles.container}>
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
