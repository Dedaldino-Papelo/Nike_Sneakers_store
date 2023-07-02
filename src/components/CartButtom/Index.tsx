import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { FontAwesome  } from '@expo/vector-icons';

type props = {
  price: number
}

const Index = ({ price }: props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.price}>
        <Text style={styles.Textprice}>$ {price}</Text>
        </TouchableOpacity>
      <TouchableOpacity style={styles.cart}>
      <FontAwesome 
            name="shopping-bag" 
            size={24} 
            color="#475F7D" />
        <Text style={styles.cartText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Index