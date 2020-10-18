import React from 'react';
import {StyleSheet,TouchableOpacity,Text,View} from 'react-native';

export default function FlatButton({title,onPress}) {

    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
    
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 14,
        paddingVertical: 4,
        paddingHorizontal: 10,
        backgroundColor: 'white',
    },

    buttonText:{
        color: 'black',
       // fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',
    }
})