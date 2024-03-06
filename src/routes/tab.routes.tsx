import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather, Ionicons, Entypo, MaterialCommunityIcons, FontAwesome, Fontisto } from '@expo/vector-icons'

import Home from '../screens/Home'
import AddPlant from '../screens/AddPlant'
import QRCode from '../screens/QRCode'
import Profile from '../screens/Profile'
import Settings from '../screens/Settings'
import { View, StyleSheet } from 'react-native'
import React from 'react'

const Tab = createBottomTabNavigator()

export default function TabRoutes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#D5D7D5',
                    height: 55,
                    margin: 25,
                    borderRadius: 50,
                    shadowColor: 'transparent'
                }
            }}>
            <Tab.Screen
                name='home'
                component={Home}
                options={{
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <>
                                <Entypo name='home' color={color} size={24} />
                                {focused && <View style={{ position: 'absolute', bottom: 8, width: 5, height: 5, borderRadius: 10, backgroundColor: '#077E41' }} />}
                            </>
                        )
                    },
                    tabBarLabelStyle: { display: 'none' },
                    tabBarActiveTintColor: 'white'
                }} />
            <Tab.Screen name='planting' component={AddPlant} options={{
                tabBarIcon: ({ color, size, focused }) => {
                    return (<>
                        <FontAwesome name="leaf" size={24} color={color} />
                        {focused && <View style={{ position: 'absolute', bottom: 8, width: 5, height: 5, borderRadius: 10, backgroundColor: '#077E41' }} />}
                    </>)
                },
                tabBarLabelStyle: { display: 'none' },
                tabBarActiveTintColor: 'white'
            }} />
            <Tab.Screen name='qrcode' component={QRCode} options={{
                tabBarIcon: ({ color, size, focused }) => {
                    return (
                        <View style={{ height: 80, width: 80, borderRadius: 50, elevation: (focused ? 2 : 0), backgroundColor: (focused ? '#FFF' : '#077E41'), alignItems: 'center', justifyContent: 'center', borderWidth: 6, borderColor: 'white' }}>
                            <MaterialCommunityIcons name='qrcode-scan' color={focused ? '#077E41' : 'white'} size={35} />
                        </View>
                    )
                },
                tabBarLabelStyle: { display: 'none' },
                tabBarActiveTintColor: 'white'
            }} />
            <Tab.Screen name='profile' component={Profile} options={{
                tabBarIcon: ({ color, size, focused }) => {
                    return (<>
                        <Fontisto name="person" size={22} color={color} />
                        {focused && <View style={{ position: 'absolute', bottom: 8, width: 5, height: 5, borderRadius: 10, backgroundColor: '#077E41' }} />}
                    </>)
                },
                tabBarLabelStyle: { display: 'none' },
                tabBarActiveTintColor: 'white'
            }} />
            <Tab.Screen name='settings' component={Settings} options={{
                tabBarIcon: ({ color, size, focused }) => {
                    return (
                        <>
                            <Ionicons name='settings-sharp' color={color} size={24} />
                            {focused && <View style={{ position: 'absolute', bottom: 8, width: 5, height: 5, borderRadius: 10, backgroundColor: '#077E41' }} />}
                        </>)
                },
                tabBarLabelStyle: { display: 'none' },
                tabBarActiveTintColor: 'white'
            }} />
        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 50,
        width: 50,
        backgroundColor: '#3D7E4A',
        alignItems: 'center',
        justifyContent: 'center',
    },
});