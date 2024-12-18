import { Center, ScrollView, VStack } from '@gluestack-ui/themed';
import React from 'react';
import Header from '../components/Header';
import GraphicsCard from '../components/GraphicsCard';
import GridButtons from '../components/GridButtons';

export default function Home() {
  return (
    <VStack bg='$white'>
      <Header isHome />

      <ScrollView pt={130}>
        <GraphicsCard />
        <GridButtons />
        {/* <GraphicsCard />
        <GraphicsCard />

        <GraphicsCard />
        <GraphicsCard />
        <GraphicsCard />
        <GraphicsCard />
        <GraphicsCard />
        <GraphicsCard />
        <GraphicsCard />
        <GraphicsCard /> */}

      </ScrollView>


    </VStack>
  );
}
