import { Box, Center, Divider, HStack, Text } from "@gluestack-ui/themed";
import { useFonts } from "expo-font";
import React from "react";
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins'

type Props = any & {
    label: string
}

export default function CustomDivider({ label, ...rest }: Props) {
    const [fontLoaded] = useFonts({
        Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold
    })

    if (!fontLoaded) {
        return null
    }

    return (
        <HStack bg='$white' mx={'$4'} justifyContent="center" alignItems="center" space="md" {...rest}>
            <Divider h={'$0.5'} rounded={'$full'} position="absolute" w={'$full'} bgColor="#EEEEEE" />
            <Text fontSize={'$lg'} px={'$3'} bg="$white" position="absolute" fontFamily='Poppins_600SemiBold'>{label}</Text>
        </HStack>
    );
}
