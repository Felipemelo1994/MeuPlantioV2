import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import { Box, Fab, FabIcon } from '@gluestack-ui/themed';
import { Entypo } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import CustomCircleFab from '../components/CustomCircleFab';

export default function PlantingHistory() {
    const navigation = useNavigation()

    return (
        <Box flex={1} bg='$white' alignItems='center' justifyContent='center'>
            <Header isGoBack title={'Histórico de Plantio'} />
            <Text>PlantingHistory</Text>

            <CustomCircleFab route='addPlant' />
        </Box>
    );
}

