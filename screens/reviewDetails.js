import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ navigation, route }) {

  console.log("params ==>",route.params)

  return (
    <View style={globalStyles.container}>
      {/* <Text>ReviewDetails Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Text>Get rid of all the pages but the first one</Text>
      <Button title="Pop to Top bb!" onPress={() => navigation.popToTop()} /> */}
      {/* <Text>Some details about the game</Text> */}
      <Text>{ route.params.title }</Text>
      <Text>{ route.params.body }</Text>
      <Text>{ route.params.rating }</Text>

    </View>
  );
}