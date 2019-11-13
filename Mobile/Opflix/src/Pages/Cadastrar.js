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
    Linking,
    Image

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
    App:{
        height: '100%',
        display: 'flex',
        justifyContent: 'center'
        
    },
    tabBarEstilizacao: {
        width: 25,
        height: 25,

    },
    
})






export default class SignIn extends Component {

    constructor() {
        super();

        this.state = {
            nome: '',
            email: '',
            senha: '',
            imagem: ''

        }
    }



    _irParaSeiLaOnde = () => {
        this.props.navigation.navigate('Cadastro')
    }
    

    _RealizarCadastro = async () => {
        await fetch('http://192.168.3.201:5000/api/usuarios', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome:this.state.nome,
                email: this.state.email,
                senha: this.state.senha,
                imagem: this.state.imagem,
                permissao:"Usuario",
                imagem:"https://pbs.twimg.com/media/Csx_VnCXEAA8Q5r.jpg:large"
            })
        })

            .then(response => response.json())
            
            .catch(error => console.warn(error));
    }

    static navigationOptions = {
        tabBarIcon: () => (
            <Image
                source={require('../assets/Cadastro.png')}
                style={styles.tabBarEstilizacao}
            />
        ),
    };
    render() {
        return (
            <View style={styles.App}>
                <TextInput placeholder='Nome' placeholderTextColor='#000000' onChangeText={(nome => this.setState({ nome: nome }))} style={styles.Input} />
                <TextInput placeholder='EMAIL' placeholderTextColor='#000000' onChangeText={(email => this.setState({ email: email }))} style={styles.Input} />
                <TextInput placeholder='Imagem de perfil' placeholderTextColor='#000000' onChangeText={(imagem => this.setState({ imagem: imagem }))} style={styles.Input} />
                <TextInput placeholder='SENHA' placeholderTextColor='#000000' onChangeText={(senha => this.setState({ senha: senha }))} secureTextEntry={true} style={styles.Input} />

                <TouchableOpacity onPress={this._RealizarCadastro}>

                    <Text style={styles.button}>Cadastro</Text>
                </TouchableOpacity>

              

            </View>
        );

    }
}