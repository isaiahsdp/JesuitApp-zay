import { StyleSheet, Text, View, Button, Modal, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import styles from './AnnouncementScreenStyles'

export default function AnncouncementScreen({ navigation }) {
    return (
        <AnnouncementScreen/>
    )
}

const AnnouncementScreen = () => {
    const [announcements, setAnnouncements] = useState({})
    const [visibleAddAnnouncement, setVisibleAddAnnouncement] = useState(false)
    const [announcementDateTime, setAnnouncementDateTime] = useState('')
    const [currentUser, setCurrentUser] = useState('')
    const [announcementTitle, setAnnouncementTitle] = useState('')
    const [announcementContent, setAnnouncementContent] = useState('')

    const addAnnouncement = (user, title, content) => {

        const submissionDateTime = new Date().toISOString();
        const submissionDate = submissionDateTime.split('T')[0];

        setAnnouncementDateTime(submissionDateTime);

        const newAnnouncement = {
            id: submissionDateTime,
            user: user,
            title: title,
            content: content,
            createdAt: submissionDateTime,
        };

        const newAnnouncements = {
          ...announcements,
          [submissionDate]: [...(announcements[submissionDate] || []), newAnnouncement],
        }

        setAnnouncements(newAnnouncements);
        hideAddAnnouncementModal()
      };

    const showAddAnnouncementModal = () => setVisibleAddAnnouncement(true)
    const hideAddAnnouncementModal = () => setVisibleAddAnnouncement(false)


    return (
    
        <View style={styles.container}>

        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Text>ANNOUNCEMENTS</Text>
            {Object.keys(announcements).sort().map((date, index, sortedDates) => {
              const currentDate = new Date(date);
              const previousDate = index > 0 ? new Date(sortedDates[index - 1]) : null;
              const dayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
              const previousDayOfWeek = previousDate ? previousDate.toLocaleDateString('en-US', { weekday: 'long' }) : '';
              
              return (
                <View key={date}>
                  {dayOfWeek !== previousDayOfWeek && <Text style={styles.dateHeader}>{dayOfWeek}</Text>}
                  {announcements[date].map((announcement, index) => (
                    <View key={index} style={styles.announcementContainer}>
                      <Text>{announcement.user}</Text>
                      <Text style={styles.taskInput}>{announcement.title}</Text>
                      <Text>{announcement.content}</Text>
                      <Text>Created at: {new Date(announcement.createdAt).toLocaleTimeString()}</Text>
                    </View>
                  ))}
                </View>
              );
            })}
        </ScrollView>


            <Modal
            visible={visibleAddAnnouncement}
            animationType='slide'
            >
            <View style={styles.container}>
                <View style={styles.userTitle}>
                    <TextInput 
                        placeholder= "User"
                        value={currentUser}
                        onChangeText={setCurrentUser}
                    />
                </View>
                <View style={styles.userTitle}>
                    <TextInput 
                        placeholder= "Title"
                        value={announcementTitle}
                        onChangeText={setAnnouncementTitle}
                    />
                </View>
                <View style={styles.content}>
                    <TextInput 
                        placeholder= "Content"
                        value={announcementContent}
                        onChangeText={setAnnouncementContent}
                    />
                </View>
                <Button title="Submit" onPress={() => addAnnouncement(currentUser, announcementTitle, announcementContent)} color="#F4722B"/>
            </View>
                <Button title="Done" onPress={hideAddAnnouncementModal} color="#F4722B"/>
            </Modal>
            <Button title="Add Announcement" onPress={showAddAnnouncementModal} color="#F4722B"/>
        </View>
    )

}
