import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles';
import { AntDesign, FontAwesome  } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';

const Index = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <View style={styles.container}>
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
    </View>
  )
}

export default Index