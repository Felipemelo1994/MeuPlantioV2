import React, { useState } from 'react';
import Header from '../components/Header';
import { Box, HStack, Input, InputField, InputIcon, InputSlot, ScrollView, SearchIcon, Text, VStack } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import CustomCircleFab from '../components/CustomCircleFab';
import MapView, { Marker, MarkerAnimated } from 'react-native-maps';
import CustomDivider from '../components/CustomDivider';
import CustomCard from '../components/CustomCard';
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins'
import { useFonts } from 'expo-font';
import EmptyScreen from '../components/EmptyScreen';
import IconHistory from '../../assets/icon-history.svg'
import { LinearGradient } from 'expo-linear-gradient';

const plants = [
    {
        id: '1',
        title: 'Chacrona Caianinha do bareirinha',
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

const chartPlanting = [
    {
        percent: '60.4',
        title: 'Adubadas',
        color: '$#0DA572'
    },
    {
        percent: '30.5',
        title: 'Próximo do abubamento',
        color: '$#FADA7A'
    },
    {
        percent: '9.1',
        title: 'Não adubado',
        color: '$#F95454'
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
            <Header title={'Histórico de Plantio'} iconOption={<SearchIcon size={'xl'} color="white" />} />

            {!isEmpty ? (
                <EmptyScreen title={'Não há plantas cadastradas'} subTitle={'Adicione uma nova planta'} icon={<IconHistory height={120} width={120} />} />
            ) : (<ScrollView w={'$full'}>
                <LinearGradient
                    start={{ x: 0.6, y: 0.1 }}
                    colors={['#BCBCFF', '#C9DBEB']}
                    style={{ justifyContent: 'center', borderRadius: 15, paddingHorizontal: 10, elevation: 5, marginHorizontal: 15, marginTop: 95, marginBottom: 15 }}>
                    <VStack justifyContent='center' pt={'$2'}>
                        <Text fontFamily={'Poppins_700Bold'} fontSize={'$xl'} color={'$white'}>
                            {'Status do Plantio'}
                        </Text>
                        <VStack>
                            <Text fontFamily={'Poppins_700Bold'} fontSize={'$md'} color={'#7E99A3'}>
                                {'50 und'}
                            </Text>
                            <Text fontFamily={'Poppins_700Bold'} fontSize={'$xs'} color={'$white'}>
                                {'Espécies de plantas'}
                            </Text>
                        </VStack>
                    </VStack>
                    <HStack py={'$1'} alignItems='center' justifyContent={'space-between'}>
                        {chartPlanting.map((item, index) => {
                            return (
                                <VStack key={index}>
                                    <Text fontFamily={'Poppins_700Bold'} fontSize={'$md'} color={item.color}>
                                        {item.percent + '%'}
                                    </Text>
                                    <Text fontFamily={'Poppins_700Bold'} fontSize={'$xs'} color={'$white'}>
                                        {item.title}
                                    </Text>
                                </VStack>
                            )
                        })}
                    </HStack>
                </LinearGradient>
                <CustomDivider label={'Mapa de plantas'} mb={'$8'} mt={'$5'} />
                <Box height={'$64'} borderRadius={'$full'} rounded={'$2xl'} mx={'$4'} overflow='hidden' elevation={5}>
                    <MapView initialRegion={{
                        latitude: -3.02441,
                        longitude: -59.97171,
                        latitudeDelta: 0.01, // Ajuste conforme necessário para o nível de zoom desejado
                        longitudeDelta: 0.01, // Ajuste conforme necessário para o nível de zoom desejado
                    }} loadingBackgroundColor='#3D7E4A' style={{ width: '100%', height: '100%', borderRadius: 15, elevation: 10 }} >
                        <MarkerAnimated title='Planta 1' coordinate={{ latitude: -3.02441, longitude: -59.97171 }} />
                    </MapView>
                </Box>
                <CustomDivider label={'Histórico de plantas'} mt={'$10'} />

                <VStack w={'$full'} mt={'$5'} mb={170}>
                    {plants.map((item, index) => {
                        return (
                            <CustomCard
                                key={index}
                                item={item}
                                isEmpty={!isEmpty}
                                bgColorList={['#BCBCBC', '#E2E2E2']}
                                onPress={() => { }}
                            />
                        )
                    })}
                </VStack>
            </ScrollView>)
            }

            <CustomCircleFab route='addPlant' marginBottom={85} />
        </VStack >
    );
}

