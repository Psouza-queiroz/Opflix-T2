import SignInScreen from './Pages/signin';
import { createStackNavigator } from 'react-navigation-stack';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator ,} from 'react-navigation';
import MainScreen from './Pages/Main';
import CadastroScreen from './Pages/Cadastrar';
import userScreen from './Pages/user'


const AuthStack = createBottomTabNavigator({
    Login: {
        screen: SignInScreen
    },
    Cadastro: {
        screen: CadastroScreen
    },
    
},
{
    initialRouteName: 'Login',
    tabBarOptions: {
      showLabel: true,
      showIcon: true,
      activeBackgroundColor: '#e6e6e6',
      inactiveBackgroundColor: '',
      style: {
        width: '100%',
        height: 50  
}
    }
}

)

const MainNavigator = createBottomTabNavigator({
    Lancamentos: {
        screen: MainScreen
    },
    
    user : {
        screen: userScreen
    }    
},
{
    initialRouteName: 'Lancamentos',
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      activeBackgroundColor: '#ff8080',
      inactiveBackgroundColor: 'white',
      style: {
        width: '100%',
        height: 50  ,
        backgroundColor:'black'
}
    }
}


);


export default createAppContainer(
    createSwitchNavigator({
        MainNavigator,
        AuthStack,
    },
        {
            initialRouteName: 'AuthStack'
        })
)
