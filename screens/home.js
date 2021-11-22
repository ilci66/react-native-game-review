import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';



export default function Home({ navigation }) {

  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);
  

  return (
    <View style={globalStyles.container}>
      {/* <Text style={globalStyles.titleText}>Home Screen</Text> */}
      {/* <Button
        title="Go to Details"
        // onPress={() => navigation.navigate('ReviewDetails')}
        // With push even when I'm on the page that I'm pushing, the page gets added to the stack  
        onPress={() => navigation.push('ReviewDetails')}
      /> */}
      <FlatList data={reviews} renderItem={({ item }) => (
        // Second parameter sends the data
        // Well even though in the toruial it was carriend in the navition,
        // In this example it threw an error so, look for the data in route as I did here in the future
        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
          <Text style={globalStyles.titleText}>{ item.title }</Text>
        </TouchableOpacity>
      )} />
    </View>
  );
}