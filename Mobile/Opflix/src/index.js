import SignInScreen from './Pages/signin';
import { createStackNavigator } from 'react-navigation-stack';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator ,} from 'react-navigation';
import MainScreen from './Pages/Main';
import CadastroScreen from './Pages/Cadastrar';


const AuthStack = createBottomTabNavigator({
    Login: {
        screen: SignInScreen
    },
    Cadastro: {
        screen: CadastroScreen
    },
    
})

const MainNavigator = createBottomTabNavigator({
    Home: {
        screen: MainScreen
    },
   
    
});

export default createAppContainer(
    createSwitchNavigator({
        MainNavigator,
        AuthStack,
    },
        {
            initialRouteName: 'AuthStack'
        })
)
