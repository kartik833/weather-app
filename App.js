/* eslint-disable react/react-in-jsx-scope */
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import { View } from 'react-native'
import { ActivityIndicator } from 'react-native'
import { StyleSheet } from 'react-native'
import useGetWeather from './src/hooks/useGetWeather'
import { Platform } from 'react-native'
import ErrorItem from './src/components/ErrorItem'
// import {TEST_KEY} from "@env"


function App() {

  // console.log(TEST_KEY);
  const[loading,error,weather]=useGetWeather()

  // console.log(loading,error,weather);

  if(weather && weather.list)
  {
    return (
      <NavigationContainer>
        <Tabs weather={weather}/>
      </NavigationContainer>
    )
  }
    return(
    <View style={styles.container}>
     {loading? <ActivityIndicator size={'large'} color={'blue'}/>: <ErrorItem/>}
    </View>
    )
  }
 

const styles=StyleSheet.create({
  container:{
    paddingTop: Platform.OS === 'android' ? 25 : 0, // Adjust padding for Android devices
    flex:1,
    justifyContent:'center',  
  }
})


export default App