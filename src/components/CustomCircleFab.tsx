import { Fab } from '@gluestack-ui/themed'
import { useNavigation } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'

type Props = any & {
  icon?: any
  route: string
  linearColor?: string[]
}

const CustomCircleFab = ({ icon, route, linearColor, ...rest }: Props) => {
  const navigation = useNavigation()

  return (
    <Fab
      size='md'
      w={'$16'}
      h={'$16'}
      justifyContent='center'
      alignItems='center'
      onPress={() => navigation.navigate(route)}
      {...rest}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        colors={linearColor ? linearColor : ['#026B35', '#23A763']}
        style={{ width: 64, height: 64, borderRadius: 50, backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        {icon ? icon : <Entypo name="plus" size={40} color="white" />}
      </LinearGradient>
    </Fab>
  )
}

export default CustomCircleFab
