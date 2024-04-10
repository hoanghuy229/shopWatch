import React, { useRef } from 'react';
import { View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Ionicons } from '@expo/vector-icons';

const MyCarousel = (props: any) => {
    const carouselRef = useRef<Carousel<any>>(null);
    const { width: screenWidth } = Dimensions.get("window");
    const images = [
        require('../designs/carousels/carousel1.jpg'),
        require('../designs/carousels/carousel2.jpg'),
        require('../designs/carousels/carousel3.jpg'),
    ];

    const renderItem = ({ item }: { item: any }) => (
        <Image source={item} style={{ width: screenWidth, height: 200 }} />
    );

    const handleNextPress = () => {
        carouselRef.current?.snapToNext();
    };

    const handlePrevPress = () => {
        carouselRef.current?.snapToPrev();
    };

    return (
        <View style={styles.container}>
            <Carousel
                ref={carouselRef}
                data={images}
                renderItem={renderItem}
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
                loop
            />
            <TouchableOpacity style={styles.arrowLeft} onPress={handlePrevPress}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.arrowRight} onPress={handleNextPress}>
                <Ionicons name="arrow-forward" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    arrowLeft: {
        position: 'absolute',
        top: '50%',
        left: 10,
        transform: [{ translateY: -12 }],
    },
    arrowRight: {
        position: 'absolute',
        top: '50%',
        right: 10,
        transform: [{ translateY: -12 }],
    },
});

export default MyCarousel;
