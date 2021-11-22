import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button
        title="Go to Details"
        // onPress={() => navigation.navigate('ReviewDetails')}
        // With push even when I'm on the page that I'm pushing, the page gets added to the stack  
        onPress={() => navigation.push('ReviewDetails')}
      />
    </View>
  );
}