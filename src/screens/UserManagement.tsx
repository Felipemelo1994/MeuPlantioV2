import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderHome from '../components/Header';

export default function UserManagement() {
    return (
        <View style={styles.container}>
            <HeaderHome isGoBack title={'Gerenciar Usuários'} />
            <Text>UserManagement</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
