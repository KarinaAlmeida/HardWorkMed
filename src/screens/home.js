import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "../components/header";
import CardComponent from "../components/card";
import { useNavigation } from "@react-navigation/native";


export default function HomePage() {
    const navigation = useNavigation();

    function handleCLickQuestion () {
        navigation.navigate("Questions")
    }
    function handleCLickPersonalize () {
        navigation.navigate("Personalize")
    }

    return (
        <View style={styles.container}>
            <Header />
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <CardComponent
            icon="bank"
            title="QUESTÕES"
            text="Prepare-se de forma personalizada respondendo ao banco de questões!"
            buttonText="Começar"
            onButtonPress={handleCLickQuestion}
            />

            <CardComponent
            icon="bank"
            title="PERSONALIZAR"
            buttonText="Acessar"
            onButtonPress={handleCLickPersonalize}
            />

            <CardComponent
            icon="bank"
            title="MÉTRICAS"
            buttonText="Acessar"    
            />

            <CardComponent
            icon="bank"
            title="CHATBOT"
            text="Treine através de trívias geradas pelo nosso chatbot do Telegram"
            buttonText="Começar"
            />
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
container: {
    flex:1,
    backgroundColor:'#EBEBEB',
    color:'white',
    borderRadius:20,
},
scrollViewContent: {
    flexGrow: 1,
    justifyContent: "space-between",
    paddingVertical: 10,
  },
})