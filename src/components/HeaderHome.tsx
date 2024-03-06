import { Avatar, AvatarBadge, AvatarFallbackText, AvatarImage, Box, Center, HStack, Text, VStack } from '@gluestack-ui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import Logo from '../../assets/logo_myplant.svg'

export default function HeaderHome() {
    return (
        <HStack mx={'$4'} position='absolute' top={15}>
            {/* <VStack justifyContent='center' alignItems='center' w={'$full'} h={'$20'} bg='#E6FFBE' px={'$5'} rounded={'$2xl'}>
                <Text>Home</Text>
            </VStack> */}
            <LinearGradient
                // Button Linear Gradient
                start={{ x: 0.45, y: 0.2 }}
                colors={['#EEEEEE', '#E6FFBE']}
                style={{ width: '100%', height: 80, justifyContent: 'center', borderRadius: 15 }}>
                {/* <Text >Sign in with Facebook</Text> */}
                <HStack justifyContent='space-between' mx={'$3'}>
                    <HStack alignItems='center' space='sm'>
                        <Avatar bg='#3D7E4A'>
                            <AvatarFallbackText size='2xl'>Felipe Melo</AvatarFallbackText>
                        </Avatar>

                        <VStack>
                            <Text color='$black' fontSize={'$lg'} fontWeight='$semibold'>Olá Felipe Melo!</Text>
                            <Text color='#999999' fontSize={'$sm'} fontWeight='$semibold'>Núcleo Jardim do Norte</Text>
                        </VStack>
                    </HStack>

                    <HStack space={'xs'} alignItems={'center'} justifyContent={'center'}>
                        <Text
                            fontSize={'$2xl'}
                            fontWeight='$semibold'
                            textAlign="center"
                            numberOfLines={1}
                            color='#077E41'
                        >
                            Meu Plantio
                        </Text>
                        <Logo height={25} width={25} />
                    </HStack>
                </HStack>
            </LinearGradient>
        </HStack>
    );
}

