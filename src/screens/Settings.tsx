import React from 'react';
import Header from '../components/Header';
import { VStack, Text, HStack } from '@gluestack-ui/themed';
import LocationPicker from './TestGeolocationMap';

export default function Settings() {
  return (
    <VStack width={'$full'} bg='$white' alignItems='center'>
      <Header title={'Preferências'} />

      <HStack w={'$full'} h={'$64'} px={'$4'} mt={95} alignItems='center' justifyContent='center'>
        {/* <Text>Settings</Text> */}
        <LocationPicker />
      </HStack>
    </VStack>
  );
}