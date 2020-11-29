import React, { useState } from 'react';
import { FlatList, StyleSheet, View, SafeAreaView, Platform, TouchableOpacity, Text } from 'react-native';
import Header from '../components/Header';
import TaskListItem from '../components/TaskListItem';
import { RecurringType } from '../models/Task';

export default function TaskListScreen({ navigation }) {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      category: 'Corolla',
      title: 'Changed oil',
      history: [
        {
          id: 1,
          date: new Date('2019-11-18')
        },
        {
          id: 2,
          description: 'Test Description Here',
          date: new Date('2020-11-18')
        }
      ]
    },
    {
      id: 2,
      category: 'House',
      title: 'Changed air filter',
      history: [
        {
          id: 3,
          date: new Date('2020-01-01')
        },
        {
          id: 4,
          description: 'Test Description Here',
          date: new Date('2020-04-01')
        }
      ],
      reminder: {
        recurringType: RecurringType.Monthly,
        frequency: 3,
        dayOfMonth: 1
      }
    }    
  ]);

  const printDate = (date: Date) => {
    return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
  }

  return (
    <SafeAreaView style={styles.container}>
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
  }
});
