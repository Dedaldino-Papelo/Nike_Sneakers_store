import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import styles from './style'

const Index = () => {
  return (
    <View>
      <ScrollView
        style={styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{gap: 20}}
      >
      <TouchableOpacity style={styles.button}>
        <Text>Boots</Text>
        </TouchableOpacity> 

        <TouchableOpacity style={styles.button}>
        <Text>Sneakers</Text>
        </TouchableOpacity> 

        <TouchableOpacity style={styles.button}>
        <Text>Sandals</Text>
        </TouchableOpacity> 

        <TouchableOpacity style={styles.button}>
        <Text>Hats</Text>
        </TouchableOpacity> 

        <TouchableOpacity style={styles.button}>
        <Text>Flip-Flops</Text>
        </TouchableOpacity> 
        
    </ScrollView>
    </View>
    
  )
}

export default Index