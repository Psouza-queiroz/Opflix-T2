import React, {
    Component,
} from 'react'

import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    AsyncStorage,
   
     Image
    , ImageBackground

} from 'react-native';




const styles = StyleSheet.create({
    Input: {
        fontSize: 20,
        alignSelf: "center"
    },

    button: {
        color: 'red',
        fontSize: 21,
        fontFamily: 'Agency FB',
        alignSelf: 'center',
    },
    app: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        flex: 1,
        alignContent: 'center',
        alignItems: 'center'
    },
    tabBarEstilizacao: {
        width: 25,
        height: 25,

    },
    Image: {
        display: 'flex',
        justifyContent: 'center',
    },
})






export default class SignIn extends Component {

    static navigationOptions = {
        tabBarIcon: () => (
            <Image
                source={require('../assets/login.png')}
                style={styles.tabBarEstilizacao}
            />
        ),
    };

    constructor() {
        super();

        this.state = {
            
            email: '',
            senha: '',           

        }
    }


    _irParaHome = async token => {
        if (token !== null) {
            try {
                console.warn(token)
                await AsyncStorage.setItem('@Opflix:token', token);
                this.props.navigation.navigate('MainNavigator');
            } catch (error) {

            }
        }
    }


    _irParaSeiLaOnde = () => {
        this.props.navigation.navigate('Cadastro')
    }

    _RealizarLogin = async () => {
        await fetch('http://192.168.3.201:5000/api/usuarios/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                senha: this.state.senha,
            })
        })

            .then(response => response.json())
            .then(data => this._irParaHome(data.token))
            .catch(error => console.warn(error));
    }
    

    render() {
        return (
          

            <View style={styles.app}>
                <View>


                <Image style={styles.Image} source={require('../assets/logo_opflix.png')}></Image>

                <TextInput placeholder='EMAIL' placeholderTextColor='#000000' onChangeText={(email => this.setState({ email: email }))} style={styles.Input} />
                <TextInput placeholder='SENHA' placeholderTextColor='#000000' onChangeText={(senha => this.setState({ senha: senha }))} secureTextEntry={true} style={styles.Input} />
                
                <TouchableOpacity onPress={this._RealizarLogin}>

                    <Text style={styles.button}>Login</Text>
                    
                </TouchableOpacity>

                </View>


            </View>
        
        );

    }
}