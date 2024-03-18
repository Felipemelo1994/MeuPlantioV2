import { Avatar, AvatarBadge, AvatarFallbackText, AvatarImage, Box, Center, HStack, Pressable, Text, VStack } from '@gluestack-ui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import Logo from '../../assets/logo_myplant.svg'
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins'
import { useFonts } from 'expo-font';
import { FontAwesome6 } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

type Props = any & {
    title: string
    isHome: boolean
    iconOption?: any
    isGoBack?: boolean
}

export default function Header({ title, isHome, iconOption, isGoBack, ...rest }: Props) {
    const [fontLoaded] = useFonts({
        Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold
    })
    const navigation = useNavigation()

    if (!fontLoaded) {
        return null
    }

    return (
        <HStack px={'$4'} position='absolute' top={15} {...rest}>
            <LinearGradient
                start={{ x: 0.444666, y: 0.5 }}
                colors={['rgba(240,246,230,0.9)', 'rgba(230,255,190,0.9)']}
                style={{ width: '100%', height: 65, justifyContent: 'center', borderRadius: 15 }}>
                {isHome ? (<HStack justifyContent='space-between' mx={'$2'}>
                    <Pressable $active-backgroundColor='$rgba(0,255,0,0.1)' p={'$2'} rounded={'$lg'} onPress={() => navigation.navigate('profile')}>
                        <HStack alignItems='center' space='sm'>
                            <Avatar width={38} height={38} bg='#3D7E4A'>
                                <AvatarFallbackText size='xl'>Felipe Melo</AvatarFallbackText>
                            </Avatar>

                            <VStack>
                                <Text color='$black' fontSize={'$sm'} fontFamily='Poppins_600SemiBold'>Olá Felipe Melo!</Text>
                                <Text color='#999999' fontSize={'$xs'} fontFamily='Poppins_700Bold'>Núcleo Jardim do Norte</Text>
                            </VStack>
                        </HStack>
                    </Pressable>

                    <HStack space={'xs'} alignItems={'center'} justifyContent={'center'}>
                        <Text
                            fontSize={'$3xl'}
                            fontFamily='Poppins_600SemiBold'
                            textAlign="center" h={'$8'}
                            numberOfLines={1}
                            color='#077E41'
                        >
                            Meu Plantio
                        </Text>
                        <Center w={'$7'} h={'$7'} bg='$white' rounded={"$full"} elevation={10}>
                            <Logo height={22} width={22} />
                        </Center>
                    </HStack>
                </HStack>) : (
                    <>
                        {isGoBack && <Pressable
                            h={'$10'}
                            w={'$10'}
                            justifyContent='center'
                            alignItems='center'
                            rounded={'$full'}
                            $active-backgroundColor='$rgba(0,0,0,0.1)'
                            $active-opacity={1}
                            flex={1}
                            position="absolute"
                            left={0}
                            m="$2"
                            onPress={() => navigation.goBack()}
                        >
                            <FontAwesome6 name="arrow-left" size={20} color="#2F865A" />
                        </Pressable>}

                        <HStack space={'sm'} alignItems={'center'} justifyContent={'center'}>
                            <Text
                                fontFamily={'Poppins_600SemiBold'}
                                fontSize={'$2xl'}
                                textAlign="center"
                                numberOfLines={1}
                                color={'#2F865A'}
                            >
                                {title}
                            </Text>
                        </HStack>

                        {iconOption ? (
                            <Pressable
                                h={'$10'}
                                w={'$10'}
                                justifyContent='center'
                                alignItems='center'
                                rounded={'$full'}
                                $active-bgColor='$rgba(0,0,0,0.1)'
                                $active-opacity={1}
                                flex={1}
                                position="absolute"
                                right={0}
                                m="$2"
                                onPress={() => { }}
                            >
                                {iconOption}
                            </Pressable>
                        ) : null}
                    </>
                )}
            </LinearGradient>
        </HStack>
    );
}

