import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Box, HStack, Input, InputField, InputIcon, InputSlot, ScrollView, SearchIcon, Text, VStack } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import CustomCircleFab from '../components/CustomCircleFab';
import MapView, { Marker, MarkerAnimated, Region } from 'react-native-maps';
import CustomDivider from '../components/CustomDivider';
import CustomCard from '../components/CustomCard';
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins'
import { useFonts } from 'expo-font';
import EmptyScreen from '../components/EmptyScreen';
import IconHistory from '../../assets/icon-history.svg'
import { LinearGradient } from 'expo-linear-gradient';
import { Platform } from 'react-native';
import TestGeolocation from './TestGeolocation';
import * as Location from 'expo-location';

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
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [regionCoord, setRegionCoord] = useState<Region | null>(null);
    const [address, setAddress] = useState<Location.LocationGeocodedAddress | null>(null);
    const [locationCoords, setLocationCoords] = useState<Location.LocationObject | null>(null);
    const navigation = useNavigation()
    const [fontLoaded] = useFonts({
        Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold
    })

    const getAddress = async () => {
        // Solicita permissão de localização
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permissão de localização negada.');
            return;
        }

        try {
            // Obtém a localização atual
            const location = await Location.getCurrentPositionAsync({
                accuracy: Location.Accuracy.High,
            });
            setLocationCoords(location)

            // Faz a geocodificação reversa
            const geocodedAddress = await Location.reverseGeocodeAsync({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            });

            const region: Region = {
                latitude: location.coords.latitude,
                longitude: location?.coords.longitude,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
            };

            setRegionCoord(region)

            // Define o primeiro resultado como o endereço
            setAddress(geocodedAddress[0]);
        } catch (error) {
            console.error('Erro ao obter o endereço:', error);
            setErrorMsg('Não foi possível obter o endereço.');
        }
    };

    useEffect(() => {
        getAddress();
    }, []);

    const markers = [
        {
            id: 1,
            title: "Local 1",
            description: "Descrição do local 1",
            latitude: -23.55052,
            longitude: -46.633308,
        },
        {
            id: 2,
            title: "Local 2",
            description: "Descrição do local 2",
            latitude: -3.093654,
            longitude: -60.022513,
        },
    ];


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
                    <MapView
                        mapType={Platform.OS == "android" ? "none" : "standard"}
                        initialRegion={regionCoord!} style={{ width: '100%', height: '100%', borderRadius: 15, elevation: 10 }} >
                        {markers.map(marker => (
                            <Marker
                                key={marker.id}
                                coordinate={{
                                    latitude: locationCoords?.coords?.latitude!,
                                    longitude: locationCoords?.coords?.longitude!,
                                }}
                                title={marker.title}
                                description={marker.description}
                            />
                        ))}
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
                                bgColorList={['#7E99A3', '#7E99A3']}
                                textTitleColor={"white"}
                                textCreateAtColor={"white"}
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

