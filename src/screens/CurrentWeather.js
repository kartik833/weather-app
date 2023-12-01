/* eslint-disable react/prop-types */
// import React from 'react'
// import { View,SafeAreaView,Text,StyleSheet,Platform} from 'react-native'
// import { Feather } from '@expo/vector-icons';
// import RowText from '../components/RowText';
// import { weatherType } from '../utilities/weatherType';

// function CurrentWeather({weatherData}) {
//   console.log(weatherData);
//   return (
//     <SafeAreaView style={styles.wrapper} >
//     <View style={styles.container}>
//     <Feather name="sun" size={100} color="black" />
//       <Text style={styles.temp}>6</Text>
//       <Text style={styles.feels}>FEELS LIKE 5</Text>
//       <RowText
//       messageOne= { 'High: 8'}
//       messageTwo= { 'Low: 6'}
//       containerStyles={styles.highLowWrapper}
//       messageOneStyles={styles.highLow}
//       messageTwoStyles={styles.highLow}
//       />
//       </View>
//       <RowText
//       messageOne= {'Its sunny'}
//       messageTwo= {weatherType['Thunderstorm'].message}
//       containerStyles={styles.bodyWrapper}
//       messageOneStyles={styles.description}
//       messageTwoStyles={styles.message}
//       />
//      </SafeAreaView>
//   )
// }

// const styles=StyleSheet.create({
//   wrapper:{
//     flex:1,
//     paddingTop: Platform.OS === 'android' ? 25 : 0, // Adjust padding for Android devices
//     backgroundColor:'pink',
//   },

//   container:{
//     flex:1,
//     alignItems:'center',
//     justifyContent:'center'
//   },

//   temp:{
//     fontSize:48,
//     color:'black'
//   },

//   feels:{
//     fontSize:30,
//     // color:'brown'
//   },

//   highLow:{
//     color:'black',
//     fontSize:20
//   },

//   highLowWrapper:{
//     flexDirection:'row'
//   },
//   bodyWrapper:{
//     justifyContent:'flex-end',
//     alignItems:'flex-start',
//     paddingLeft:25,
//     marginBottom:40
//   },

//   decription:{
//     fontSize:48
//   },

//   message:{
//     fontSize:30
//   }
  
// } )

// export default CurrentWeather


import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'

const CurrentWeather = ({ weatherData }) => {
  const { main: { temp, feels_like, temp_max, temp_min }, weather } = weatherData
  const weatherCondition = weather[0].main

  const {
    wrapper,
    container,
    temperature,
    feels,
    hiLowWrapper,
    hiLow,
    bodyWrapper,
    description,
    message
  } = styles

  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition]?.backgroundColor }
      ]}
    >
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition]?.icon}
          size={100}
          color="white"
        />
        <Text style={temperature}>{`${temp}°`}</Text>
        <Text style={feels}>{`Feels like: ${feels_like}°`}</Text>
        <RowText
          messageOne={`High: ${temp_max}° `}
          messageTwo={`Low: ${temp_min}°`}
          containerStyles={hiLowWrapper}
          messageOneStyles={hiLow}
          messageTwoStyles={hiLow}
        />
      </View>
      <RowText
        messageOne={weather[0]?.description}
        messageTwo={weatherType[weatherCondition]?.message}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  temperature: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },
  hiLow: {
    color: 'black',
    fontSize: 20
  },
  hiLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 43
  },
  message: {
    fontSize: 25
  }
})
export default CurrentWeather