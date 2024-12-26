import 'react-native-gesture-handler';
import React from 'react';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { Box, Image, View } from '@gluestack-ui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import { Text } from '@gluestack-ui/config/build/theme';
import { useSharedValue } from 'react-native-reanimated';

interface ImageSliderProps {
    listComponentReact: React.JSX.Element[]; // Aqui definimos o tipo do argumento
}

const { width } = Dimensions.get('window');

export default function ImageSlider({ listComponentReact }: ImageSliderProps) {
    const progress = useSharedValue<number>(0);

    return (
        <Box>
            <Carousel
                loop={listComponentReact?.length! > 1 ? true : false}
                width={width}
                height={width / 2}
                autoPlay={listComponentReact?.length! > 1 ? true : false}
                autoPlayInterval={5000}
                data={listComponentReact}
                scrollAnimationDuration={1000}
                renderItem={({ item }) => item}
            />
        </Box>
    );
}
