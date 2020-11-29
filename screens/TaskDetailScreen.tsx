import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TaskDetailScreen({ route, navigation }) {
  return (
    <View>
      <Text>Detail View for {route.params.text} Goes Here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  }
});