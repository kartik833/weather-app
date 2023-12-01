/* eslint-disable react/prop-types */
import React from 'react'
// import { View,StyleSheet, Platform } from 'react-native'
import CurrentWeather from '../screens/CurrentWeather.js'
import UpcomingWeather from '../screens/UpcomingWeather.js'
import City from '../screens/City.js'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons';

const Tab=createBottomTabNavigator()

function Tabs({weather}) {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor:'tomato',
      tabBarInactiveTintColor:'grey',
      tabBarStyle:{
        backgroundColor:"lightblue"
      },
      headerStyle:{
        backgroundColor:'lightblue'
      },

      headerTitleStyle:{
        fontWeight:'bold',
        fontSize:25,
        color:'tomato'
      }
    }}
  >

      <Tab.Screen name={'Current'} 
      options={{
        tabBarIcon:({focused})=>{
          return(
          <Feather name={'droplet'} 
          size={24} 
          color={focused?'tomato':"black"} />
          )
        }
      }}
      >
      {()=> <CurrentWeather weatherData={weather.list[0]}/>}
      </Tab.Screen>

      <Tab.Screen name={'Upcoming'}
       options={{
        tabBarIcon:({focused})=>{
          return(
          <Feather name={"clock"} 
          size={24} 
          color={focused?'tomato':"black"} />
          )
        }
      }}
       >
        {()=> <UpcomingWeather weatherData={weather.list}/>}
       </Tab.Screen>

      <Tab.Screen name={'City'}
      options={{
        tabBarIcon:({focused})=>{
          return(
          <Feather name={"home"} 
          size={24} 
          color={focused?'tomato':"black"} />
          )
        }
      }}
       >
       {()=> <City weatherData={weather.city}/>}
       </Tab.Screen>

  </Tab.Navigator>

  )
}

export default Tabs