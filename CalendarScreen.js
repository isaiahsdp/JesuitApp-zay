import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Modal, TextInput } from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import { getFormatedDate } from 'react-native-modern-datepicker';
import React, { useState } from 'react';

export default function CalendarScreen({ navigation }) {
  return (
      <TaskCalendar/>
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

const TaskCalendar = () => {
    const [selectedDate, setSelectedDate] = useState('')
    const [tasks, setTasks] = useState({})
    const [visible, setVisible] = useState(false)
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const addTask = (date) => {
      const newTask = {
        id: date,
        title: taskTitle,
        description: taskDescription,
      }
    };

    const today = new Date()
    const startDate = getFormatedDate(today.setDate(today.getDate() + 1), 'YYYY/MM/DD')

    const showModal = () => setVisible(true)
    const hideModal = () => setVisible(false)

    return (
      <View>
        <DatePicker
          options={{
            backgroundColor: '#FFFFFF',
            textHeaderColor: '#000000',
            textDefaultColor: '#000000',
            selectedTextColor: '#fff',
            mainColor: '#F4722B',
            textSecondaryColor: '#959494',
            borderColor: 'rgba(122, 146, 165, 0.1)',
          }}
          current={startDate}
          selected={startDate}
          mode="calendar"
          minuteInterval={30}
          style={{ borderRadius: 10 }}
          onSelectedChange={(date) => setSelectedDate(date)}
        />
        <Button title="Add Task" onPress={showModal} />
        <Modal
          visible={visible}
          animationType="slide">
            <View style= {styles.container}>
              <Text> {selectedDate}</Text>
            </View>
          <Button title="Done" onPress={hideModal} />
        </Modal>
      </View>
      );
  };
