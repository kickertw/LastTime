import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const printDate = (date: Date) => {
  return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
}

export default function TaskListItem ({ item }) {
  const navigation = useNavigation();

  return(
    <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{item.text}</Text>
        <Text style={styles.itemDate}>{printDate(item.lastDate)}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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