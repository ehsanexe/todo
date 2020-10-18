import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {useFonts,DancingScript_400Regular,} from '@expo-google-fonts/dancing-script'
import { AppLoading } from 'expo';

export default function TodoItems({item,pressHandler}){


    let [fontsLoaded] = useFonts({
      DancingScript_400Regular,
    });

    if (!fontsLoaded) {
      return <AppLoading />;
    }

    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
          <View style={styles.item}>
            <MaterialIcons style={styles.icon} name="check-box-outline-blank" size={18} color="white" />
            <Text style={styles.text}>{item.text}</Text>
          </View>
        
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    item: {
      flexDirection: 'row',
      padding: 6,
      marginTop: 16,
      borderColor: '#bbb',
      borderBottomWidth: 1,
      borderColor: 'white'      
    },

    text: {
      marginLeft: 10,
      color: 'white',
      fontFamily: 'DancingScript_400Regular',
      fontSize: 18
    },

    icon:{
      marginTop: 6
    }
  });