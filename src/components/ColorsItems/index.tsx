import { View, Text,ImageSourcePropType, Image } from 'react-native'
import React from 'react'
import styles from './style'

type props = {
  img: ImageSourcePropType
}

const Index = ({ img }: props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={img} />
    </View>
  )
}

export default Index