import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import {styles} from './style.js'


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

