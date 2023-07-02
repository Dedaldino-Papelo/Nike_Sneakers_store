import { View, Image, Text, ImageSourcePropType,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles';
import { Entypo } from '@expo/vector-icons'; 
import { useNavigation, NavigationProp } from '@react-navigation/native';

export type props = {
    title: string;
    price: number;
    src: ImageSourcePropType
}

const index = ({ title,price,src }: props) => {

  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Details", {
        title,
        price,
        src
      })
    }>
      <View style={styles.priceWrapper}>
        <Text style={styles.price}>$ {price}</Text>
        <Entypo name="heart" size={24} color="#5D6B7D" />
      </View>
      <View style={styles.textInfo}>
        <Image source={src} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default index