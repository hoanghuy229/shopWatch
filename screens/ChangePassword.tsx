import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


const ChangePassword = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleForgotPassword = () => {
        // Xử lý khi người dùng bấm vào nút Quên mật khẩu
    };

    const handleSignUp = () => {
        // Xử lý khi người dùng bấm vào nút Đăng ký
    };

    const handleLogin = () => {
        // Xử lý khi người dùng bấm vào nút Đăng nhập
    };

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>User Information</Text>
            <View style={styles.card}>
                <Text style={styles.login}>đổi mật khẩu</Text>

                <Text style={styles.label}>Mật khẩu hiện tại</Text>
                <TextInput
                    style={styles.input}
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    keyboardType="phone-pad"
                    placeholder="Nhập số điện thoại"
                />
                <Text style={styles.label}>Mật khẩu mới</Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    placeholder="Nhập mật khẩu"
                />
                <Text style={styles.label}>nhập lại</Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    placeholder="Nhập mật khẩu"
                />


                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>Đổi mật khẩu</Text>
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
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        height: 40,
        width:350,
    },
    CreateAccount:{

    },
    forgotPasswordButton: {
        alignSelf: 'flex-end',
        marginBottom: 20,
        marginLeft:50
    },
    forgotPasswordText: {
        color: 'blue',
        textDecorationLine: 'underline',
        fontSize: 16,
        fontStyle:"italic"
    },
    link:{
        flexDirection:"row",
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
        paddingLeft:20,
        paddingRight:10,
        backgroundColor: 'white',
        borderRadius: 20,
        marginBottom:-15,
    }
});

export default ChangePassword;
