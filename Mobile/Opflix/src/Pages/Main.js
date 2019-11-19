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

} from 'react-native';

const styles = StyleSheet.create({

    tabBarEstilizacao: {
        width: 25,
        height: 25,

    },
    tudo: {
        backgroundColor: "black",
        width: '100%',
        flex:1,
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
        color: 'red'
    },
    Titulo: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff'
        
    },
    imagem:{
        height: 300,
        width: 200,
        flex: 1,
        borderRadius:15.5,
        marginLeft: 100
    
    },
    picker: {
        borderRadius: 50,
    },
    




})

class Main extends Component {
    constructor() {
        super();
        this.state = {
            lista: [],
            // Imagem : '',
            listac: [],
            categoria: [],


            valorSelecionado: null
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

    alterarValor = (valor) => {
        this.setState({ valorSelecionado: valor })
        if (valor == 0) {
            this.setState({ listac: [] })
        }

        this.setState({ listac: this.state.lista.filter(x => x.idCategoria == valor) })
    }


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


    _ListarCategoria = async () => {
        let token = await AsyncStorage.getItem('@Opflix:token')
        await fetch('http://192.168.3.201:5000/api/categorias', {
            headers: {
                'Authorization': 'Bearer ' + token,
                "Content-Type": "application/json",
                'Accept': 'application/json'
            }
        })
            // .then(x => x.json())
            .then(x => x.json())
            .then(x => this.setState({ categoria: x }))
            .catch(x => console.warn('erro: ' + x))
    }


    componentDidMount() {
        this._ListarLancamentos();
        this._ListarCategoria();
    }


    render() {
        return (
            <View style={styles.tudo}>

                <View>
                    <Picker selectedValue={this.state.valorSelecionado} onValueChange={this.alterarValor} style={{ backgroundColor: '#fff' }}>
                        <Picker.Item label="Selecione um Gênero" value="0" />
                        {this.state.categoria.map(item => {
                            return (
                                <Picker.Item label={item.categoria} value={item.idCategoria} />
                            )
                        })}
                    </Picker>
                </View>

                <View>
                    <ScrollView>
                        <View>
                            <View>
                                {this.state.listac.length > 0 ? <FlatList
                                    data={this.state.listac}
                                    keyExtractor={key => key.idLancamento}
                                    renderItem={({ item }) => (
                                        <View style={styles.listItem}>
                                             <View >
                                                    <Image 
                                                    style={styles.imagem} 
                                                    source={{ uri: item.imagem}}
                                                    />
                                            </View>
                                            
                                             <View style={styles.listRow}>
                                                <Text style={styles.Titulo} >Nome:</Text>
                                                <Text style={styles.listValue}>{item.nome}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.Titulo}>Sinopse:</Text>
                                                <Text>{item.sinopse}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.Titulo}>duracaoMin:</Text>
                                                <Text>{item.duracaoMin}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.Titulo}>dataDeLancamento:</Text>
                                                <Text>{item.dataDeLancamento}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.Titulo}>Categoria:</Text>
                                                <Text>{item.idCategoriaNavigation.categoria}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.Titulo}>Tipo:</Text>
                                                <Text>{item.idTipoNavigation.tipo}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.Titulo}>:</Text>
                                                <Text>{item.idClassificacaoNavigation.classificacao1}</Text>
                                            </View> 
                                           
                                        </View>
                                    )}
                                /> :
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
                                                <View>
                                                    <Text style={styles.Titulo}>duracaoMin:</Text>
                                                    <Text>{item.duracaoMin}</Text>
                                                </View>
                                                <View>
                                                    <Text style={styles.Titulo}>dataDeLancamento:</Text>
                                                    <Text>{item.dataDeLancamento}</Text>
                                                </View>
                                                <View>
                                                    <Text style={styles.Titulo}>Categoria:</Text>
                                                    <Text>{item.idCategoriaNavigation.categoria}</Text>
                                                </View>
                                                <View>
                                                    <Text style={styles.Titulo}>Tipo:</Text>
                                                    <Text>{item.idTipoNavigation.tipo}</Text>
                                                </View>
                                                <View>
                                                    <Text style={styles.Titulo}>:</Text>
                                                    <Text>{item.idClassificacaoNavigation.classificacao1}</Text>
                                                </View>
                                                {/* <View style={styles.imagem} >
                                                    <Image 
                                                    source={{ uri: item.imagem}}
                                                    />
                                                    </View> */}
                                            </View>
                                        )}
                                    />}
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );

    }
}
export default Main;