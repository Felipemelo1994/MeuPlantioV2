import { Text } from "@gluestack-ui/themed";
import { VStack } from "@gluestack-ui/themed";
import React from "react";

type Props = any & {
    title: string
    subTitle?: string
    icon?: any
}
export default function EmptyScreen({ title, subTitle, icon }: Props) {
    return (
        <VStack flex={1} justifyContent='center' alignItems='center'>
            {icon}
            <Text fontSize={'$2xl'} textAlign='center' fontFamily={'Poppins_400Regular'} color='$black' mt={'$5'}>
                {title}
            </Text>
            <Text fontSize={'$lg'} fontFamily={'Poppins_600SemiBold'} color='$coolGray400'>
                {subTitle}
            </Text>
        </VStack>
    )
}