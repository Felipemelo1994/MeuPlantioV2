import React, { useState } from 'react';
import Header from '../components/Header';
import { Box, Fab, Text, VStack } from '@gluestack-ui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import CustomCircleFab from '../components/CustomCircleFab';
import EmptyScreen from '../components/EmptyScreen';
import { ScrollView } from '@gluestack-ui/themed';
import CustomCard from '../components/CustomCard';
import IconAddUser from '../../assets/icon-add-user.svg'
import IconUser from '../../assets/icon-user.svg'

const users = [{}]
export default function UserManagement() {
    const navigation = useNavigation()
    const [isEmpty, setIsEmpty] = useState(true)

    return (
        <Box flex={1} bg='$white' alignItems='center' justifyContent='center'>
            <Header isGoBack title={'Gerenciar Usuários'} />

            {isEmpty ? (
                <EmptyScreen title={'Não há usuários cadastradas'} subTitle={'Adicione um novo usuário'} icon={<IconUser height={120} width={120} />} />
            ) :
                (<ScrollView w={'$full'} zIndex={-1} >
                    <VStack w={'$full'} mt={'$10'} mb={'$20'}>
                        {users.map((item, index) => {
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

            <CustomCircleFab route='addUser' />
        </Box>
    );
}

