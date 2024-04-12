import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Alert } from 'react-native';
import { login } from '../apis/UserApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginDTO } from '../dtos/LoginDTO';

const Login = (props:any) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if(phoneNumber == '' || password == ''){
            alert("nhập thông tin");
            return;
        }
        try{
            const loginDTO:LoginDTO = {
                phone_number:phoneNumber,
                password:password
            }
                const response = await login(loginDTO);
                const token = response;
                await AsyncStorage.setItem('token',token);
                props.route.params.onLoginSuccess(); 
                props.navigation.navigate('Home');
        }
        catch(error){
            Alert.alert(
                'Lỗi',
                'Mật khẩu không chính xác. Vui lòng thử lại.',
                [
                  {
                    text: 'Đóng',
                    onPress: () => console.log('Đóng'),
                    style: 'cancel',
                  },
                ],
                { cancelable: false }
              );
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.welcome} onPress={() => props.navigation.navigate('Home')}>Welcome</Text>
            <View style={styles.card}>
                <Text style={styles.login}>Login</Text>
                <Text style={styles.label}>Số điện thoại</Text>
                <TextInput
                    style={styles.input}
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    keyboardType="phone-pad"
                    placeholder="Nhập số điện thoại"
                />
                <Text style={styles.label}>Mật khẩu</Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    placeholder="Nhập mật khẩu"
                />
                <View style={styles.link}>
                    <Text style={styles.label}>chưa có tài khoản?</Text>
                    <TouchableOpacity style={styles.CreateAccount}>
                        <Text style={styles.forgotPasswordText} onPress={() => props.navigation.navigate('Register')}>đăng ký</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.forgotPasswordButton}>
                        <Text style={styles.forgotPasswordText}>Quên mật khẩu?</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>Đăng nhập</Text>
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
        backgroundColor: '#faffe9',
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
        color:"darkorange"
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

export default Login;
