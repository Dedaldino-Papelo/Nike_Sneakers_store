import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Data from '../../data'
import SneakersItems from '../SneakerItems/index'

import styles from './styles'

const index = () => {
  return (
    <View>
      <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{gap: 20}}
          data={Data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <SneakersItems 
            title={item.title} 
            price={item.price} 
            src={item.src}
            colors={item.colors} />}
        />
    </View>
  )
}

export default index