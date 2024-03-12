import { useNavigation } from '@react-navigation/native'
import { HStack, Text, Box, Pressable } from '@gluestack-ui/themed'
import React from 'react'
import IconHistory from '../../assets/icon-history.svg'
import IconAddUser from '../../assets/icon-add-user.svg'
import { LinearGradient } from 'expo-linear-gradient'
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins'
import { useFonts } from 'expo-font';


const DATA = [
    {
        id: '1',
        title: 'Histórico de Plantio',
        subTitle: 'Veja e gerencie o histórico do seu plantio cadastrado',
        icon: <IconHistory height={30} width={30} />,
        route: 'historyPlants',
    },
    {
        id: '2',
        title: 'Adicionar Plantas',
        subTitle: 'Cadastre novas plantas no seu plantio',
        icon: <IconAddUser height={30} width={30} />,
        route: 'addPlants',
    },
]

const userData = {
    data: {
        title: 'Felipe Matheus',
        email: 'felipe.melo@sidia.com',
        subtitle: 'Dev I',
        core: 'Jardim do Norte',
    },
}

const GridButtons = () => {
    const navigation = useNavigation()
    const [fontLoaded] = useFonts({
        Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold
    })

    if (!fontLoaded) {
        return null
    }

    const renderItem = (item: any, index: number) => (
        <Pressable
            onPress={() => { }}
            my={'$2'}
            w={175}
            mx={'$3.5'}
            h={'$20'}
        >
            <LinearGradient
                start={{ x: 0, y: 0 }}
                colors={['#EEEEEE', '#BCBCBC']}
                style={{ height: '100%', width: '100%', borderRadius: 15, justifyContent: 'center' }}>
                <HStack justifyContent='center' alignItems='center' pl={'$2'}>
                    <Box
                        justifyContent="center"
                        alignItems={'center'}
                        style={{ width: 55, height: 55 }}
                        rounded={'$full'}
                        elevation={'$2.5'}
                        bg={'white'}
                        mr={'$2'}
                    >
                        {item.icon}
                    </Box>
                    <Text w={100} fontFamily={'Poppins_600SemiBold'} fontSize={'$lg'} color={'$white'}>
                        {item.title}
                    </Text>
                </HStack>
            </LinearGradient>
        </Pressable>
    )

    return (
        <HStack w={'$full'} justifyContent='space-between' px={'$3.5'}>
            <Pressable onPress={() => navigation.navigate('plantingHistory')} $active-backgroundColor='$rgba(0,255,0,0.9)' rounded={'$2xl'}>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    colors={['#EEEEEE', '#BCBCBC']}
                    style={{ height: 80, borderRadius: 15, justifyContent: 'center' }}>
                    <HStack justifyContent='center' alignItems='center' p={'$3'} >
                        <Box
                            justifyContent="center"
                            alignItems={'center'}
                            style={{ width: 55, height: 55 }}
                            rounded={'$full'}
                            elevation={'$2.5'}
                            bg={'white'}
                            mr={'$2'}
                        >
                            <IconHistory height={30} width={30} />
                        </Box>
                        <Text w={100} fontFamily={'Poppins_600SemiBold'} fontSize={'$lg'} color={'$white'}>
                            {'Histórico de Plantio'}
                        </Text>
                    </HStack>
                </LinearGradient>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('userManagement')} $active-backgroundColor='$rgba(0,255,0,0.9)' rounded={'$2xl'}>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    colors={['#EEEEEE', '#BCBCBC']}
                    style={{ height: 80, borderRadius: 15, justifyContent: 'center' }}>
                    <HStack justifyContent='center' alignItems='center' p={'$3'}>
                        <Box
                            justifyContent="center"
                            alignItems={'center'}
                            style={{ width: 55, height: 55 }}
                            rounded={'$full'}
                            elevation={'$2.5'}
                            bg={'white'}
                            mr={'$2'}
                        >
                            <IconAddUser height={30} width={30} />
                        </Box>
                        <Text w={100} fontFamily={'Poppins_600SemiBold'} fontSize={'$lg'} color={'$white'}>
                            {'Gerenciar Usuários'}
                        </Text>
                    </HStack>
                </LinearGradient>
            </Pressable>
        </HStack >
    )
}

export default GridButtons
