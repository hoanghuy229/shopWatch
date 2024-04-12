
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

const DrawerContent = (props:any) => {
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
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => props.navigation.navigate('UserDetail')}
        >
        <View style={styles.row}>   
            <Ionicons name="person-outline" size={30} color="black" />
            <Text style={styles.menuItemText}>Thông tin người dùng</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => props.navigation.navigate('Login')}
        >
        <View style={styles.row}>
            <Ionicons name="log-in-outline" size={30} color="black" />
            <Text style={styles.menuItemText}>Đăng nhập</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => props.navigation.navigate('Home')}
        >
        <View style={styles.row}>
            <Ionicons name="log-out-outline" size={30} color="black" />
            <Text style={styles.menuItemText}>Đăng xuất</Text>
        </View>
        </TouchableOpacity>
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
