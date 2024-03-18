import React from 'react';
import Header from '../components/Header';
import { VStack, Text, HStack } from '@gluestack-ui/themed';

export default function Settings() {
  return (
    <VStack width={'$full'} bg='$white' alignItems='center'>
      <Header title={'Preferências'} />

      <HStack w={'$full'} h={'$64'} px={'$4'} mt={95} borderWidth={1} borderColor='$trueGray200' bg='$white' alignItems='center' justifyContent='center'>
        <Text>Settings</Text>
      </HStack>
    </VStack>
  );
}
