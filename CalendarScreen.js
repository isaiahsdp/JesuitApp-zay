import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Modal, TextInput, ScrollView } from 'react-native';
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
  task: {
    borderColor: "#000000",
    width: "40%",
    borderWidth: 2,
    borderRadius: 20,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  description: {
    borderColor: "#000000",
    width: "70%",
    borderWidth: 2,
    borderRadius: 30,
    padding: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  taskContainer: {
    backgroundColor: '#fff', 
    borderRadius: 10, 
    padding: 10, 
    marginVertical: 5, 
    alignItems: 'center', 
    justifyContent: 'center',
    shadowColor: "#000", 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, 
  },
});

const TaskCalendar = () => {
    const [selectedDate, setSelectedDate] = useState('')
    const [tasks, setTasks] = useState({})
    const [visible, setVisible] = useState(false)
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const addTask = () => {
      const newTasks = {
        ...tasks,
        [selectedDate]: [
          ...(tasks[selectedDate] || []),
          {
            id: selectedDate, 
            title: taskTitle,
            description: taskDescription,
          },
        ],
      }
      setTasks(newTasks)
      setTaskTitle('')
      setTaskDescription('')
      hideModal()
      console.log(tasks)
    }
    const today = new Date()
    const startDate = getFormatedDate(today.setDate(today.getDate()), 'YYYY/MM/DD')

    const showModal = () => setVisible(true)
    const hideModal = () => setVisible(false)

    return (
      <View>
        <ScrollView>
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
                <View style= {styles.task}>
                  <TextInput 
                    placeholder = "Task"
                    value={taskTitle}
                    onChangeText={setTaskTitle}
                  />
                </View>
                <View style= {styles.description}>
                  <TextInput 
                    placeholder = "Description"
                    value={taskDescription}
                    onChangeText={setTaskDescription}
                  />
                </View>
                <Button title="Submit" onPress={addTask}/>
            </View>
          <Button title="Done" onPress={hideModal} 
        />
        </Modal>
        <View>
        {tasks[selectedDate] ? (
          tasks[selectedDate].map((task, index) => (
            <View key={index} style={styles.taskContainer}>
              <Text> {task.title} </Text>
              <Text> {task.description} </Text>
            </View>
          ))
        ) : (
          <Text>No tasks for this date.</Text>
        )}
        </View>
        </ScrollView>
      </View>
      );
  };
