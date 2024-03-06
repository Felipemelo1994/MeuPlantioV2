import { Center, Text } from '@gluestack-ui/themed';
import React from 'react';
import HeaderHome from '../components/HeaderHome';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home() {
  return (
    <Center flex={1} bg='$white'>
      <HeaderHome />
    </Center>
  );
}

