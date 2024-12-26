import React, { useState } from 'react';
import Header from '../components/Header';
import { Box, VStack } from '@gluestack-ui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import CustomCircleFab from '../components/CustomCircleFab';
import EmptyScreen from '../components/EmptyScreen';
import { ScrollView } from '@gluestack-ui/themed';
import CustomCard from '../components/CustomCard';
import IconAddUser from '../../assets/icon-add-user.svg'
import IconUser from '../../assets/icon-user.svg'

const users = [
    {
        id: 1,
        createdAt: '23.04.2023',
        title: 'André Melo',
        email: 'am@dev.com',
        subtitle: 'Monitor',
        status: 'FERTILIZED',
        core: 'N. Jardim do Norte',
        route: '',
        image: null,
    },
    {
        id: 2,
        createdAt: '23.04.2023',
        title: 'Lucas Nascimento',
        email: 'ln@dev.com',
        subtitle: 'Monitor',
        status: 'NO-FERTILIZED',
        core: 'N. Flor do Norte',
        route: '',
        image: null,
    },
    {
        id: 3,
        createdAt: '23.04.2023',
        title: 'Julio Cesar De Moraes Carvalho da Silva e Silva',
        email: 'jcmc@dev.com',
        subtitle: 'Monitor',
        status: 'FERTILIZED',
        core: 'N. Menino Deus',
        route: '',
        image: null,
    },
    {
        id: 4,
        createdAt: '23.04.2023',
        title: 'Tarcizio Farias',
        email: 'jcmc@dev.com',
        subtitle: 'Plantador',
        status: 'FERTILIZED',
        core: 'N. Menino Deus',
        route: '',
        image: null,
    },
    {
        id: 5,
        createdAt: '23.04.2023',
        title: 'Moraes da Silva',
        email: 'jcmc@dev.com',
        subtitle: 'Plantador',
        status: 'FERTILIZED',
        core: 'N. Jardim do Norte',
        route: '',
        image: null,
    },
    {
        id: 1,
        createdAt: '23.04.2023',
        title: 'André Melo',
        email: 'am@dev.com',
        subtitle: 'Monitor',
        status: 'FERTILIZED',
        core: 'N. Jardim do Norte',
        route: '',
        image: null,
    },
    {
        id: 2,
        createdAt: '23.04.2023',
        title: 'Lucas Nascimento',
        email: 'ln@dev.com',
        subtitle: 'Monitor',
        status: 'NO-FERTILIZED',
        core: 'N. Flor do Norte',
        route: '',
        image: null,
    },
    {
        id: 3,
        createdAt: '23.04.2023',
        title: 'Julio Cesar De Moraes Carvalho da Silva e Silva',
        email: 'jcmc@dev.com',
        subtitle: 'Monitor',
        status: 'FERTILIZED',
        core: 'N. Menino Deus',
        route: '',
        image: null,
    },
    {
        id: 4,
        createdAt: '23.04.2023',
        title: 'Tarcizio Farias',
        email: 'jcmc@dev.com',
        subtitle: 'Plantador',
        status: 'FERTILIZED',
        core: 'N. Menino Deus',
        route: '',
        image: null,
    },
    {
        id: 5,
        createdAt: '23.04.2023',
        title: 'Moraes da Silva',
        email: 'jcmc@dev.com',
        subtitle: 'Plantador',
        status: 'FERTILIZED',
        core: 'N. Jardim do Norte',
        route: '',
        image: null,
    },
    {
        id: 1,
        createdAt: '23.04.2023',
        title: 'André Melo',
        email: 'am@dev.com',
        subtitle: 'Monitor',
        status: 'FERTILIZED',
        core: 'N. Jardim do Norte',
        route: '',
        image: null,
    },
    {
        id: 2,
        createdAt: '23.04.2023',
        title: 'Lucas Nascimento',
        email: 'ln@dev.com',
        subtitle: 'Monitor',
        status: 'NO-FERTILIZED',
        core: 'N. Flor do Norte',
        route: '',
        image: null,
    },
    {
        id: 3,
        createdAt: '23.04.2023',
        title: 'Julio Cesar De Moraes Carvalho da Silva e Silva',
        email: 'jcmc@dev.com',
        subtitle: 'Monitor',
        status: 'FERTILIZED',
        core: 'N. Menino Deus',
        route: '',
        image: null,
    },
    {
        id: 4,
        createdAt: '23.04.2023',
        title: 'Tarcizio Farias',
        email: 'jcmc@dev.com',
        subtitle: 'Plantador',
        status: 'FERTILIZED',
        core: 'N. Menino Deus',
        route: '',
        image: null,
    },
    {
        id: 5,
        createdAt: '23.04.2023',
        title: 'Moraes da Silva',
        email: 'jcmc@dev.com',
        subtitle: 'Plantador',
        status: 'FERTILIZED',
        core: 'N. Jardim do Norte',
        route: '',
        image: null,
    },
]

export default function UserManagement() {
    const navigation = useNavigation()
    const [isEmpty, setIsEmpty] = useState(true)

    return (
        <Box flex={1} bg='$white' alignItems='center' justifyContent='center'>
            <Header isGoBack title={'Gerenciar Usuários'} />

            {!isEmpty ? (
                <EmptyScreen title={'Não há usuários cadastradas'} subTitle={'Adicione um novo usuário'} icon={<IconUser height={120} width={120} />} />
            ) :
                (<ScrollView w={'$full'} >
                    <VStack mt={65}>
                        <VStack w={'$full'} mt={'$10'} mb={'$20'}>
                            {users.map((item, index) => {
                                return (
                                    <CustomCard
                                        key={index}
                                        item={item}
                                        hideDataStatus={true}
                                        isEmpty={!isEmpty}
                                        onPress={() => { }}
                                    />
                                )
                            })}
                        </VStack>
                    </VStack>


                </ScrollView>)
            }

            <CustomCircleFab route='addUser' />
        </Box>
    );
}

