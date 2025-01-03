/* eslint-disable react/react-in-jsx-scope */
import { Avatar, AvatarFallbackText, Box, HStack, Pressable, Text, VStack } from '@gluestack-ui/themed'
import FertilizeGreenIcon from '../../assets/fertiliz_green_icon.svg'
import FertilizeYellowIcon from '../../assets/fertiliz_yellow_icon.svg'
import FertilizeRedIcon from '../../assets/fertiliz_red_icon.svg'
import LeavesIcon from '../../assets/logo_myplant.svg'
import IconPlanting from '../../assets/icon-planting.svg'
import IconHistory from '../../assets/icon-history.svg'
import moment from 'moment'
import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins'
import { LinearGradient } from 'expo-linear-gradient'

export interface HistoryCardProps {
    id: string
    createdAt: string
    title: string
    email?: string
    subtitle?: string
    status: string
    core: string
    route: string
    image?: any
    type: string
}

type Props = any & {
    item: HistoryCardProps
    hideDataStatus?: boolean
    bgColorList?: string[]
    isEmpty: boolean
    textTitleColor?: string
    textSubTitleColor?: string
    textCreateAtColor?: string
    onPress: () => void
}

interface StatusType {
    [status: string]: {
        icon: any,
        color: string[]
    }
}

export const statusIcon: StatusType = {
    FERTILIZED: {
        icon: <FertilizeGreenIcon height={35} width={35} />,
        color: ['#C6F1CF', '#F0F6F2']
    },
    'NEED-FERTILIZING': {
        icon: <FertilizeYellowIcon height={35} width={35} />,
        color: ['#F3CD80', '#FAECCF']
    },
    'NO-FERTILIZED': {
        icon: <FertilizeRedIcon height={35} width={35} />,
        color: ['#FFBCBC', '#F4DEDE']
    },
}

export function getInitials(fullName: string): string {
    const nameParts = fullName.split(' ')
    const firstInitial = nameParts[0].charAt(0)
    const lastInitial = nameParts[nameParts.length - 1].charAt(0)
    return `${firstInitial}${lastInitial}`
}

const CustomCard = ({ item, hideDataStatus, isEmpty, onPress, bgColorList, textTitleColor, textSubTitleColor, textCreateAtColor, ...rest }: Props) => {
    const [fontLoaded] = useFonts({
        Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold
    })

    if (!fontLoaded) {
        return null
    }

    const imgCircular =
        item.type ? (
            <IconPlanting height={40} width={40} />
        ) : (
            <Text fontFamily={'Poppins_600SemiBold'} fontSize={'$2xl'} color={'$white'}>
                {getInitials(item.title)}
            </Text>
        )

    return (
        <>
            {isEmpty ? (<></>) : (<Pressable
                onPress={onPress}
                $active-backgroundColor='$rgba(0,0,0,0.7)'
                justifyContent={'center'}
                mx={'$4'}
                mb={'$2'}
                h={'$20'}
                // elevation={'$1'}
                rounded={'$2xl'}
                {...rest}
            >
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    colors={bgColorList ? bgColorList : statusIcon[item.status].color}
                    style={{ width: '100%', height: '100%', justifyContent: 'center', borderRadius: 15, paddingHorizontal: 10 }}>
                    <HStack justifyContent={'space-between'}>
                        <HStack alignItems={'center'} space={'md'}>
                            {item.type ? (<Box
                                w={'$12'}
                                h={'$12'}
                                borderColor={'$blueGray500'}
                                rounded={'$full'}
                                elevation={8}
                                bg={item.type ? '$white' : '#3D7E4A'}
                                alignItems={'center'}
                                justifyContent={'center'}
                            >
                                {<IconPlanting height={30} width={30} />}
                            </Box>) : (
                                <Avatar width={48} height={48} bg='#3D7E4A'>
                                    <AvatarFallbackText size='2xl'>{item.title}</AvatarFallbackText>
                                </Avatar>
                            )}
                            <VStack justifyContent={'center'}>
                                <Text
                                    maxWidth={hideDataStatus ? '$56' : '$56'}
                                    fontFamily={'Poppins_600SemiBold'}
                                    fontSize={'$md'}
                                    color={textTitleColor ? textTitleColor : '$black'}
                                    numberOfLines={1}
                                >
                                    {item.title}
                                </Text>
                                {item.subtitle && (
                                    <Text fontFamily={'Poppins_400Regular'} color={textSubTitleColor ? textSubTitleColor : '$blueGray700'}>
                                        {item.subtitle} • {item.core}
                                    </Text>
                                )}
                            </VStack>
                        </HStack>

                        {!hideDataStatus && (
                            <VStack alignItems={'flex-end'} justifyContent={'space-between'} space={'md'}>
                                {statusIcon[item.status].icon}
                                <Text fontFamily={'Poppins_400Regular'} color={textCreateAtColor ? textCreateAtColor : '$coolGray400'}>
                                    {moment(item.createdAt).format('DD.MM.YYYY')}
                                </Text>
                            </VStack>
                        )}
                    </HStack>
                </LinearGradient>
            </Pressable>)}
        </>
    )
}

export default CustomCard
