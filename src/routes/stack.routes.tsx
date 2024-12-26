import { createNativeStackNavigator } from '@react-navigation/native-stack'

import React from 'react'
import PlantingHistory from '../screens/PlantingHistory'
import TabRoutes from './tab.routes'
import UserManagement from '../screens/UserManagement'
import AddUser from '../screens/AddUser'
import AddPlant from '../screens/AddPlant'

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
            <Stack.Screen name='addPlant' component={AddPlant} />
            <Stack.Screen name='userManagement' component={UserManagement} />
            <Stack.Screen name='addUser' component={AddUser} />
        </Stack.Navigator>
    )
}
