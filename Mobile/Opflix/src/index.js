import SignInScreen from './Pages/signin';
import { createStackNavigator } from 'react-navigation-stack';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator ,} from 'react-navigation';
import MainScreen from './Pages/Main';
import CadastroScreen from './Pages/Cadastrar';
import CategoriasScreen from './Pages/Categoria'


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
      activeBackgroundColor: '#FF0000',
      inactiveBackgroundColor: 'white',
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
    Categorias:{
        screen: CategoriasScreen
    }    
},
{
    initialRouteName: 'Lancamentos',
    tabBarOptions: {
      showLabel: true,
      showIcon: true,
      activeBackgroundColor: '#FF0000',
      inactiveBackgroundColor: 'white',
      style: {
        width: '100%',
        height: 50  
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
