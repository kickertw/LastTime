import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TaskListScreen from './screens/TaskListScreen';
import TaskDetailScreen from './screens/TaskDetailScreen';
import Header from './components/Header';


export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home"
          component={TaskListScreen}
          options={{
            //headerTitle: () => <Header />
            title: 'Last Time I 🤷🏼‍♂️',
            headerStyle: { backgroundColor: 'cornflowerblue'}             
          }}
          />
        <Stack.Screen
          name="Details"
          component={TaskDetailScreen}
          options={{
            title: 'Last Time I 🤷🏼‍♂️',
            headerStyle: { backgroundColor: 'cornflowerblue'}    
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
