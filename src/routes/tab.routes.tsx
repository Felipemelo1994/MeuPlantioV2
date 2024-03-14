import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons, Entypo, MaterialCommunityIcons, FontAwesome, Fontisto } from '@expo/vector-icons'

import Home from '../screens/Home'
import AddPlant from '../screens/AddPlant'
import QRCode from '../screens/QRCode'
import Profile from '../screens/Profile'
import Settings from '../screens/Settings'
import { View } from 'react-native'
import React, { useRef } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import LottieView from 'lottie-react-native'
import StackRoutes from './stack.routes'
import { Pressable } from '@gluestack-ui/themed'

const Tab = createBottomTabNavigator()

export default function TabRoutes() {
    const animation = useRef(null);

    function MyTabBar({ state, descriptors, navigation, insets }: BottomTabBarProps) {
        return (
            <LinearGradient
                start={{ x: 0.5, y: 0.01 }}
                // end={{ x: 0.2, y: 0.6 }}
                colors={['rgba(238,238,238,0.9)', 'rgba(188,188,188,0.9)']}
                style={{ flexDirection: 'row', height: 65, bottom: 90, borderRadius: 15, alignItems: 'center', justifyContent: 'center', marginHorizontal: 16, marginBottom: -65, padding: 10 }}
            >
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label = route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name, route.params);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    const iconsArr: { [key: string]: React.ReactElement } = {
                        'home': <Entypo name='home' color={isFocused ? '#999999' : "#FFFFFF"} size={24} />,
                        'addPlant': <FontAwesome name="leaf" size={24} color={isFocused ? '#999999' : "#FFFFFF"} />,
                        'profile': <Fontisto name="person" size={22} color={isFocused ? '#999999' : "#FFFFFF"} />,
                        'settings': <Ionicons name='settings-sharp' color={isFocused ? '#999999' : "#FFFFFF"} size={24} />,
                    }

                    const iconList = {
                        [route.name as keyof typeof iconsArr]: iconsArr[route.name],
                    }

                    return (
                        <Pressable
                            key={route.key}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            flex={1}
                            alignItems='center'
                        >
                            <>
                                {label === 'qrcode' ? (
                                    <LinearGradient
                                        start={{ x: 0, y: 0 }}
                                        colors={isFocused ? ['#EEEEEE', '#BCBCBC', '#BCBCBC'] : ['#026B35', '#23A763']}
                                        style={{ height: 85, width: 85, borderRadius: 50, backgroundColor: (isFocused ? '#FFF' : '#077E41'), alignItems: 'center', justifyContent: 'center', borderWidth: 6, borderColor: 'white', overflow: 'hidden' }}>
                                        {isFocused && <LottieView
                                            autoPlay
                                            ref={animation}
                                            style={{
                                                position: 'absolute',
                                                width: 120,
                                                height: 120,
                                                zIndex: 999
                                            }}
                                            // Find more Lottie files at https://lottiefiles.com/featured
                                            source={require('../../assets/lottie/scan-code.json')}
                                        />}
                                        <MaterialCommunityIcons name='qrcode-scan' color={'white'} size={35} />
                                    </LinearGradient>
                                ) : (
                                    <>
                                        {iconList[route.name]}
                                        {isFocused && <View style={{ position: 'absolute', bottom: -10, width: 5, height: 5, borderRadius: 10, backgroundColor: '#077E41' }} />}
                                    </>
                                )}
                            </>
                        </Pressable>
                    );
                })}
            </LinearGradient>
        )
    }

    return (
        <Tab.Navigator
            tabBar={props => <MyTabBar {...props} />}
            backBehavior='firstRoute'
            sceneContainerStyle={{ height: 100, backgroundColor: 'transparent' }}
            screenOptions={{
                headerShown: false,
                tabBarItemStyle: {
                    zIndex: 999,
                    backgroundColor: 'transparent'
                },
                tabBarStyle: {
                    backgroundColor: '#BCBCBC',
                    height: 65,
                    margin: 20,
                    borderRadius: 15,
                    shadowColor: 'transparent'
                }
            }}
        >
            <Tab.Screen name='home' component={Home} options={{
                tabBarIcon: ({ color, size, focused }) => {
                    return (
                        <>
                            <Entypo name='home' color={color} size={24} />
                            {focused && <View style={{ position: 'absolute', bottom: 12, width: 5, height: 5, borderRadius: 10, backgroundColor: '#077E41' }} />}
                        </>
                    )
                },
                tabBarLabelStyle: { display: 'none' },
                tabBarActiveTintColor: 'white'
            }} />
            <Tab.Screen name='addPlant' component={AddPlant} options={{
                tabBarIcon: ({ color, size, focused }) => {
                    return (<>
                        <FontAwesome name="leaf" size={24} color={color} />
                        {focused && <View style={{ position: 'absolute', bottom: 12, width: 5, height: 5, borderRadius: 10, backgroundColor: '#077E41' }} />}
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
                            colors={focused ? ['#EEEEEE', '#BCBCBC', '#BCBCBC'] : ['#026B35', '#23A763']}
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
                        {focused && <View style={{ position: 'absolute', bottom: 12, width: 5, height: 5, borderRadius: 10, backgroundColor: '#077E41' }} />}
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
                            {focused && <View style={{ position: 'absolute', bottom: 12, width: 5, height: 5, borderRadius: 10, backgroundColor: '#077E41' }} />}
                        </>)
                },
                tabBarLabelStyle: { display: 'none' },
                tabBarActiveTintColor: 'white'
            }} />
        </Tab.Navigator>
    )
}
