/* eslint-disable react/prop-types */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons';

function IconText(props) {
    const{iconColor,iconName,bodyText,bodyTextStyles}=props
  return (
    <View style={styles.container}>
    <Feather name={iconName} size={44} color={iconColor} />
    <Text style={[styles.textTheme,bodyTextStyles]}>{bodyText}</Text>
    </View>
  )
}

const styles=StyleSheet.create({

    container:{
        alignItems:'center'
    },

    textTheme:{
        fontWeight:'bold',
    }
})

export default IconText