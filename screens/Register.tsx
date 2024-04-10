import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Register = () => {

    const handleRegister = () => {
        // Xử lý khi người dùng bấm vào nút Quên mật khẩu
    };

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome</Text>
            <View style={styles.card}>
                <Text style={styles.login}>Register</Text>


                <View style={styles.rowLabel}>
                    <Text style={styles.label}>tên:</Text>
                    <Text style={styles.labelRight}>họ:</Text>
                </View>
                <View style={styles.row}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nhập tên"
                    />
                    <TextInput
                        style={styles.inputRight}
                        placeholder="Nhập họ"
                    />
                </View>


                <View style={styles.rowLabel}>
                    <Text style={styles.label}>sđt:</Text>
                    <Text style={styles.labelRight}>Email:</Text>
                </View>
                <View style={styles.row}>
                    <TextInput
                        style={styles.input}
                        keyboardType="phone-pad"
                        placeholder="Nhập số điện thoại"
                    />
                    <TextInput
                        style={styles.inputRight}
                        secureTextEntry
                        placeholder="Nhập email"
                    />
                </View>


                <View style={styles.rowLabel}>
                    <Text style={styles.label}>mật khẩu:</Text>
                    <Text style={styles.label2}>nhập lại mật khẩu:</Text>
                </View>
                <View style={styles.row}>
                    <TextInput
                        style={styles.input}
                        secureTextEntry
                        placeholder="Nhập mật khẩu"
                    />
                    <TextInput
                        style={styles.inputRight}
                        secureTextEntry
                        placeholder="Nhập lại mật khẩu"
                    />
                </View>
                
                <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
                    <Text style={styles.loginButtonText}>Đăng ký</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'purple',
    },
    rowLabel:{
        flexDirection:"row",

    },
    row:{
        flexDirection:"row"
    },
    login: {
        marginBottom:70,
        fontSize:50,
        textAlign:"center",
        fontStyle:"italic"
    },
    welcome: {
        marginBottom:80,
        fontStyle:"italic",
        fontSize:50,
        color:"white"
    },
    labelRight:{
        marginLeft:170
    },
    label2:{
        marginLeft:120
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        marginLeft:10
    },
    inputRight:{
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        height: 40,
        marginLeft:40,
        width:150,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        height: 40,
        marginLeft:5,
        width:150,
    },
    CreateAccount:{

    },
    loginButton: {
        backgroundColor: 'transparent', // Màu nền trong suốt
        borderWidth: 1, // Độ rộng của viền
        borderColor: '#28a745', // Màu viền
        borderRadius: 5, // Độ cong của góc
        paddingVertical: 10, // Khoảng cách dọc của phần padding
        paddingHorizontal: 20, // Khoảng cách ngang của phần padding
        width:150,
        marginLeft:120,
        marginTop:50
    },
    loginButtonText: {
        color: '#28a745', // Màu chữ
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    card:{
        width:'110%',
        height:'70%',
        paddingTop: 40,
        paddingLeft:1,
        paddingRight:10,
        backgroundColor: 'white',
        borderRadius: 20,
        marginBottom:-15,
    }
});

export default Register;
