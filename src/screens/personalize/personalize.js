import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Switch } from "react-native";
import Header from "../../components/header/header";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from "@react-navigation/native";
import Slider from '@react-native-community/slider'
// import CheckBox from '@react-native-community/checkbox';
import { styles } from './style.js'
import BouncyCheckbox from "react-native-bouncy-checkbox";



export default function PersonalizePage() {
    const navigation = useNavigation();
    const [dailyGoal, setDailyGoal] = useState(0);
    const [isEnabled, setIsEnabled] = useState({ clinicaMedica: false, cirurgiaGeral: false, pediatria: false, ginecologia: false, medicinaPreventiva: false });
    const [showCheckboxes1, setShowCheckboxes1] = useState(false);
    const [showCheckboxes2, setShowCheckboxes2] = useState(false);

    const [checkbox, setCheckbox] = useState(false)


    const toggleSwitch = (e) => {
        setIsEnabled({ ...isEnabled, [e]: !isEnabled[e] });
    };

    const handleDailyGoalChange = (value) => {
        setDailyGoal(parseInt(value));
    };

    const handleToggleCheck1 = () => {
        setShowCheckboxes1(!showCheckboxes1);
    };
    const handleToggleCheck2 = () => {
        setShowCheckboxes2(!showCheckboxes2);
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
                                            onValueChange={() => toggleSwitch('clinicaMedica')}
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
                                            onValueChange={() => toggleSwitch('cirurgiaGeral')}
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
                                            onValueChange={() => toggleSwitch('pediatria')}
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
                                            onValueChange={() => toggleSwitch('ginecologia')}
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
                                            onValueChange={() => toggleSwitch('medicinaPreventiva')}
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
                                    <TouchableOpacity onPress={handleToggleCheck1}>
                                        <Text style={styles.bottomSquareSubText}>Exemplo: USP, SUS-SP, SURCE...</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={styles.bottomSquare}>
                                <Text style={styles.bottomSquareTitle}>Questões de temas específicos:</Text>
                                <View style={styles.bottomSquareTextContainer}>
                                    <Text style={styles.bottomSquareText}>Busque temas</Text>
                                    <TouchableOpacity onPress={handleToggleCheck2}>
                                        <Text style={styles.bottomSquareSubText}>Asma, Tuberculose, Pneumonia...</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        {showCheckboxes1 && (
                            <View style={styles.checkboxesContainer}>
                                <View style={styles.checkboxRow}>
                                    <View style={styles.checkContainer}>
                                    <BouncyCheckbox 
                                      size={30}
                                      fillColor="green"
                                      unfillColor="white"
                                      innerIconStyle={{ borderRadius: 5 }}
                                      iconStyle={{borderRadius:5}}
                                    />
                                    
                                    <Text style={styles.checkboxLabel}>TODOS</Text>
                                    </View>
                                </View>
                                <View style={styles.checkboxRow}>
                                <View style={styles.checkContainer}>
                                <BouncyCheckbox 
                                      size={30}
                                      fillColor="green"
                                      unfillColor="white"
                                      innerIconStyle={{ borderRadius: 5 }}
                                      iconStyle={{borderRadius:5}}
                                    />
                                    <Text style={styles.checkboxLabel}>ABC</Text>
                                    </View>
                                </View>

                            </View>
                        )}

{showCheckboxes2 && (
                            <View style={styles.checkboxesContainer}>
                                <View style={styles.checkboxRow}>
                                    <View style={styles.checkContainer}>
                                    <BouncyCheckbox 
                                      size={30}
                                      fillColor="green"
                                      unfillColor="white"
                                      innerIconStyle={{ borderRadius: 5 }}
                                      iconStyle={{borderRadius:5}}
                                    />
                                    
                                    <Text style={styles.checkboxLabel}>TODOS</Text>
                                    </View>
                                </View>
                                <View style={styles.checkboxRow}>
                                <View style={styles.checkContainer}>
                                <BouncyCheckbox 
                                      size={30}
                                      fillColor="green"
                                      unfillColor="white"
                                      innerIconStyle={{ borderRadius: 5 }}
                                      iconStyle={{borderRadius:5}}
                                    />
                                    <Text style={styles.checkboxLabel}>Epidemias</Text>
                                    </View>
                                </View>

                            </View>
                        )}
                    </View>
                    <TouchableOpacity style={styles.confirmButton}>
                        <Text style={styles.confirmButtonText}>Começar</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </ScrollView>
        </View>
    )
}
