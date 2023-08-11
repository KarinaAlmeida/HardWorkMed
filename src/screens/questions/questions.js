import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Header from "../../components/header/header";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import QuestionsComponent from "../../components/question card/questionCard";
import {styles} from './style.js';
// import axios from 'axios'




export default function QuestionsPage() {
    const navigation = useNavigation();
    // const [questions, setQuestions] = useState([]);
    // const [loading, setLoading] = useState(true);
    const questions = objectURL.obj;
    const [showInfoContent, setShowInfoContent] = useState(false);
    const [showCogMenu, setShowCogMenu] = useState(false);

    const toggleInfoContent = () => {
        setShowInfoContent(!showInfoContent);
    };
    const toggleCogMenu = () => {
        setShowCogMenu(!showCogMenu);
    };

    return (
        <View>
            <Header />
            <View style={styles.barContainer}>
                <View style={styles.return}>
                    <Text style={styles.returnText} onPress={() => navigation.navigate("Home")}>Voltar</Text>
                </View>
                <View style={styles.icon}>
                    <Icon name="question" size={25} color="white" />
                    <Text style={styles.questions}>Questões</Text>
                </View>
            </View>


            <View style={styles.iconContainer}>
        <View style={styles.iconWrapper}>
          <TouchableOpacity style={styles.iconSquare} onPress={toggleCogMenu}>
            <Icon name="cog" size={30} color="black" />
          </TouchableOpacity>
          {showCogMenu && (
            <View style={styles.cogMenu}>
              <TouchableOpacity style={styles.iconSquare} onPress={toggleCogMenu}>
                <Icon name="th-list" size={30} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconSquare} onPress={toggleCogMenu}>
                <Icon name="bookmark" size={30} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconSquare} onPress={toggleCogMenu}>
                <Icon name="plus-square" size={30} color="black" />
              </TouchableOpacity>
            </View>
          )}
        </View>

        <TouchableOpacity style={styles.iconWrapper} onPress={toggleInfoContent}>
          <View style={styles.iconSquare}>
            <Icon name="info" size={30} color="black" />
          </View>
        </TouchableOpacity>
      </View>

            {showInfoContent && (
                <View style={styles.infoContentContainer}>
                    <View style={styles.infoCircle}>
                        <Text style={styles.infoText}> SCMBG </Text>
                    </View>
                    <View style={styles.infoCircle}>
                        <Text style={styles.infoText}> R1</Text>
                    </View>
                    <View style={styles.infoCircle}>
                        <Text style={styles.infoText}> Nº96</Text>
                    </View>
                    <View style={styles.infoCircle}>
                        <Text style={styles.infoText}> 2019</Text>
                    </View>
                </View>
            )}
            <ScrollView >
                <QuestionsComponent
                    question={questions[0].questao}
                    alternatives={questions[0].alternativas}
                />
            </ScrollView>
        </View>
    );
};


const objectURL =
{
    "ok": true,
    "msg": "",
    "obj": [
        {
            "prova": "ABC",
            "id_questao": 123,
            "questao": "Adolescente, 15 anos de idade, procura atendimento ambulatorial após internação por cetoacidose diabética, quando foi diagnosticado com diabetes..............., é correto afirmar:",
            "alternativas": [
                { "id": 1, "alternativa": "Alternativa A lorem ipsum dolor sit amet" },
                { "id": 2, "alternativa": "Alternativa B lorem ipsum dolor sit amet" },
                { "id": 3, "alternativa": "Alternativa C lorem ipsum dolor sit amet" },
                { "id": 4, "alternativa": "Alternativa D lorem ipsum dolor sit amet" }
            ]
        },
        {
            "prova": "XYZ",
            "id_questao": 456,
            "questao": "Adolescente, 16 anos de idade, procura atendimento ambulatorial após internação por cetoacidose diabética, quando foi diagnosticado com diabetes..............., é correto afirmar:",
            "alternativas": [
                { "id": 1, "alternativa": "Alternativa A lorem ipsum dolor sit amet" },
                { "id": 2, "alternativa": "Alternativa B lorem ipsum dolor sit amet" },
                { "id": 3, "alternativa": "Alternativa C lorem ipsum dolor sit amet" },
                { "id": 4, "alternativa": "Alternativa D lorem ipsum dolor sit amet" }
            ]
        },
        {
            "prova": "FGH",
            "id_questao": 789,
            "questao": "Adolescente, 17 anos de idade, procura atendimento ambulatorial após internação por cetoacidose diabética, quando foi diagnosticado com diabetes..............., é correto afirmar:",
            "alternativas": [
                { "id": 1, "alternativa": "Alternativa A lorem ipsum dolor sit amet" },
                { "id": 2, "alternativa": "Alternativa B lorem ipsum dolor sit amet" },
                { "id": 3, "alternativa": "Alternativa C lorem ipsum dolor sit amet" },
                { "id": 4, "alternativa": "Alternativa D lorem ipsum dolor sit amet" }
            ]
        }
    ]
}
  //NESTA PARTE DO CÓDIGO TENTEI FAZER A CONSULTA A URL PASSADA, POREM, COMO A MESMA ESTAVA COM UMA VÍRGULA
    //APÓS A ÚLTIMA ARRAY, EU ESTAVA RECEBENDO ERROS, TENTEI TRANSFROMAR EM OBJETO, TENTEI TRANSFORMAR EM STRING,
    //TIRAR A VIRGULA E TRANSFORMAR EM OBJETO NOVAMENTE, MAS NÃO CONSEGUI, ENTÃO MOCKEI OS DADOS, ABAIXO
    //SEGUE A CONSULTA COMO EU FIZ.
    // async function fetchQuestions() {
    //     try {
    //         const response = await axios.get('https://hardworkmedicina.com.br/exemploQuestoes.json');
    //         const data = await response.json();

    //         if (response.data && response.data.obj ) {
    //             setQuestions(response.data.obj);
    //         } else {
    //             console.error('Estrutura do JSON inválida:', response.data);
    //         }
    //     } catch (error) {
    //         console.error('Erro ao buscar as questões:', error);
    //     }
    //     setLoading(false);
    // }

    // useEffect(() => {
    //     fetchQuestions();
    // }, []);