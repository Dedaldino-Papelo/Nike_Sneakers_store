import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./styles";
import Logo from "../../assets/shoesss-removebg-preview 1.svg";
import { MotiView } from 'moti'

const index = () => {
  return (
    <MotiView 
      style={styles.container}
      from={{
        rotateX: '-100deg',
        opacity: 0
      }}
      animate={{
        rotateX: '0deg',
        opacity: 1
      }} 
      transition={{
          type:"timing",
          duration: 900,
          delay: 300,
      }}
      >
      <View style={styles.texts}>
        <Text style={styles.text}>DON’T TRY</Text>
        <Text style={[styles.text, { fontSize: 30, fontWeight: "900" }]}>
          JUST DO IT.
        </Text>
      </View>
      <View style={styles.ButtonSneaker}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Order Now</Text>
        </TouchableOpacity>
        <Logo style={styles.image} width={278} height={146} />
      </View>
    </MotiView>
  );
};

export default index;
