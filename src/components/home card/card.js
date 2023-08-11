import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from 'expo-linear-gradient'
import {styles} from './style.js'


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

