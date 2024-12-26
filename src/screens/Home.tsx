import { Box, Center, ScrollView, VStack } from '@gluestack-ui/themed';
import React from 'react';
import Header from '../components/Header';
import GraphicsCard from '../components/GraphicsCard';
import GridButtons from '../components/GridButtons';
import ImageSlider from '../components/ImageSlider';
import { LinearGradient } from 'expo-linear-gradient';

const MockSlider1 = () => {
  return (
    <LinearGradient
      key="1"
      start={{ x: 0, y: 0 }}
      colors={['#FFBCBC', '#F4DEDE']}
      style={{
        height: 180,
        borderRadius: 15, marginTop: 10,
        marginHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Box style={{ backgroundColor: '#000' }}>Componente 1</Box>
    </LinearGradient>
  )
}

const MockSlider2 = () => {
  return (
    <LinearGradient
      key="3"
      start={{ x: 0, y: 0 }}
      colors={['#BCBCBC', '#E2E2E2']}
      style={{
        height: 180,
        borderRadius: 15,
        marginHorizontal: 15, marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Box style={{ backgroundColor: '#000' }}>Componente 3</Box>
    </LinearGradient>
  )
}

export default function Home() {
  return (
    <VStack bg='$white'>
      <Header isHome />

      <ScrollView pt={130}>
        <ImageSlider listComponentReact={[<GraphicsCard />, <MockSlider1 />, <MockSlider2 />]} />
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
