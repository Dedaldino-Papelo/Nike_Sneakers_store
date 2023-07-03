import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles';
import { AntDesign, FontAwesome  } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { MotiView } from 'moti'

const Index = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <MotiView
    from={{
      translateX: -300,
    }} 
    animate={{
      translateX: 0,
    }}
    transition={{
      type:"timing",
      duration: 800,
      delay: 350,
    }}
      style={styles.container}>
        <AntDesign 
            onPress={() => navigation.goBack() }
            name="left" 
            size={24} 
            color="#475F7D" />
        <Image 
            source={require("../../assets/Nike.png")} />
        <FontAwesome 
            name="shopping-bag" 
            size={24} 
            color="#475F7D" />
    </MotiView>
  )
}

export default Index