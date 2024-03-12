import { Center, VStack } from '@gluestack-ui/themed';
import React from 'react';
import HeaderHome from '../components/Header';
import GraphicsCard from '../components/GraphicsCard';
import GridButtons from '../components/GruidButtons';

export default function Home() {
  return (
    <Center flex={1} bg='$white'>
      <HeaderHome isHome />

      <VStack position='absolute' top={90} space='xs'>
        <GraphicsCard />
        <GridButtons />
      </VStack>


    </Center>
  );
}

