import { Center, VStack } from '@gluestack-ui/themed';
import React from 'react';
import HeaderHome from '../components/HeaderHome';
import GraphicsCard from '../components/GraphicsCard';
import GridButtons from '../components/GruidButtons';

export default function Home() {
  return (
    <Center flex={1} bg='$white'>
      <HeaderHome />

      <VStack position='absolute' top={104} space='md'>
        <GraphicsCard />
        <GridButtons />
      </VStack>


    </Center>
  );
}

