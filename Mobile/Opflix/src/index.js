import SignInScreen from './Pages/signin';
import { createStackNavigator } from 'react-navigation-stack';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainScreen from './Pages/Main';
import CadastroScreen from './Pages/Cadastrar';

const AuthStack = createStackNavigator({
    Sign: { screen: SignInScreen }
})


const MainNavigator = createBottomTabNavigator({
    Main: {
        screen: MainScreen
    },
    Cadastro: {
        screen: CadastroScreen
    }
});

export default createAppContainer(
    createSwitchNavigator({
        MainNavigator,
        AuthStack

    },
    {
        initialRouteName: 'AuthStack'
    })
)
