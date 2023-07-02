import { View, Text,ImageSourcePropType, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from './style'

type props = {
  img: ImageSourcePropType,
  setSneaker: any
}

const Index = ({ img, setSneaker }: props) => {
  return (
    <TouchableWithoutFeedback onPress={() => setSneaker(img) } style={styles.container}>
      <Image  style={styles.img} source={img} />
    </TouchableWithoutFeedback>
  )
}

export default Index