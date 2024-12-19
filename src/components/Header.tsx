import { Avatar, AvatarBadge, AvatarFallbackText, AvatarImage, Box, Center, Divider, HStack, Pressable, Text, VStack } from '@gluestack-ui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import Logo from '../../assets/logo_myplant.svg'
import LogoMeuPlantio from '../../assets/logo_plantio_white.svg'
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
                colors={['rgba(93,180,150,0.9)', 'rgba(17,139,80,0.9)']}
                style={{ width: '100%', height: isHome ? 110 : 65, justifyContent: 'center', borderRadius: 15 }}>
                {isHome ? (<HStack justifyContent='space-between' alignItems='center' mx={'$2'}>
                    {/* <Pressable> */}
                    <HStack alignItems='center' space='sm'>
                        <Avatar width={55} height={55} bg='#6CCBAB' borderColor='white' borderWidth={4}>
                            <AvatarFallbackText fontFamily='Poppins_700Bold' size='2xl'>Felipe Melo</AvatarFallbackText>
                        </Avatar>

                        <VStack>
                            <Text color='$black' fontSize={'$md'} fontFamily='Poppins_700Bold'>Olá Felipe Melo!</Text>
                            <Text color='white' fontSize={'$sm'} fontFamily='Poppins_700Bold'>Núcleo Jardim do Norte</Text>
                        </VStack>
                    </HStack>
                    {/* </Pressable> */}
                    {/* <Divider orientation='vertical' w={8} h={8} rounded={'$full'} bgColor='$blueGray400' /> */}

                    {/* <HStack space={'xs'} alignItems={'center'} justifyContent={'center'} p={'$2.5'} rounded={'$full'} bgColor='rgba(0,0,0,0.09)'>
                        <Center w={'$7'} h={'$7'} bg='$white' rounded={"$full"} elevation={10}>
                            <Logo height={22} width={22} />
                        </Center>
                        <Text
                            fontSize={'$lg'}
                            fontFamily='Poppins_600SemiBold'
                            textAlign="center"
                            numberOfLines={1}
                            color='#077E41'
                        >
                            Meu Plantio
                        </Text>
                    </HStack> */}

                    <LogoMeuPlantio height={150} width={150} />
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
                            <FontAwesome6 name="arrow-left" size={20} color="white" />
                        </Pressable>}

                        <HStack space={'sm'} alignItems={'center'} justifyContent={'center'}>
                            <Text
                                fontFamily={'Poppins_600SemiBold'}
                                fontSize={'$2xl'}
                                textAlign="center"
                                numberOfLines={1}
                                color={'white'}
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

