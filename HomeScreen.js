import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button 
        title="Calendar" 
        onPress={() => navigation.navigate("Calendar")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  }

});

const Greeting = (props) => {
  return (
    <View style={styles.container}>
    <Text> Hello {props.name}</Text>
    </View>
  )
}