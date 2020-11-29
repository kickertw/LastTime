import React, { useState } from 'react';
import { FlatList, StyleSheet, View, SafeAreaView, Platform, TouchableOpacity, Text } from 'react-native';
import Header from '../components/Header';
import TaskListItem from '../components/TaskListItem';

export default function TaskListScreen({ navigation }) {
  const [tasks, setTasks] = useState([
    { text: 'Changed Oil', category: 'Corolla', lastDate: new Date('2019-01-01'), key: 1},
    { text: 'Changed Air Filter', category: 'House', lastDate: new Date('2020-01-01'), key: 2},
    { text: 'Changed Toothbrush', category: 'House', lastDate: new Date('2020-11-01'), key: 3}
  ]);

  const printDate = (date: Date) => {
    return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* to form */}
        <View style={styles.list}>
          <FlatList 
            data={tasks}
            renderItem={({ item }) => (
              <TaskListItem item={item} />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    marginTop: Platform.OS === 'android' ? 50 : 0
  },
  content: {
    padding: 0
  },
  list: {
    marginTop: 20
  },
  itemContainer: {
    padding: 12,
    marginBottom: 2,
    color: '#000',
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 5
  },
  itemTitle: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold'
  },
  itemDate: {
    fontStyle: 'italic',
    fontSize: 12
  }  
});
