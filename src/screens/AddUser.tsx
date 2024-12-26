import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import { FontAwesome5 } from '@expo/vector-icons'
import { Box } from '@gluestack-ui/themed';

export default function AddUser() {
  return (
    <Box flex={1} bg='$white' alignItems='center' justifyContent='center'>
      <Header isGoBack title={'Adicionar Usuário'} iconOption={<FontAwesome5 name="question-circle" size={20} color="#FFF" />} />
      <Text>AddUser</Text>
    </Box>
  );
}

