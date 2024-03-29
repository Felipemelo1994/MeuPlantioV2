import { createNativeStackNavigator } from '@react-navigation/native-stack'

import React from 'react'
import PlantingHistory from '../screens/PlantingHistory'
import TabRoutes from './tab.routes'
import UserManagement from '../screens/UserManagement'
import AddUser from '../screens/AddUser'

const Stack = createNativeStackNavigator()

export default function StackRoutes() {

    return (
        <Stack.Navigator
            screenOptions={{
                contentStyle: { backgroundColor: '#FFFFFF' },
                animation: "default",
                headerShown: false,
            }}>
            <Stack.Screen name='homeScreen' component={TabRoutes} />
            <Stack.Screen name='plantingHistory' component={PlantingHistory} />
            <Stack.Screen name='userManagement' component={UserManagement} />
            <Stack.Screen name='addUser' component={AddUser} />
        </Stack.Navigator>
    )
}
