import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { RegisterDTO } from '../dtos/RegisterDTO';
import { register } from '../apis/UserApi';
import { ScrollView } from 'react-native-gesture-handler';

const Register = (props:any) => {
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [phoneNumber,setPhoneName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [rePassword,setRePassword] = useState('');



    const handleRegister = async () => {
        if(firstName === '' || lastName === '' || phoneNumber === '' || email === '' || password === '' || rePassword === ''){
            alert('điền đầy đủ thông tin!!!');
            return;
        }
        if(password != rePassword){
            alert('mật khẩu không khớp!!!');
            return;
        }
        
        const registerDTO:RegisterDTO = {
            phone_number:phoneNumber,
            first_name:firstName,
            last_name:lastName,
            email:email,
            password:password,
        }
        try{
            const response:string = await register(registerDTO);
            if(!response.includes("register success")){
                alert(`${response}`)
            }
            else{
                alert("đăng ký thành công");
                props.navigation.navigate('Home');
            }
        }
        catch (error:any) {
            Alert.alert(
                'Lỗi',
                error.message,
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
            <ScrollView style={styles.card}>
                <Text style={styles.login}>Register</Text>


                <View style={styles.rowLabel}>
                    <Text style={styles.label}>tên:</Text>
                    <Text style={styles.labelRight}>họ:</Text>
                </View>
                <View style={styles.row}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nhập tên"
                        value={firstName}
                        onChangeText={setFirstName}
                    />
                    <TextInput
                        style={styles.inputRight}
                        placeholder="Nhập họ"
                        value={lastName}
                        onChangeText={setLastName}
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
                        value={phoneNumber}
                        onChangeText={setPhoneName}
                    />
                    <TextInput
                        style={styles.inputRight}
                        placeholder="Nhập email"
                        value={email}
                        onChangeText={setEmail}
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
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TextInput
                        style={styles.inputRight}
                        secureTextEntry
                        placeholder="Nhập lại mật khẩu"
                        value={rePassword}
                        onChangeText={setRePassword}
                    />
                </View>
                
                <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
                    <Text style={styles.loginButtonText}>Đăng ký</Text>
                </TouchableOpacity>
            </ScrollView>
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
        marginTop:50,
        fontSize:50,
        color:"darkorange"
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
        paddingLeft:20,
        paddingRight:10,
        backgroundColor: 'white',
        borderRadius: 20,
        marginBottom:-15,
    }
});

export default Register;
