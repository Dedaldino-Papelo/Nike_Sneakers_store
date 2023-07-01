import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import Header from '../../components/Header'
import Category from '../../components/category/Index'
import Banner from '../../components/Banner/index'

const Index = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Category />
      <Banner />
    </View>
  )
}

export default Index