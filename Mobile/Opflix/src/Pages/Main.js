import React, {
    Component,
} from 'react'

import {
    Text,
    View,
    Image,
    StyleSheet,
    Picker,
    AsyncStorage,
    ScrollView,
    FlatList,
} from 'react-native'
import Axios from 'axios';

const styles = StyleSheet.create({

    tabBarEstilizacao: {
        width: 25,
        height: 25,

    },
    tudo:{
        backgroundColor : "black",
    },
    listItem: {
        marginVertical: 15,
        backgroundColor: 'white',   
        borderColor: 'black',
        borderRadius: 15.5,
        borderWidth: 1,
        margin: 10,
    },
    listRow: {
        flexDirection: 'row',
        marginVertical: 5,
        marginHorizontal: 10,
    },
    listValue: {
        fontSize: 20,
        color:'lightgrey'
    },
    Titulo:{
        fontSize: 15,
            fontWeight: 'bold',
            color:'#fff'
    }




})

class Main extends Component {
    constructor() {
        super();
        this.state = {
            lista: [],
        }
    }

    static navigationOptions = {
        tabBarIcon: () => (
            <Image
                source={require('../assets/popcorn.png')}
                style={styles.tabBarEstilizacao}
            />
        ),
    };

    _ListarLancamentos = async () => {
        let token = await AsyncStorage.getItem('@opflix:token')
        await fetch('http://192.168.3.201:5000/api/Lancamentos', {
            headers: {
                'Authorization': 'Bearer ' + token,
                "Content-Type": "application/json"
            }
        })
            .then(x => x.json())
            .then(y => this.setState({ lista: y }))
            .catch(x => console.warn('erro:' + x))
    }

    componentDidMount() {
        this._ListarLancamentos()
    }


    render() {
        return (
            <View style={styles.tudo}>
                <ScrollView>
                    <FlatList
                        data={this.state.lista}
                        keyExtractor={key => key.idLancamento}
                        renderItem={({ item }) => (
                            <View style={styles.listItem}>
                                <View style={styles.listRow}>
                                    <Text style={styles.Titulo} >Nome:</Text>
                                    <Text style={styles.listValue}>{item.nome}</Text>
                                </View>
                                <View>
                                    <Text style={styles.Titulo}>Sinopse:</Text>
                                    <Text>{item.sinopse}</Text>
                                </View>
                            </View>
                        )}
                    >
                    </FlatList>
                </ScrollView>
            </View>
        );

    }
}
export default Main;