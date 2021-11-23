import React from 'react';
import Home from '../screens/home';
import About from '../screens/about';
import ReviewDetails from '../screens/reviewDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function MyStack() {
  
  return (
      <Stack.Navigator initialRouteName="Home" 
      // This applies to all 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      > 
      
        {/* The name property apppers at the top like the title in html head */}
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{title: 'Games',}} 
          />
        <Stack.Screen 
          name="About" 
          component={About} 
          options={{title: 'About',}}
        />
        <Stack.Screen 
          name="ReviewDetails" 
          component={ReviewDetails} 
          options={{title: 'Review Details',}}
        />
      </Stack.Navigator>
  );
}

export default MyStack;