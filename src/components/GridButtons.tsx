import { useNavigation } from '@react-navigation/native'
import { HStack, Text, Box, Pressable } from '@gluestack-ui/themed'
import React from 'react'
import IconHistory from '../../assets/icon-history.svg'
import IconAddUser from '../../assets/icon_add_user.svg'
import IconNewspaper from '../../assets/icon_newspaper.svg'
import IconQrcode from '../../assets/qrcode.svg'
import { LinearGradient } from 'expo-linear-gradient'
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins'
import { useFonts } from 'expo-font';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
// import { RootStackParamList } from '../routes/stack.routes'


const DATA = [
    {
        id: '1',
        title: 'Adicionar Planta',
        subTitle: 'Veja e gerencie o histórico do seu plantio cadastrado',
        icon: <IconHistory height={30} width={30} />,
        route: 'addPlant',
    },
    {
        id: '2',
        title: 'Gerenciar usuários',
        subTitle: 'Cadastre novas plantas no seu plantio',
        icon: <IconAddUser height={38} width={38} />,
        route: 'userManagement',
    },
    {
        id: '3',
        title: 'Noticías',
        subTitle: 'Veja e gerencie o histórico do seu plantio cadastrado',
        icon: <IconNewspaper height={40} width={40} />,
        route: 'settings',
    },
    // {
    //     id: '4',
    //     title: 'Escanear QRCode',
    //     subTitle: 'Cadastre novas plantas no seu plantio',
    //     icon: <IconQrcode height={30} width={30} />,
    //     route: 'qrcode',
    // }
]

// type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const GridButtons = ({ ...rest }) => {
    const navigation = useNavigation()
    // const navigation = useNavigation<NavigationProp>();
    const [fontLoaded] = useFonts({
        Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold
    })

    if (!fontLoaded) {
        return null
    }

    return (
        <HStack flexWrap='wrap' w={'$full'} justifyContent='space-between' px={'$4'}  {...rest}>
            {DATA.map(item => {
                return (
                    <Pressable key={item.id} h={'$20'} mb={'$2'} onPress={() => navigation.navigate(item?.route)} $active-backgroundColor='$rgba(0,255,0,0.9)' rounded={'$2xl'}>
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            colors={['#EEEEEE', '#BCBCBC']}
                            style={{ height: 80, borderRadius: 15, marginBottom: 10, justifyContent: 'center' }}>
                            <HStack justifyContent={'center'} alignItems='center' p={11} >
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
                                <Text w={100} fontFamily={'Poppins_600SemiBold'} fontSize={'$sm'} color={'$white'}>
                                    {item.title}
                                </Text>
                            </HStack>
                        </LinearGradient>
                    </Pressable>
                )
            })}
        </HStack >
    )
}

export default GridButtons
