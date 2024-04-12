
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DrawerContent = (props:any) => {
  const [token,setToken] = useState<String | null>(null);

  useEffect(() => {
    const getToken = async () => {
      const userToken = await AsyncStorage.getItem('token');
      setToken(userToken)
    };
    getToken();
  },[token]);

  const handleLogOut = async () => {
    await AsyncStorage.removeItem('token');
    setToken(null);
    props.navigation.navigate('Login', { onLoginSuccess: handleLoginSuccess });
  }
  const handleLoginSuccess = async () => {
    const userToken = await AsyncStorage.getItem('token');
    setToken(userToken);
  };

  const handleUpdateUser = async () => {
    await AsyncStorage.removeItem('token');  
    setToken(null); 
  };
  
  return (
    <View style={styles.container}>
      <DrawerContentScrollView>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => props.navigation.navigate('Home')}
        >
        <View style={styles.row}>
            <Ionicons name="home-outline" size={25} color="black" />
            <Text style={styles.menuItemText}>Trang chủ</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => props.navigation.navigate('ProductList')}
        >
        <View style={styles.row}>
            <Ionicons name="list-outline" size={30} color="black" />
            <Text style={styles.menuItemText}>Danh sách sản phẩm</Text>
        </View>
        </TouchableOpacity>
       {
        token == null ? 
          (
            <View>
             <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                props.navigation.navigate('Login', { onLoginSuccess: handleLoginSuccess });
              }}
            >
              <View style={styles.row}>
                  <Ionicons name="log-in-outline" size={30} color="black" />
                  <Text style={styles.menuItemText}>Đăng nhập</Text>
              </View>
            </TouchableOpacity>

            </View>
          )
          :
          (
            <View>
               <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => props.navigation.navigate('UserDetail', { onUpdateUser: handleUpdateUser })}
                >
                <View style={styles.row}>   
                    <Ionicons name="person-outline" size={30} color="black" />
                    <Text style={styles.menuItemText}>Thông tin người dùng</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => props.navigation.navigate('OrderHistory')}
                >
                <View style={styles.row}>   
                    <Ionicons name="calendar-outline" size={25} color="black" />
                    <Text style={styles.menuItemText}>Lịch sử đặt hàng</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => props.navigation.navigate('Home')}
                >
                <View style={styles.row}>
                    <Ionicons name="log-out-outline" size={30} color="black" />
                    <Text style={styles.menuItemText} onPress={handleLogOut}>Đăng xuất</Text>
                </View>
                </TouchableOpacity>
            </View>
          )
       }
        <TouchableOpacity
          style={styles.menuItem}
        >
        <View style={styles.row}>
            <Ionicons name="information-circle-outline" size={30} color="black" />
            <Text style={styles.menuItemText}>About Us</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
        >
        <View style={styles.row}>
            <Ionicons name="notifications-circle-outline" size={30} color="black" />
            <Text style={styles.menuItemText}>Thông báo</Text>
        </View>
        </TouchableOpacity>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor:"#faffe9",
  },
  menuItem: {
    marginTop:50,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuItemText: {
    fontSize: 18,
    marginLeft:10,
  },
  row:{
    flexDirection:"row"
  }
});

export default DrawerContent;
