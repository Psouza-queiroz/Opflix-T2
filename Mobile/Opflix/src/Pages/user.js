import
React, {
    Component
} from 'react';

import {
    View,
    Image,
    Text,
    StyleSheet,
    AsyncStorage

} from 'react-native';

import jwt from 'jwt-decode'

const styles = StyleSheet.create({

    imagem: {
        width: 100,
        height: 100,
        borderRadius: 100,
        borderColor: '#fff',
        borderWidth: 1,
        marginHorizontal: 12,
        marginVertical: 10,
        
    },

    username: {
        fontSize: 19,
        alignSelf: 'center',
        marginVertical: 5,
        color: 'white'
    },
    userDetails: {
        marginVertical: '7.5%',
        alignSelf: 'center'
    },
    tudo: {
        backgroundColor: '#333333',
        height: '100%',
        width: '100%',

    },
    tabBarEstilizacao: {
        width: 25,
        height: 25,

    },
})


export default class user extends Component {

    static navigationOptions = {
        tabBarIcon: () => (
            <Image
                source={require('../assets/iconp.png')}
                style={styles.tabBarEstilizacao}
            />
        ),
    };
    
    constructor() {
        super();
        this.state = {
            user: [],
            imagem :''

        }

    }


    _UserToken = async () => {
        let token = await AsyncStorage.getItem('@Opflix:token');
        let decoded = jwt(token);
        console.warn(decoded)
        this.setState({ user: decoded })
    }

    componentDidMount() {
        this._UserToken();
        
    }

    render() {
        return (

            <View style={styles.tudo}>
                <View style={styles.userDetails}>
                    <Image source={{ uri: this.state.user.Imagem }} style={styles.imagem} />
                    <Text style={styles.username}>{this.state.user.email}</Text>
                    <Text style={styles.username}>{this.state.user.Permissao}</Text>
                </View>

            </View>
        );
    }
}