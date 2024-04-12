import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Cart from './screens/Cart';
import OrderConfirm from './screens/OrderConfirm';
import UserDetail from './screens/UserDetail';
import OrderHistory from './screens/OrderHistory';
import ProductDetail from './screens/ProductDetail';
import ProductList from './screens/ProductList';
import PopularProducts from './screens/PopularProducts';
import DrawerContent from './screens/DrawContent';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/> 
        <Drawer.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Drawer.Screen name="Register" component={Register} options={{ headerShown: false }}/> 
        <Drawer.Screen name="Cart" component={Cart} options={{ headerShown: false }}/> 
        <Drawer.Screen name="OrderConfirm" component={OrderConfirm} options={{ headerShown: false }}/>
        <Drawer.Screen name="UserDetail" component={UserDetail} options={{ headerShown: false }}/> 
        <Drawer.Screen name="OrderHistory" component={OrderHistory} options={{ headerShown: false }}/> 
        <Drawer.Screen name="ProductDetail" component={ProductDetail} options={{ headerShown: false }}/>
        <Drawer.Screen name="ProductList" component={ProductList} options={{ headerShown: false }}/>
        <Drawer.Screen name="PopularProducts" component={PopularProducts} options={{ headerShown: false }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
