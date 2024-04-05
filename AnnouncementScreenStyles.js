import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    announcementContainer: {
        backgroundColor: '#fff', 
        borderRadius: 10, 
        padding: 10, 
        marginVertical: 5, 
        shadowColor: "#000", 
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, 
    },
    userTitle: {
        borderColor: "#000000",
        width: "40%",
        borderWidth: 2,
        borderRadius: 20,
        padding: 5,
        marginBottom: 20,
    },
    content: {
        borderColor: "#000000",
        width: "70%",
        borderWidth: 2,
        borderRadius: 30,
        padding: 10, 
        marginBottom: 20,
    },
    taskInput: {
        fontWeight: 'bold', 
        textAlign: 'left', 
        fontSize: 20,
    },
    dateHeader: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20,
        marginBottom: 5,
    },
})