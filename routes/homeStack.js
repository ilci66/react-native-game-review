import React from 'react';
import Home from '../screens/home';
import About from '../screens/about';
import ReviewDetails from '../screens/reviewDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function MyStack() {
  
  return (
      <Stack.Navigator initialRouteName="Home"> 
        {/* The name property apppers at the top like the title in html head */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
      </Stack.Navigator>
  );
}

export default MyStack;