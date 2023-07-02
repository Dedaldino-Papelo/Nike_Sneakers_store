import { View, Text, Image,ImageSourcePropType } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import styles from './styles'
import DetailsHeader from '../../components/DetailsHeader/index'

const Index = ({ route }: any) => {
  const{ title, price, src } = route.params

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <DetailsHeader />
        <View style={styles.imageContainer}>
          <Text style={styles.text}>{title}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.img} source={src} />
        </View>
      </View>
      <View style={styles.footer}>
      </View>
    </View>
  )
}

export default Index