import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'

const Index = () => {
  return (
    <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{gap: 16, marginTop: 16}} 
        style={styles.container}
        >
        <TouchableOpacity style={styles.btnSize}>
            <Text style={styles.btnText}>39</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSize}>
            <Text style={styles.btnText}>40</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btnSize, {borderColor: "#FC783F"}]}>
            <Text style={styles.btnText}>41</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSize}>
            <Text style={styles.btnText}>42</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSize}>
            <Text style={styles.btnText}>43</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSize}>
            <Text style={styles.btnText}>44</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSize}>
            <Text style={styles.btnText}>45</Text>
        </TouchableOpacity>
    </ScrollView>
    
  )
}

export default Index