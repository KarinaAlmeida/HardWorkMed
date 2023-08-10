import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from 'expo-linear-gradient'

export default function CardComponent(props) {
  const { icon, title, text, buttonText, onButtonPress } = props;

  return (
    <LinearGradient
      start={{ x: 0, y: -1 }}
      end={{ x: 1.4, y: 1 }}
      locations={[0.3, 0.7]}
      colors={["#AF5BC2", "#EC407D"]}
      style={styles.gradientContainer}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon name={icon} size={35} color="white" style={styles.icon} />
          <Text style={styles.title}>{title}</Text>
        </View>
        {text && <Text style={styles.text}>{text}</Text>}
        <TouchableOpacity style={styles.button} onPress={onButtonPress}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    alignItems: "center", 
    justifyContent: "center", 
    borderRadius: 10,
    width: "95%",
    height: 200,
    marginLeft: 5,
    marginTop: 15,
  },
  container: {
    width: "100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop:0,
  },
  icon: {
    marginRight: 5,
    marginLeft: 10,
    marginBottom:15,

  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    marginRight: 22,
    marginBottom:15,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    marginLeft: 25,
    marginRight: 10,
    marginBottom: 20,
    shadowColor: 'black', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 5, 
    shadowRadius: 1, 
    elevation:5 ,
  },
  button: {
    alignSelf: "flex-end",
    backgroundColor: "white",
    padding: 5,
    borderRadius: 15,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    marginRight:10,
    marginBottom:0,
    shadowColor: 'black', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.9, 
    shadowRadius: 5, 
    elevation:5 ,
  },
  buttonText: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    width: 100,
    textAlign: "center",
  },
});