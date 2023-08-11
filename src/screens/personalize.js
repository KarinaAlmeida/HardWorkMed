import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Switch } from "react-native";
import Header from "../components/header";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from "@react-navigation/native";
import Slider from '@react-native-community/slider'



export default function PersonalizePage() {
    const navigation = useNavigation();
    const [dailyGoal, setDailyGoal] = useState(5);
    const [isEnabled, setIsEnabled] = useState({clinicaMedica:false, cirurgiaGeral:false, pediatria:false, ginecologia:false, medicinaPreventiva:false });

    const toggleSwitch = (e) => {
        setIsEnabled({...isEnabled,[e]:!isEnabled[e]});
    };

    const handleDailyGoalChange = (value) => {
        setDailyGoal(parseInt(value));
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    locations={[0.6, 0.7]}
                    colors={["#EC407D", "#AF5BC2"]}
                    style={styles.gradientContainer}
                >
                    <Header />
                    <View style={styles.barContainer}>
                        <View style={styles.return}>
                            <Text style={styles.returnText} onPress={() => navigation.navigate("Home")}>Voltar</Text>
                        </View>
                        <View style={styles.icon}>
                            <Icon name="list" size={28} color="white" />
                            <Text style={styles.questions}>Personalizar</Text>
                        </View>
                    </View>

                    <View style={styles.squareContainer}>
                        <View style={styles.square}>
                            <Text style={styles.squareText}>Definir meta diária de questões</Text>
                            <View style={styles.sliderContainer}>
                                <Slider style={styles.slider}
                                    minimumValue={0}
                                    maximumValue={200}
                                    minimumTrackTintColor="#65D737"
                                    maximumTrackTintColor="gray"
                                    onValueChange={handleDailyGoalChange}

                                />
                                <View style={styles.goalContainer}>
                                    <Text style={styles.sliderValue}>{dailyGoal}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.squareWithCircles}>
                            <Text style={styles.title}>Questões por Grandes áreas:</Text>
                            <View style={styles.circleContainer}>
                                <View style={styles.circle}>
                                    <View style={styles.circleContent}>
                                        <Text style={styles.circleText}>Clínica médica</Text>
                                        <Switch
                                            trackColor={{ false: '#D9D9D9', true: '#66D938' }}
                                            ios_backgroundColor="#3e3e3e"
                                            onValueChange={()=>toggleSwitch('clinicaMedica')}
                                            value={isEnabled.clinicaMedica}
                                        />
                                    </View>
                                </View>
                                <View style={styles.circle}>
                                <View style={styles.circleContent}>
                                        <Text style={styles.circleText}>Cirurgia geral</Text>
                                        <Switch
                                            trackColor={{ false: '#D9D9D9', true: '#66D938' }}
                                            ios_backgroundColor="#3e3e3e"
                                            onValueChange={()=>toggleSwitch('cirurgiaGeral')}
                                            value={isEnabled.cirurgiaGeral}
                                        />
                                    </View>
                                </View>
                                <View style={styles.circle}>
                                <View style={styles.circleContent}>
                                        <Text style={styles.circleText}>Pediatria</Text>
                                        <Switch
                                            trackColor={{ false: '#D9D9D9', true: '#66D938' }}
                                            ios_backgroundColor="#3e3e3e"
                                            onValueChange={()=>toggleSwitch('pediatria')}
                                            value={isEnabled.pediatria}
                                        />
                                    </View>
                                </View>
                                <View style={styles.circle}>
                                <View style={styles.circleContent}>
                                        <Text style={styles.circleText}>Ginecologia e obstetrícia</Text>
                                        <Switch
                                            trackColor={{ false: '#D9D9D9', true: '#66D938' }}
                                            ios_backgroundColor="#3e3e3e"
                                            onValueChange={()=>toggleSwitch('ginecologia')}
                                            value={isEnabled.ginecologia}
                                        />
                                    </View>
                                </View>
                                <View style={styles.circle}>
                                <View style={styles.circleContent}>
                                        <Text style={styles.circleText}>Medicina preventiva</Text>
                                        <Switch
                                            trackColor={{ false: '#D9D9D9', true: '#66D938' }}
                                            ios_backgroundColor="#3e3e3e"
                                            onValueChange={()=>toggleSwitch('medicinaPreventiva')}
                                            value={isEnabled.medicinaPreventiva}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={styles.bottomSquareContainer}>
                            <View style={styles.bottomSquare}>
                                <Text style={styles.bottomSquareTitle}>Questões de provas específicas:</Text>
                                <View style={styles.bottomSquareTextContainer}>
                                    <Text style={styles.bottomSquareText}>Busque provas</Text>
                                    <Text style={styles.bottomSquareSubText}>Exemplo: USP, SUS-SP, SURCE...</Text>
                                </View>
                            </View>

                            <View style={styles.bottomSquare}>
                                <Text style={styles.bottomSquareTitle}>Questões de temas específicos:</Text>
                                <View style={styles.bottomSquareTextContainer}>
                                    <Text style={styles.bottomSquareText}>Busque temas</Text>
                                    <Text style={styles.bottomSquareSubText}>Asma, Tuberculose, Pneumonia...</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    barContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '95%',
        height: 45,
        backgroundColor: 'black',
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 10,
    },
    return: {
        width: 80,
        backgroundColor: 'white',
        height: 25,
        borderRadius: 12,
        marginLeft: 10,
    },
    returnText: {
        textAlign: 'center',
        marginTop: 3,
    },
    icon: {
        flexDirection: 'row',
        marginRight: 5,

    },
    questions: {
        color: 'white',
        fontSize: 23,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    squareContainer: {
        marginTop: 15,
        alignItems: "center",
    },
    square: {
        width: '95%',
        height: 150,
        backgroundColor: "#D9D9D9",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 5,
        shadowRadius: 1,
        elevation: 5,
    },
    squareText: {
        fontSize: 25,
        marginLeft: 10,
        marginTop: 10,
        fontWeight: 'bold',
    },
    squareWithCircles: {
        width: '95%',
        height: 'auto',
        alignItems: "center",
        backgroundColor: '#D9D9D9',
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 5,
        shadowRadius: 1,
        elevation: 5,
        borderRadius: 10,
        marginBottom: 12,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 10,
    },
    circleContainer: {
        flexDirection: "column",
        alignItems: "flex-start",
        marginBottom: 10,

    },
    circle: {
        width: 350,
        height: 44,
        borderRadius: 10,
        backgroundColor: "#D9D9D9",
        marginVertical: 5,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "black",
    },
    circleText: {
        color: "black",
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    bottomSquareContainer: {
        marginTop: 12,
        alignItems: "center",
        width: '100%',
        marginBottom: 15,
    },
    bottomSquare: {
        width: '95%',
        backgroundColor: "#D9D9D9",
        borderRadius: 10,
        marginBottom: 12,
        padding: 10,
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 5,
        shadowRadius: 1,
        elevation: 5,
    },
    bottomSquareTitle: {
        fontSize: 20,
        fontWeight: "bold",
    },
    bottomSquareTextContainer: {
        marginTop: 10,
        backgroundColor: 'white',
        height: 70,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
    },
    bottomSquareText: {
        fontSize: 18,
        padding: 5,
    },
    bottomSquareSubText: {
        fontSize: 12,
        padding: 5,
        color: 'gray',
        fontStyle: 'italic',
    },
    sliderContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
    },
    slider: {
        flex: 1,

    },
    sliderValue: {
        width: 50,
        textAlign: "center",
        fontSize: 20,
        color: 'white',
    },
    goalContainer: {
        backgroundColor: '#65D737',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 8,
        height: 35,
        width: 60,
        marginLeft: 5,
        marginRight: 10,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center'
    },
    circleContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 10,  
    },
});
