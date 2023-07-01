import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'
import { AntDesign,Octicons  } from '@expo/vector-icons';

const Index = () => {
  return (
    <View style={styles.container}>
        <AntDesign 
            name="search1" 
            size={24} 
            color="#E0E5EB" />
        <Image 
            source={require("../../assets/Nike.png")} />
        <Octicons 
            name="bell-fill" 
            size={24} 
            color="#E0E5EB" />
    </View>
  )
}

export default Index