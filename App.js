import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import Profile from './src/screens/profile'
export default function App() {

  useEffect(()=>{
    setTimeout(()=>{
      SplashScreen.hide();
    },100)
  },[])

  return (
    <View style={styles.mainContainer}>
<Profile/>
        {/* <View style={styles.headerContainer}>
            <View>
                <Image source={require('./src/assets/appLogo.png')}/>
                <View style={{marginTop:70}}>
                  <Text style={styles.headerText}>Sign in to your</Text>
                  <Text style={styles.headerText}>Account</Text>
                  <Text style={[styles.descriptionText,{marginTop: 10}]}>Enter your email and password to log in </Text>
                </View>
            </View>
            <View>
                <Image 
                style={{top:-8,left: -50}}
                 source={require('./src/assets/Pattern.png')}/>
            </View>
        </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  headerContainer: {
    flexDirection: 'row',
    marginTop: 35,
    marginLeft: 20,
    justifyContent: 'space-between'
  },
  headerText: {
    fontSize: 40,
    fontWeight: '700'
  },
  descriptionText: {
    fontSize: 16,
    color: '#6E7591'
  }
})