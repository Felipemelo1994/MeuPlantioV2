import { Box, HStack, Text, VStack } from '@gluestack-ui/themed';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient'
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins'
import { useFonts } from 'expo-font';
import IconPlanting from '../../assets/icon-planting.svg'

const chartPlanting = [
    {
        percent: '60.4',
        title: 'Adubadas',
        color: '$#0DA572'
    },
    {
        percent: '30.5',
        title: 'Próximo do abubamento',
        color: '$#FADA7A'
    },
    {
        percent: '9.1',
        title: 'Não adubado',
        color: '$#F95454'
    }
]
export default function GraphicsCard() {
    const [fontLoaded] = useFonts({
        Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold
    })

    if (!fontLoaded) {
        return null
    }
    return (
        <VStack h={190} w={'$full'} py={'$2'} px={'$4'}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                colors={['#EEEEEE', '#BCBCBC']}
                style={{ height: '100%', width: '100%', borderRadius: 15, alignItems: 'center', justifyContent: 'center', borderColor: 'white', overflow: 'hidden' }}>
                <VStack flex={1} justifyContent='space-between'>
                    <HStack w={'$full'} h={80} px={'$4'} py={'$1.5'} top={12} justifyContent='space-between'>
                        <VStack h={'$full'} justifyContent='center'>
                            <Text fontFamily={'Poppins_700Bold'} fontSize={'$6xl'} color={'#0DA572'}>
                                {'50'}
                            </Text>
                            <Text fontFamily={'Poppins_600SemiBold'} fontSize={'$lg'} color={'$white'}>
                                {'Espécies de plantas'}
                            </Text>
                        </VStack>

                        <Box
                            justifyContent="center"
                            alignItems={'center'}
                            style={{ width: 70, height: 70 }}
                            rounded={'$full'}
                            elevation={'$2.5'}
                            bg={'white'}
                        >
                            <IconPlanting height={40} width={40} />
                        </Box>
                    </HStack>

                    <HStack w={'$full'} px={'$4'} py={'$2.5'} justifyContent='space-between' alignItems='center'>
                        {chartPlanting.map((item, index) => {
                            return (
                                <VStack key={index}>
                                    <Text fontFamily={'Poppins_700Bold'} fontSize={'$xl'} color={item.color}>
                                        {item.percent + '%'}
                                    </Text>
                                    <Text fontFamily={'Poppins_600SemiBold'} fontSize={'$xs'} color={'$white'}>
                                        {item.title}
                                    </Text>
                                </VStack>
                            )
                        })}
                    </HStack>
                </VStack>
            </LinearGradient>
        </VStack>
    );
}

