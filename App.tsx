import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TaskListScreen from './screens/TaskListScreen';
import TaskDetailScreen from './screens/TaskDetailScreen';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';


export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          //headerTitle: () => <Header />
          title: 'Last Time I 🤷🏼‍♂️',
          headerStyle: { backgroundColor: 'cornflowerblue'}
        }}>
        <Stack.Screen 
          name="Home"
          component={TaskListScreen}
          options={{
            headerRight: () => (
              <TouchableOpacity style={{marginRight: 10}} onPress={() => alert('Adds a new task - TBD!')}>
                <Ionicons name="md-add-circle" size={32} color="white" />
              </TouchableOpacity>
            )
          }}
        />
        <Stack.Screen name="Details" component={TaskDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
