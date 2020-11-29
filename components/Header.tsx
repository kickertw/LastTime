import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Last Time I 🤷🏼‍♂️</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: 'cornflowerblue',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  }
});