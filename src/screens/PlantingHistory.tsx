import React, { useState } from 'react';
import Header from '../components/Header';
import { Box, ScrollView, Text, VStack } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import CustomCircleFab from '../components/CustomCircleFab';
import MapView from 'react-native-maps';
import CustomDivider from '../components/CustomDivider';
import CustomCard from '../components/CustomCard';
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins'
import { useFonts } from 'expo-font';
import EmptyScreen from '../components/EmptyScreen';
import IconHistory from '../../assets/icon-history.svg'

const plants = [
    {
        id: '1',
        title: 'Chacrona',
        status: 'FERTILIZED',
        type: 'chacrona',
    },
    {
        id: '2',
        title: 'Mariri',
        status: 'NO-FERTILIZED',
        type: 'mariri',
    },
    {
        id: '3',
        title: 'Mariri Pagezinho',
        status: 'NEED-FERTILIZING',
        type: 'mariri',
    },
    {
        id: '1',
        title: 'Chacrona',
        status: 'FERTILIZED',
        type: 'chacrona',
    },
    {
        id: '2',
        title: 'Mariri',
        status: 'NO-FERTILIZED',
        type: 'mariri',
    },
    {
        id: '3',
        title: 'Mariri Pagezinho',
        status: 'NEED-FERTILIZING',
        type: 'mariri',
    },
    {
        id: '1',
        title: 'Chacrona',
        status: 'FERTILIZED',
        type: 'chacrona',
    },
    {
        id: '2',
        title: 'Mariri',
        status: 'NO-FERTILIZED',
        type: 'mariri',
    },
    {
        id: '3',
        title: 'Mariri Pagezinho',
        status: 'NEED-FERTILIZING',
        type: 'mariri',
    }
]

export default function PlantingHistory() {
    const [isEmpty, setIsEmpty] = useState(true)
    const navigation = useNavigation()
    const [fontLoaded] = useFonts({
        Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold
    })

    if (!fontLoaded) {
        return null
    }

    return (
        <VStack flex={1} bg='$white' justifyContent='center' alignItems='center'>
            <Header isGoBack title={'Histórico de Plantio'} />

            {isEmpty ? (
                <EmptyScreen title={'Não há plantas cadastradas'} subTitle={'Adicione uma nova planta'} icon={<IconHistory height={120} width={120} />} />
            ) :
                (<ScrollView w={'$full'} zIndex={-1} >
                    <Box height={'$64'} borderRadius={'$full'} rounded={'$lg'} mx={'$4'} overflow='hidden' mt={105} elevation={5}>
                        <MapView loadingBackgroundColor='#3D7E4A' style={{ width: '100%', height: '100%', borderRadius: 15, elevation: 10 }} />
                    </Box>
                    <CustomDivider label={'Histórico de plantas'} mt={'$10'} />

                    <VStack w={'$full'} mt={'$10'} mb={'$20'}>
                        {plants.map((item, index) => {
                            return (
                                <CustomCard
                                    key={index}
                                    item={item}
                                    isEmpty={isEmpty}
                                    onPress={() => { }}
                                />
                            )
                        })}
                    </VStack>


                </ScrollView>)
            }

            <CustomCircleFab route='addPlant' />
        </VStack>
    );
}

