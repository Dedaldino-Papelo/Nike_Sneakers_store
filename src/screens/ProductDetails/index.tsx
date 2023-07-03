import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import styles from "./styles";
import DetailsHeader from "../../components/DetailsHeader/index";
import ColorItems from "../../components/ColorsItems/index";
import Sizes from "../../components/Sizes/index";
import CartButton from "../../components/CartButtom/Index";
import { MotiImage } from 'moti'

const Index = ({ route }: any) => {
  const { title, price, src, colors } = route.params;
  const [sneaker, setSneaker] = useState(src);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <DetailsHeader />
        <View style={styles.imageContainer}>
          <Text style={styles.text}>{title}</Text>
        </View>
        <View style={styles.imageContainer}>
          <MotiImage
            from={{
              translateX: 340
            }}
            animate={{
              translateX: 0
            }} 
            transition={{
                type:"spring",
                delay: 400,
            }}
            style={styles.img} 
            source={sneaker} 
            />
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
            renderItem={({ item }) => <ColorItems key={item.id} img={item.img} setSneaker={setSneaker} />}
          />
        </View>
        <View style={styles.colorsWrapper}>
          <Text style={styles.colorText}>Select Size</Text>
          <Sizes />
        </View>

        <View style={styles.colorsWrapper}>
          <View style={styles.DescFooter}>
            <Text style={styles.Title}>Descriptions</Text>
            <Text style={styles.Title}>Delivery</Text>
            <Text style={styles.Title}>Reviews</Text>
          </View>
          <View>
            <Text style={styles.prodInfo}>
              When performance is what you’re looking for, look no further than
              the all-new Nike Air Max Plus
            </Text>
          </View>
        </View>

        <CartButton price={price} />
      </View>
    </ScrollView>
  );
};

export default Index;
