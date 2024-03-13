import React from 'react';
import Header from '../components/Header';
import { Box, Fab, Text } from '@gluestack-ui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import CustomCircleFab from '../components/CustomCircleFab';

export default function UserManagement() {
    const navigation = useNavigation()

    return (
        <Box flex={1} bg='$white' alignItems='center' justifyContent='center'>
            <Header isGoBack title={'Gerenciar Usuários'} />
            <Text>UserManagement</Text>

            <CustomCircleFab route='addUser' />
        </Box>
    );
}

