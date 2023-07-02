import { View, Text, Image,ImageSourcePropType, FlatList } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import styles from './styles'
import DetailsHeader from '../../components/DetailsHeader/index'
import ColorItems from '../../components/ColorsItems/index'

const Index = ({ route }: any) => {
  const{ title, price, src, colors } = route.params

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
        <View style={styles.colorsWrapper}>
          <Text style={styles.colorText}>Select Color</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={colors}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ColorItems 
            key={item} 
            img={item.img} /> }
            />
        </View>
        <View style={styles.colorsWrapper}>
          <Text style={styles.colorText}>Select Size</Text>
        </View>
      
      </View>
    </View>
  )
}

export default Index