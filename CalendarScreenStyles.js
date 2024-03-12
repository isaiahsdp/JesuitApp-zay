import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
      taskInput: {
        fontWeight: 'bold', 
        textAlign: 'left', 
        fontSize: 20,
      },
      circleButton: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        marginRight: 10,
        borderColor: '#000',
        backgroundColor: '#fff', 
      },
      circleButtonPressed: {
        backgroundColor: '#F4722B',
      },
      editButton: {
        width: 15, 
        height: 15, 
        marginBottom: 30
      }
})