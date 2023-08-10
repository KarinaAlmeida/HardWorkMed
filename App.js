import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "./src/screens/home";
import PersonalizePage from "./src/screens/personalize";
import QuestionsPage from "./src/screens/questions";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Personalize" component={PersonalizePage} />
        <Stack.Screen name="Questions" component={QuestionsPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;