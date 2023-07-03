import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'
import { AntDesign,Octicons  } from '@expo/vector-icons';
import { MotiView } from 'moti'

const Index = () => {
  return (
    <MotiView
      from={{
        translateY: -150,
        opacity: 0
      }}
      animate={{
        translateY: 0,
        opacity: 1
      }} 
      transition={{ 
        type: 'timing',
        duration: 800,
        delay: 300
      }}
      style={styles.container}>
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
    </MotiView>
  )
}

export default Index