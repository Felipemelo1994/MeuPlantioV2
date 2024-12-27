import React from 'react';
import Header from '../components/Header';
import { VStack, Text, HStack, Input, InputField, InputIcon, InputSlot, SearchIcon } from '@gluestack-ui/themed';

export default function SearchScreen() {
  return (
    <VStack flex={1} bg='$white' justifyContent='center' alignItems='center'>
      <Header title={'Pesquisar'} isGoBack />

      <VStack w={'$full'} h={'$full'} alignItems='center' justifyContent='flex-start' position='absolute' top={70}>
        <Input h={50} mx={'$4'} mt={'$6'} rounded={'$full'}>
          <InputSlot pl={'$2'}>
            <InputIcon as={SearchIcon} size='xl' />
          </InputSlot>
          <InputField fontFamily={'Poppins_600SemiBold'} placeholder="Pesquisar plantas" />
        </Input>
      </VStack>

      <VStack alignItems='center' mx={'$4'}>
        <SearchIcon h={50} w={50} color="#7E99A3" />
        <Text fontFamily={'Poppins_700Bold'} fontSize={'$xl'} color={'$black'}>
          {'Sem Resultados'}
        </Text>
        <Text fontFamily={'Poppins_600SemiBold'} textAlign='center' fontSize={'$md'} color={'$black'}>
          {'Faça uma buscar pelo nome de alguma planta cadastrada.'}
        </Text>
      </VStack>
    </VStack>
  );
}