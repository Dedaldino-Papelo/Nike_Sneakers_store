import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './styles'

const index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.texts}>
        <Text style={styles.text}>DON’T TRY</Text>
        <Text style={styles.text}>JUST DO IT.</Text>
      </View>
      <View style={styles.ButtonSneaker}>
        <TouchableOpacity style={styles.button}>
            <Text>Order Now</Text>
          </TouchableOpacity>
          <Image source={require("../../assets/sneakers.png")} />
      </View>
    </View>
  )
}

export default index