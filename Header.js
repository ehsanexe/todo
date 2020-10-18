import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts,DancingScript_700Bold } from '@expo-google-fonts/dancing-script';
import { AppLoading } from 'expo';

export default function Header(){

    let [fontsLoaded] = useFonts({
        DancingScript_700Bold 
    });

    if (!fontsLoaded) {
      return <AppLoading />;
    }
  
    return(
        <View style={styles.header}>
        <Text style={styles.title}>Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'white',
        
    },
    title: {
        fontFamily: 'DancingScript_700Bold',
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
        
        
    }

})