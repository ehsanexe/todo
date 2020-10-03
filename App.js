import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './Header'
import TodoItems from './TodoItems'
import AddTodo from './AddTodo'

export default function App() {

  const [todos,setTodos] = useState([
    {text: "buy milk", key: '1'},
    {text: "do homework", key: '2'},
    {text: "take a shower", key: '3'}
  ])

  const pressHandler = (key) =>{
    setTodos( prevTodos => (
      prevTodos.filter( todo => (todo.key != key) )
    ))
  }

  const submitHandler = (addTodo) =>{
    setTodos( prevTodos => ([...prevTodos,{text:addTodo, key: Math.random().toString()}]))
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
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
