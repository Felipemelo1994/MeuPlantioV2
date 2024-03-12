import { Box, HStack, Text, VStack } from '@gluestack-ui/themed';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient'
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins'
import { useFonts } from 'expo-font';
import IconPlanting from '../../assets/icon-planting.svg'

export default function GraphicsCard() {
    const [fontLoaded] = useFonts({
        Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold
    })

    if (!fontLoaded) {
        return null
    }
    return (
        <VStack h={170} w={'$full'} px={'$2'}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                colors={['#EEEEEE', '#BCBCBC']}
                style={{ height: '100%', width: '100%', borderRadius: 15, alignItems: 'center', justifyContent: 'center', borderWidth: 6, borderColor: 'white', overflow: 'hidden' }}>
                <HStack w={'$full'} px={'$4'} position='absolute' top={10} alignItems='center' justifyContent='space-between' space='4xl'>
                    <VStack h={56}>
                        <Text fontFamily={'Poppins_700Bold'} fontSize={'$6xl'} color={'$#026B35'}>
                            {'50'}
                        </Text>
                        <Text fontFamily={'Poppins_600SemiBold'} fontSize={'$lg'} color={'$white'}>
                            {'Espécies de plantas'}
                        </Text>
                    </VStack>

                    <Box
                        justifyContent="center"
                        alignItems={'center'}
                        style={{ width: 60, height: 60 }}
                        rounded={'$full'}
                        elevation={'$2.5'}
                        bg={'white'}
                        mr={'$2'}
                    >
                        <IconPlanting height={35} width={35} />
                    </Box>
                </HStack>

                <HStack w={'$full'} px={'$4'} position='absolute' bottom={10} justifyContent='space-between'>
                    <VStack >
                        <Text fontFamily={'Poppins_700Bold'} fontSize={'$2xl'} color={'$#94BF9D'}>
                            {'25.5%'}
                        </Text>
                        <Text fontFamily={'Poppins_600SemiBold'} fontSize={'$sm'} color={'$white'}>
                            {'Adubadas'}
                        </Text>
                    </VStack>

                    <VStack>
                        <Text fontFamily={'Poppins_700Bold'} fontSize={'$2xl'} color={'$#EBA71E'}>
                            {'25.5%'}
                        </Text>
                        <Text fontFamily={'Poppins_600SemiBold'} fontSize={'$sm'} color={'$white'}>
                            {'Próximas do adubamento'}
                        </Text>
                    </VStack>

                    <VStack>
                        <Text fontFamily={'Poppins_700Bold'} fontSize={'$2xl'} color={'$#FF6F6F'}>
                            {'25.5%'}
                        </Text>
                        <Text fontFamily={'Poppins_600SemiBold'} fontSize={'$sm'} color={'$white'}>
                            {'Não adubadas'}
                        </Text>
                    </VStack>
                </HStack>
            </LinearGradient>
        </VStack>
    );
}

