import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, Keyboard } from 'react-native';
import Header from './Header'
import TodoItems from './TodoItems'
import AddTodo from './AddTodo'
import AsyncStorage from '@react-native-community/async-storage';

export default function App() {

  const [todos,setTodos] = useState([
    {text: "buy milk", key: '1'},
    {text: "do homework", key: '2'},
    {text: "take a shower", key: '3'}
  ])

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    storeData()
  }, [todos])

  const storeData = async () => {
    try {
      const jsonValue = JSON.stringify(todos)
      
      //alert(jsonValue)
      await AsyncStorage.setItem('todo', jsonValue)
      //alert("store succesful"+jsonValue)
    } catch (e) {
      // saving error
      alert(e)
    }
  }
  
  
const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('todo')
    //alert(jsonValue)
    return jsonValue != null ? setTodos(JSON.parse(jsonValue) )  : null;
  } catch(e) {
    // error reading value
    alert(e)
  }
}


  const pressHandler = (key) =>{
    setTodos( prevTodos => (
      prevTodos.filter( todo => (todo.key != key) )
    ))

    //storeData();
  }

  const submitHandler = (addTodo) =>{
    Keyboard.dismiss()
    if (addTodo.length > 0){
      setTodos( prevTodos => ([...prevTodos,{text:addTodo, key: Math.random().toString()}]));
      //alert(todos)
      //storeData();
    }
    else{
      Alert.alert( 'Error' , 'Enter Add todo' , [{text: 'Understood'}])
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItems item={item} pressHandler={pressHandler}/>
              )}
            />
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
