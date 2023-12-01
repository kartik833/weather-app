/* eslint-disable react/prop-types */
// /* eslint-disable no-undef */
// import React from 'react'
// import { ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
// import { Feather } from '@expo/vector-icons';
// import IconText from '../components/IconText';

// function City() {
//     // console.log('high there');
//   return (
//     <SafeAreaView style={styles.container}>
//         <ImageBackground source={require('../../assets/city-background.jpg')} style={styles.imageLayout}>  
//         <Text style={[styles.cityName,styles.cityText]}>London</Text>
//         <Text style={[styles.countryName,styles.cityText]}>UK</Text>
//         <View style={styles.populationWrapper}>
//         <IconText
//         iconName={'user'}
//         iconColor={'white'}
//         bodyText={'8000'}
//         bodyTextStyles={styles.populationText}/>
//         </View>

//         <View style={styles.riseSetWrapper}>
//         <IconText
//         iconName= {'sunrise'}
//         iconColor={'white'}
//         bodyText={'10:46:58am'}
//         bodyTextStyles={styles.riseSetText}/>

//         <IconText
//         iconName= {'sunset'}
//         iconColor= {"white"}
//         bodyText={'17:28:15pm'}
//         bodyTextStyles={styles.riseSetText}/>
//         </View>


//         </ImageBackground>
//     </SafeAreaView>
//   )
// }

// const styles=StyleSheet.create({

//     container:{
//         flex:1,
//         // marginTop:StatusBar.currentHeight||0
//     },

//     imageLayout:{
//         flex:1,
//     },

//     cityName: {
//         fontSize: 40,
//     },
//         countryName:
//         {
//         fontSize: 38,
//         },

//         cityText:{
//             justifyContent: 'center',
//             alignSelf: 'center',
//             fontSize: 40,
//             fontWeight: 'bold',
//             color: 'white'
//         },

//         populationWrapper: {
//             flexDirection: 'row',
//             alignItems: 'center',
//             justifyContent: 'center',
//             marginTop: 30
//             },

//             populationText: {
//             fontSize: 25,
//             marginLeft: 7.5,
//             color: 'red',
//             fontWeight: 'bold'
//             },

//             riseSetWrapper: {
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 justifyContent: 'space-around',
//                 marginTop: 30
//                 },

//                 riseSetText: {
//                 fontSize: 20,
//                 color: 'white',
//                 fontWeight: 'bold'
//             },

// })


// export default City



import React from 'react'
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  View
} from 'react-native'
import moment from 'moment'
import IconText from '../components/IconText'

const City = ({ weatherData }) => {
  const { name, country, population, sunrise, sunset } = weatherData
  const {
    container,
    cityName,
    cityText,
    countryName,
    imageLayout,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    rowLayout
  } = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/city-background.jpg')}
        style={imageLayout}
      >
        <Text style={[cityName, cityText]}>{name}</Text>
        <Text style={[countryName, cityText]}>{country}</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={'user'}
            iconColor={'red'}
            bodyText={`Population: ${population}`}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={'sunrise'}
            iconColor={'white'}
            bodyText={moment(sunrise).format('h:mm:ss a')}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={'sunset'}
            iconColor={'white'}
            bodyText={moment(sunset).format('h:mm:ss a')}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0
  },
  imageLayout: {
    flex: 1
  },
  cityName: {
    fontSize: 40
  },
  countryName: {
    fontSize: 30
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red'
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  riseSetText: {
    fontSize: 20,
    color: 'white'
  }
})

export default City
