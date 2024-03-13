import { StyleSheet, Text, View, Button, Modal, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

export default function AnncouncementScreen({ navigation }) {
    return (
        <AnnouncementScreen/>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    announcementContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff', 
        borderRadius: 10, 
        padding: 10, 
        marginVertical: 5, 
        alignItems: 'center', 
        justifyContent: 'space-between',
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

const AnnouncementScreen = () => {
    const [announcements, setAnnouncements] = useState({})
    const [visibleAddAnnouncement, setVisibleAddAnnouncement] = useState(false)
    const [announcementDateTime, setAnnouncementDateTime] = useState('')
    const [currentUser, setCurrentUser] = useState('')
    const [announcementTitle, setAnnouncementTitle] = useState('')
    const [announcementContent, setAnnouncementContent] = useState('')

    const addAnnouncement = (announcementDateTime, user, title, content) => {
        const newAnnouncements = {
          ...announcements,
          [announcementDateTime]: [
            ...(announcements[announcementDateTime] || []),
            {
              id: Date(),
              user: user,
              title: title,
              content: content,
            },
          ],
        };
        setAnnouncements(newAnnouncements);
      };

    const showAddAnnouncementModal = () => setVisibleAddAnnouncement(true)
    const hideAddAnnouncementModal = () => setVisibleAddAnnouncement(false)


    return (
    
        <View>
            <View>

            <Text>ANNOUNCEMENTS</Text>
            {announcements[announcementDateTime] &&
                announcements[announcementDateTime].map((announcement, index) => (
                    <View key={index} style={styles.announcementContainer}>
                        <View style = {{ flex: 1}}>
                            <Text> {announcement.user}</Text>
                            <Text> {announcement.title}</Text>
                            <Text> {announcement.content}</Text>
                        </View>
                    </View>
                    )
                )
            }
            </View>
            <Button title="Add Announcement" onPress={showAddAnnouncementModal}/>


            <Modal
            visible={visibleAddAnnouncement}
            animationType='slide'
            >
                <TextInput 
                    placeholder= "User"
                    value={currentUser}
                    onChangeText={setCurrentUser}
                />
                <TextInput 
                    placeholder= "Title"
                    value={announcementTitle}
                    onChangeText={setAnnouncementTitle}
                />
                <TextInput 
                    placeholder= "Content"
                    value={announcementContent}
                    onChangeText={setAnnouncementContent}
                />
                <Button title="Submit" onPress={() => addAnnouncement(announcementDateTime, currentUser, announcementTitle, announcementContent)} />

                <Button title="Done" onPress={hideAddAnnouncementModal}/>
            
            </Modal>

        </View>
    )

}
