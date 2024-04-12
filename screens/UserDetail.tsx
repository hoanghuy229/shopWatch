import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image, Alert } from 'react-native';
import { getUserDetail, updateUserDetail } from '../apis/UserApi';
import { CustomerDTO } from '../dtos/CustomerDTO';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';

const UserDetail = (props:any) => {
    const [userId,setUserId] = useState(0);
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [phoneNumber,setPhoneName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [rePassword,setRePassword] = useState('');

    const isFocused = useIsFocused(); // Sử dụng useIsFocused để kiểm tra trạng thái focus

    useEffect(() => {
        getUserDetail()
        .then(
            (data) => {
                setUserId(data.id);
                setPhoneName(data.phone_number);
                setFirstName(data.first_name);
                setLastName(data.last_name);
                setEmail(data.email);
                setPassword(data.password);
            }
        )
        .catch(error => console.log(`${error}`))
    },[isFocused])

    const handleDetailChange = async () => {
        if(firstName === '' || lastName === '' || email === '' || password === '' || rePassword === ''){
            alert('điền đầy đủ thông tin!!!');
            return;
        }
        if(password != rePassword){
            alert('mật khẩu không khớp!!!');
            return;
        }

        const customerDTO:CustomerDTO = {
            first_name:firstName,
            last_name:lastName,
            email:email,
            password:password,
            phone_number:phoneNumber,
        }
        try{
            const response:string = await updateUserDetail(userId,customerDTO);
            if(!response.includes("update account success")){
                alert(`${response}`)
            }
            else{
                props.route.params.onUpdateUser();
                alert("cập nhật thành công đăng nhập lại")
                setRePassword('');
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
            <Text style={styles.welcome} onPress={() => props.navigation.navigate('Home')}>User Information</Text>
            <ScrollView style={styles.card}>
                <Image source={require("../designs/user.jpg")} style={styles.avatar}></Image>


                <View style={styles.rowLabel}>
                    <Text style={styles.label}>tên:</Text>
                    <Text style={styles.labelRight}>họ:</Text>
                </View>
                <View style={styles.row}>
                    <TextInput
                        style={styles.input}
                        value={firstName}
                        onChangeText={setFirstName}
                    />
                    <TextInput
                        style={styles.inputRight}
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
                        value={phoneNumber}
                        readOnly
                    />
                    <TextInput
                        style={styles.inputRight}
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>


                <View style={styles.rowLabel}>
                    <Text style={styles.label}>mật khẩu:</Text>
                    <Text style={{marginLeft:125}}>Nhập lại mật khẩu:</Text>
                </View>
                <View style={styles.row}>
                    <TextInput
                        style={styles.input}
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TextInput
                        style={styles.inputRight}
                        secureTextEntry
                        placeholder='nhập lại mật khẩu'
                        value={rePassword}
                        onChangeText={setRePassword}
                    />
                </View>
                
                
                <TouchableOpacity style={styles.loginButton} onPress={handleDetailChange}>
                    <Text style={styles.loginButtonText}>cập nhật</Text>
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
    avatar:{
        width:150,
        height:150,
        marginLeft:120,
        marginBottom:50,
        borderRadius:100
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
        marginTop:20
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

export default UserDetail;
