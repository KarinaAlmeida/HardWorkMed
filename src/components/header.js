import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
            <Text style={styles.text} onPress={() => navigation.navigate("Home")}>LOGOTIPO</Text>
            </View>
            <View style={styles.home}>
            <Icon name="bank" size={25} color="black" onPress={() => navigation.navigate("Home")} />
            </View>
            <View>
            <Text style={styles.textHome} onPress={() => navigation.navigate("Home")}>HOME</Text>
            </View>
            <View style={styles.profile}>
                <Image
                    source={require('../../assets/teste.jpg')}
                    style={styles.profileImage}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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