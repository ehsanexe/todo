import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';

export default function AddTodo({submitHandler}) {

    const [addTodo,setTodo] = useState()

    const changeHandler = (text) => {
        setTodo(text)
    }

    return (
        <View>
            <TextInput style={styles.input} onChangeText={changeHandler}/>
            <Button color='mediumturquoise' onPress={() => submitHandler(addTodo)} title='add todo' />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
      marginBottom: 10,
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderBottomWidth: 1,
      borderBottomColor: 'cadetblue',
    },
  });