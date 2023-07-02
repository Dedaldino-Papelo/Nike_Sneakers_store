import { View, Text, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import styles from './style'
import Header from '../../components/Header'
import Category from '../../components/category/Index'
import Banner from '../../components/Banner/index'
import Sneaker from '../../components/sneakers/index'

const Index = () => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style='auto' />
      <Header />
      <Category />
      <Banner />
      <Sneaker />
    </ScrollView>
  )
}

export default Index