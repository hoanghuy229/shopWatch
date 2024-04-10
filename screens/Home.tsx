import React from "react";
import { View, Image, Text, StyleSheet, ScrollView,TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import MyCarousel from "./Carousel";
import { Link } from "@react-navigation/native";

const Home = (props: any) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="menu" size={30} color="black" style={styles.icon} />
                <Text style={styles.title}>Quốc Đại luxury</Text>
                <Ionicons name="cart" size={30} color="black" style={styles.icon} />
            </View>
            <Image source={require("../designs/banner.jpg")} style={styles.banner} />
            <View style={styles.container}>
                <MyCarousel></MyCarousel>
            </View>
            <Text style={styles.titles}>explore popular brands</Text>
            <ScrollView horizontal>
                <View style={styles.brands}>
                    <Image source={require("../designs/brands/casio.jpg")} style={styles.brandImage} />
                    <Image source={require("../designs/brands/citizen.jpg")} style={styles.brandImage} />
                    <Image source={require("../designs/brands/gsock.jpg")} style={styles.brandImage} />
                    <Image source={require("../designs/brands/hublot.jpg")} style={styles.brandImage} />
                    <Image source={require("../designs/brands/rolex.jpg")} style={styles.brandImage} />
                </View>
            </ScrollView>
            <View style={styles.popularProducts}>
                <Text style={styles.titles}>popular products</Text>
                <Text style={styles.links}>show all</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        marginTop: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    icon: {
        marginRight: 10,
    },
    banner: {
        marginTop: 30,
        width: "100%",
        height: 250,
        marginBottom:30
    },
    titles: {
        marginTop: 40,
        marginLeft: 10,
        fontSize: 20,
        fontWeight: "bold",
        marginBottom:20
    },
    links: {
        marginTop: 40,
        fontSize: 20,
        marginLeft:140,
        fontStyle:"italic",
        color: 'darkorange',
        textDecorationLine: 'underline',
        marginBottom:20
    },
    brandImage: {
        width: 80,
        height: 80,
        margin: 10,
        borderRadius: 15
    },
    brands: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    popularProducts: {
        flexDirection:"row",
    }
});

export default Home;
