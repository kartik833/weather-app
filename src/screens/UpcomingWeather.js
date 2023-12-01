/* eslint-disable react/prop-types */
// import React from 'react'
// import { StyleSheet } from 'react-native'
// import { Text, FlatList, View } from 'react-native'
// import { SafeAreaView, Platform } from 'react-native'
// import { Feather } from '@expo/vector-icons'
// import { StatusBar } from 'react-native'
// import { ImageBackground } from 'react-native'
// import ListItem from '../components/ListItems'

// const DATA = [
//   {
//     dt_txt: '2023-06-18 12:00:00',
//     main: {
//       temp_max: 8.55,
//       temp_main: 7.55
//     },
//     weather: [
//       {
//         main: 'Clear'
//       }
//     ]
//   },
//   {
//     dt_txt: '2023-06-18 15:00:00',
//     main: {
//       temp_max: 8.15,
//       temp_main: 4.55
//     },
//     weather: [
//       {
//         main: 'Cloudy'
//       }
//     ]
//   }
// ]


// function UpcomingWeather() {
//   const renderItem = ({ item }) => (
//     <ListItem
//       condition={item.weather[0].main}
//       dt_txt={item.dt_txt}
//       min={item.main.temp_min}
//       max={item.main.temp_max}
//     />
//   )
//   return (
//     <SafeAreaView style={styles.container}>
//         <ImageBackground
//         // eslint-disable-next-line no-undef
//         source={require('../../assets/upcoming-background.jpg')} 
//         style={styles.image}
//         >
//         <Text>Upcoming Weather</Text>
//         <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.dt_txt}
//         />
//         </ImageBackground>
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // paddingTop: Platform.OS === 'android' ? 25 : 0, // Adjust padding for Android devices
//     // marginTop: StatusBar.currentHeight || 0,
//     // backgroundColor: 'royalblue'
//   },

 
//     image:{
//         flex:1
//     }

// })

// export default UpcomingWeather


import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
  ImageBackground
} from 'react-native'
import ListItem from '../components/ListItems'

const UpcomingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )

  const { container, image } = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        style={image}
        source={require('../../assets/upcoming-background.jpg')}
      >
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue'
  },
  image: {
    flex: 1
  }
})

export default UpcomingWeather