/* eslint-disable react/prop-types */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function RowText(props) {

    const{containerStyles,messageOne,messageOneStyles,messageTwo,messageTwoStyles}=props
  return (
    <View style={containerStyles}>
      <Text
       style={messageOneStyles}>{messageOne} </Text>
      <Text style={messageTwoStyles}>{messageTwo} </Text>
    </View>
  )
}


export default RowText