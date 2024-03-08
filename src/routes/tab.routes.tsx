import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather, Ionicons, Entypo, MaterialCommunityIcons, FontAwesome, Fontisto } from '@expo/vector-icons'

import Home from '../screens/Home'
import AddPlant from '../screens/AddPlant'
import QRCode from '../screens/QRCode'
import Profile from '../screens/Profile'
import Settings from '../screens/Settings'
import { View, StyleSheet } from 'react-native'
import React, { useRef } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import LottieView from 'lottie-react-native'

const Tab = createBottomTabNavigator()

export default function TabRoutes() {
    const animation = useRef(null);
    return (
        <Tab.Navigator
            backBehavior='firstRoute'
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#BCBCBC',
                    height: 55,
                    margin: 25,
                    borderRadius: 15,
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
                                {focused && <View style={{ position: 'absolute', bottom: 6, width: 5, height: 5, borderRadius: 10, backgroundColor: '#077E41' }} />}
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
                        {focused && <View style={{ position: 'absolute', bottom: 6, width: 5, height: 5, borderRadius: 10, backgroundColor: '#077E41' }} />}
                    </>)
                },
                tabBarLabelStyle: { display: 'none' },
                tabBarActiveTintColor: 'white'
            }} />
            <Tab.Screen name='qrcode' component={QRCode} options={{
                tabBarIcon: ({ color, size, focused }) => {
                    return (
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            colors={focused ? ['#EEEEEE', '#BCBCBC', '#BCBCBC'] : ['#23A763', '#026B35']}
                            style={{ height: 80, width: 80, borderRadius: 50, backgroundColor: (focused ? '#FFF' : '#077E41'), alignItems: 'center', justifyContent: 'center', borderWidth: 6, borderColor: 'white', overflow: 'hidden' }}>
                            {focused && <LottieView
                                autoPlay
                                ref={animation}
                                style={{
                                    position: 'absolute',
                                    width: 110,
                                    height: 110,
                                    zIndex: 999
                                }}
                                // Find more Lottie files at https://lottiefiles.com/featured
                                source={require('../../assets/lottie/scan-code.json')}
                            />}
                            <MaterialCommunityIcons name='qrcode-scan' color={'white'} size={35} />
                        </LinearGradient>
                    )
                },
                tabBarLabelStyle: { display: 'none' },
                tabBarActiveTintColor: 'white'
            }} />
            <Tab.Screen name='profile' component={Profile} options={{
                tabBarIcon: ({ color, size, focused }) => {
                    return (<>
                        <Fontisto name="person" size={22} color={color} />
                        {focused && <View style={{ position: 'absolute', bottom: 6, width: 5, height: 5, borderRadius: 10, backgroundColor: '#077E41' }} />}
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
                            {focused && <View style={{ position: 'absolute', bottom: 6, width: 5, height: 5, borderRadius: 10, backgroundColor: '#077E41' }} />}
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