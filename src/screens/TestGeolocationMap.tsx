import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Image } from '@gluestack-ui/themed';

export default function LocationPicker() {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [selectedLocation, setSelectedLocation] = useState<{
        latitude: number;
        longitude: number;
    } | null>(null);
    const [address, setAddress] = useState<Location.LocationGeocodedAddress | null>(null);

    const mapRef = useRef<MapView>(null); // Referência ao MapView

    useEffect(() => {
        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permissão negada', 'Permita o acesso à localização nas configurações.');
                return;
            }

            const currentLocation = await Location.getCurrentPositionAsync({});
            setLocation(currentLocation);
            setSelectedLocation({
                latitude: currentLocation.coords.latitude,
                longitude: currentLocation.coords.longitude,
            });

            // Faz a geocodificação reversa
            const geocodedAddress = await Location.reverseGeocodeAsync({
                latitude: currentLocation.coords.latitude,
                longitude: currentLocation.coords.longitude,
            });
            setAddress(geocodedAddress[0]);
        })();
    }, []);

    const handleMapPress = (event: any) => {
        const { latitude, longitude } = event.nativeEvent.coordinate;
        setSelectedLocation({ latitude, longitude });
    };

    const handleConfirmLocation = async () => {
        if (selectedLocation) {
            // Faz a geocodificação reversa
            const geocodedAddress = await Location.reverseGeocodeAsync({
                latitude: selectedLocation.latitude,
                longitude: selectedLocation.longitude,
            });

            Alert.alert(
                'Local Selecionado',
                `Endereço: ${geocodedAddress[0]?.formattedAddress}`
            );
        } else {
            Alert.alert('Erro', 'Nenhum local foi selecionado.');
        }
    };

    const handleMoveToCurrentLocation = () => {
        if (location) {
            const region = {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            };

            // Animação para a localização atual
            mapRef.current?.animateToRegion(region, 1000);

            setSelectedLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            });
        } else {
            Alert.alert('Erro', 'Localização atual não disponível.');
        }
    };

    if (!location) {
        return (
            <View style={styles.container}>
                <Button title="Carregando localização..." disabled />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <MapView
                ref={mapRef} // Conecta o MapView à referência
                style={styles.map}
                initialRegion={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
                onPress={handleMapPress}
            >
                {selectedLocation && (
                    <Marker
                        coordinate={{
                            latitude: selectedLocation.latitude,
                            longitude: selectedLocation.longitude,
                        }}
                        title="Local Selecionado"
                    >
                        <Image source={require('../../assets/pin_marker.png')} style={{ width: 30, height: 30 }} />
                    </Marker>
                )}
            </MapView>
            <Button title="Confirmar Localização" onPress={handleConfirmLocation} />
            <Button title="Minha Localização" onPress={handleMoveToCurrentLocation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
});
