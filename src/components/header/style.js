import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor:'black',
        width:'100%',
        height:55,
        color:'white',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
    
    },
    logo: {
      borderRadius:'5%',
      backgroundColor:'white',
      width:'20%',
      height:'45%',
      marginLeft:12,
      justifyContent:'center',
      shadowColor: 'gray', 
        shadowOffset: { width: 0, height: 0 }, 
        shadowOpacity: 0.9, 
        shadowRadius: 4, 
    elevation:5,
    

    },
    text: {
        color:'black',
        fontWeight: 'bold', 
        textAlign: 'center',
        fontSize: 12,
    },
    home: {
        borderRadius:'5%',
        backgroundColor:'white',
        width:'10%',
        height:'60%',
        marginLeft:150,
        justifyContent:'center',
        alignItems:'center',

    },
    textHome: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
        marginRight:12,
        marginLeft:5,
    },
    profile: {
        borderRadius: 5,
        backgroundColor: 'white',
        width: '10%',
        height: '60%',
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImage: {
        width: '100%',
        height: '100%',
        borderRadius: 5, 
    },

    
})