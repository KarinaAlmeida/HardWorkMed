import React from "react";
import { View, Text,Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import {styles} from './style.js'


export default function Header() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
            <Text style={styles.text} onPress={() => navigation.navigate("Home")}>LOGOTIPO</Text>
            </View>
            <View style={styles.home}>
            <Icon name="home" size={30} color="black" onPress={() => navigation.navigate("Home")} />
            </View>
            <View>
            <Text style={styles.textHome} onPress={() => navigation.navigate("Home")}>HOME</Text>
            </View>
            <View style={styles.profile}>
                <Image
                    source={require('../../../assets/teste.jpg')}
                    style={styles.profileImage}
                />
            </View>
        </View>
    )
}
