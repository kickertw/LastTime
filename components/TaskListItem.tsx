import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Task } from '../models/Task';

export default function TaskListItem ({ item }) {
  const navigation = useNavigation();

  const getLastDate = (task: Task) : string => {
    if (task.history) {
      let lastDate = new Date('1900-01-01');
      for (let val of task.history) {
        lastDate = lastDate < val.date ? val.date : lastDate;
      }
  
      return (lastDate.getMonth() + 1) + '/' + lastDate.getDate() + '/' + lastDate.getFullYear();
    }
  
    return '-';    
  }

  return(
    <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemCategory}>{item.category}</Text>
        <Text style={styles.itemDate}>{getLastDate(item)}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 12,
    marginBottom: 2,
    color: '#000',
    borderBottomColor: '#bbb',
    borderBottomWidth: 2,
    borderBottomStyle: 'solid'
  },
  itemTitle: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold'
  },
  itemCategory: {
    fontSize: 12
  },
  itemDate: {
    fontStyle: 'italic',
    fontSize: 12
  }
});