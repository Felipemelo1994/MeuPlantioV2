import { Avatar, AvatarBadge, AvatarFallbackText, AvatarImage, Box, Center, HStack, Text, VStack } from '@gluestack-ui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import Logo from '../../assets/logo_myplant.svg'
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins'
import { useFonts } from 'expo-font';

export default function HeaderHome() {
    const [fontLoaded] = useFonts({
        Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold
    })

    if (!fontLoaded) {
        return null
    }

    return (
        <HStack mx={'$4'} position='absolute' top={15}>
            {/* <VStack justifyContent='center' alignItems='center' w={'$full'} h={'$20'} bg='#E6FFBE' px={'$5'} rounded={'$2xl'}>
                <Text>Home</Text>
            </VStack> */}
            <LinearGradient
                start={{ x: 0.444666, y: 0.2 }}
                colors={['#F0F6E6', '#EBF5DC', '#E6FFBE']}
                style={{ width: '100%', height: 80, justifyContent: 'center', borderRadius: 15 }}>
                <HStack justifyContent='space-between' mx={'$3'}>
                    <HStack alignItems='center' space='sm'>
                        <Avatar width={38} height={38} bg='#3D7E4A'>
                            <AvatarFallbackText size='xl'>Felipe Melo</AvatarFallbackText>
                        </Avatar>

                        <VStack>
                            <Text color='$black' fontSize={'$sm'} fontFamily='Poppins_600SemiBold'>Olá Felipe Melo!</Text>
                            <Text color='#999999' fontSize={'$xs'} fontFamily='Poppins_700Bold'>Núcleo Jardim do Norte</Text>
                        </VStack>
                    </HStack>

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
                </HStack>
            </LinearGradient>
        </HStack>
    );
}

