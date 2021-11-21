import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>This is the home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    padding: 24,
  }
})
