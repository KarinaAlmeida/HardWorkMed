import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function QuestionsComponent(props) {
    const { question, alternatives } = props;
    const [selectedAlt, setSelectedAlt] = useState(null)

    const toggleSelectedAlt = (index) => {
        if (selectedAlt === index) {
            setSelectedAlt(null);
        } else {
            setSelectedAlt(index);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.question}>
                <Text style={styles.questionText}>{question}</Text>
            </View>
            <View style={styles.alternativeContainer}>
                {alternatives.map((alternative, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.alternative,
                            selectedAlt === index && styles.selectedAlternative
                        ]}
                        onPress={() => toggleSelectedAlt(index)}
                    >
                        <Text
                            style={[
                                styles.alternativeText,
                                selectedAlt === index && styles.selectedAlternativeText
                            ]}
                        >
                            {alternative.alternativa}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            <TouchableOpacity style={styles.confirmButton}>
                <Text style={styles.confirmButtonText}>Confirmar Resposta</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    question: {
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
        height: 'auto',
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 10,
    },
    questionText: {
        color: 'white',
        fontWeight: 'bold',
        padding: 5,
    },
    alternativeContainer: {
        marginTop: 10,
        marginLeft: 10,
        marginRight:10,
        
    },
    alternative: {
        backgroundColor: "#D9D9D9",
        borderRadius: 10,
        marginTop: 5,
        height: 80,
        justifyContent: "center",
    },
    alternativeText: {
        color: 'black',
        textAlign:'center',
    },
    confirmButton: {
        backgroundColor: '#EBEBEB',
        borderRadius: 20,
        marginTop: 40,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor:'black',
        borderWidth: 2,
        width:'50%',
        marginLeft:'25%',
    },
    confirmButtonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize:15,
    },
    selectedAlternative: {
        backgroundColor: "black",
    },
    selectedAlternativeText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },
});