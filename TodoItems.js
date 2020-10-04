import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function TodoItems({item,pressHandler}){

    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
          <View style={styles.item}>
            <MaterialCommunityIcons name="delete-circle-outline" size={18} color="cadetblue" />
            <Text style={styles.text}>{item.text}</Text>
          </View>
        
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    item: {
      flexDirection: 'row',
      padding: 16,
      marginTop: 16,
      borderColor: '#bbb',
      borderWidth: 1,
      borderRadius: 1,
      borderRadius: 10,
      borderColor: 'cadetblue'      
    },

    text: {
      marginLeft: 10,
    }
  });