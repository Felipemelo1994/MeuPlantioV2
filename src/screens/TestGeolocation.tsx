import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function App() {
    const [address, setAddress] = useState<Location.LocationGeocodedAddress | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

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

            // Faz a geocodificação reversa
            const geocodedAddress = await Location.reverseGeocodeAsync({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            });

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

    return (
        <View style={styles.container}>
            {errorMsg ? (
                <Text style={styles.errorText}>{errorMsg}</Text>
            ) : address ? (
                <View>
                    <Text style={styles.text}>{address.formattedAddress}</Text>
                </View>
            ) : (
                <Text style={styles.text}>Obtendo endereço...</Text>
            )}
            <Button title="Atualizar Endereço" onPress={getAddress} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
    },
    errorText: {
        color: 'red',
        fontSize: 16,
        marginBottom: 10,
    },
});
