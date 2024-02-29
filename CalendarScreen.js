import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import React, { useState } from 'react';

export default function CalendarScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <BasicUsage/>
      <StatusBar style="auto" />
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
});

const BasicUsage = () => {
    const [selectedDate, setSelectedDate] = useState('');
  
    return (
        <DatePicker
          options={{
            backgroundColor: '#090C08',
            textHeaderColor: '#FFA25B',
            textDefaultColor: '#F6E7C1',
            selectedTextColor: '#fff',
            mainColor: '#F4722B',
            textSecondaryColor: '#D6C7A1',
            borderColor: 'rgba(122, 146, 165, 0.1)',
          }}
          current="2020-07-13"
          selected="2020-07-23"
          mode="calendar"
          minuteInterval={30}
          style={{ borderRadius: 10 }}
        />
      );
  };
