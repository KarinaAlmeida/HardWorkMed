import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "../components/header";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import QuestionsComponent from "../components/questionCard";
// import axios from 'axios'




export default function QuestionsPage() {
    const navigation = useNavigation();
    // const [questions, setQuestions] = useState([]);
    // const [loading, setLoading] = useState(true);
    const questions=objectURL.obj;


    

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


    return (
        <View>
            <Header />
            <View style={styles.barContainer}>
                <View style={styles.return} >
                    <Text style={styles.returnText} onPress={() => navigation.navigate("Home")}>Voltar</Text>
                </View>
                <View style={styles.icon}>
                    <Icon name="bank" size={25} color="white"/>
                    <Text style={styles.questions}>Questões</Text>
                </View>
            


            </View>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <QuestionsComponent
            question={questions[0].questao}
            alternatives={questions[0].alternativas}
            />
            </ScrollView>
            

        </View>
    )
}

const styles = StyleSheet.create({
    barContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        width:'95%',
        height:45,
        backgroundColor:'black',
        borderRadius:10,
        marginTop:10,
        marginLeft:10,
    },
    return: {
        width:80,
        backgroundColor:'white',
        height:25,
        borderRadius:12,
        marginLeft:10,
    },
    returnText: {
        textAlign:'center',
        marginTop:3,
    },
    icon:{
        flexDirection: 'row',
        marginRight:5,

    },
    questions: {
        color:'white',
        fontSize:23,
        fontWeight:'bold',
        marginLeft:5,
    },
    cardContainer: {
    },
})


const objectURL=
{
	"ok": true,
	"msg": "",
	"obj": [
		{
			"prova": "ABC",
			"id_questao": 123,
			"questao": "Adolescente, 15 anos de idade, procura atendimento ambulatorial após internação por cetoacidose diabética, quando foi diagnosticado com diabetes..............., é correto afirmar:",
			"alternativas": [
				{"id": 1, "alternativa": "Alternativa A lorem ipsum dolor sit amet"},
				{"id": 2, "alternativa": "Alternativa B lorem ipsum dolor sit amet"},
				{"id": 3, "alternativa": "Alternativa C lorem ipsum dolor sit amet"},
				{"id": 4, "alternativa": "Alternativa D lorem ipsum dolor sit amet"}
			]
		},
		{
			"prova": "XYZ",
			"id_questao": 456,
			"questao": "Adolescente, 16 anos de idade, procura atendimento ambulatorial após internação por cetoacidose diabética, quando foi diagnosticado com diabetes..............., é correto afirmar:",
			"alternativas": [
				{"id": 1, "alternativa": "Alternativa A lorem ipsum dolor sit amet"},
				{"id": 2, "alternativa": "Alternativa B lorem ipsum dolor sit amet"},
				{"id": 3, "alternativa": "Alternativa C lorem ipsum dolor sit amet"},
				{"id": 4, "alternativa": "Alternativa D lorem ipsum dolor sit amet"}
			]
		},
		{
			"prova": "FGH",
			"id_questao": 789,
			"questao": "Adolescente, 17 anos de idade, procura atendimento ambulatorial após internação por cetoacidose diabética, quando foi diagnosticado com diabetes..............., é correto afirmar:",
			"alternativas": [
				{"id": 1, "alternativa": "Alternativa A lorem ipsum dolor sit amet"},
				{"id": 2, "alternativa": "Alternativa B lorem ipsum dolor sit amet"},
				{"id": 3, "alternativa": "Alternativa C lorem ipsum dolor sit amet"},
				{"id": 4, "alternativa": "Alternativa D lorem ipsum dolor sit amet"}
			]
		}
	]
}