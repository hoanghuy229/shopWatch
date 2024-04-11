import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Cart from './screens/Cart';
import OrderConfirm from './screens/OrderConfirm';
import UserDetail from './screens/UserDetail';
import ChangePassword from './screens/ChangePassword';
import OrderHistory from './screens/OrderHistory';
import ProductDetail from './screens/ProductDetail';
import ProductList from './screens/ProductList';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductList">
        {/* <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/> */}
        {/* <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/> */}
        {/* <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/> */}
        {/* <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }}/> */}
        {/* <Stack.Screen name="OrderConfirm" component={OrderConfirm} options={{ headerShown: false }}/> */}
        {/* <Stack.Screen name="UserDetail" component={UserDetail} options={{ headerShown: false }}/> */}
        {/* <Stack.Screen name="UserChangePasswordetail" component={ChangePassword} options={{ headerShown: false }}/> */}
        {/* <Stack.Screen name="OrderHistory" component={OrderHistory} options={{ headerShown: false }}/> */}
        {/* <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ headerShown: false }}/> */}
        <Stack.Screen name="ProductList" component={ProductList} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
