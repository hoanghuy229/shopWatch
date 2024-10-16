import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const Header = (props: any) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
                <Ionicons name="menu" size={30} color="black" style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.title}>Shop App</Text>
            <Ionicons onPress={() => props.navigation.navigate('Cart')} name="cart" size={30} color="black" style={styles.icon}/>
        </View>
    );
};

const styles = StyleSheet.create({
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
})

export default Header;
