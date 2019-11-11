import React, {
    Component,
} from 'react'

import {
    Text,
    View,
    Image,
    StyleSheet,
} from 'react-native'



const styles = StyleSheet.create({

    tabBarEstilizacao: {
        width: 25,
        height: 25,

    },




})

class Categorias extends Component {
    static navigationOptions = {
        tabBarIcon: () => (
            <Image
                source={require('../assets/icon.png')}
                style={styles.tabBarEstilizacao}
            />
        ),
    };

    render() {
        return (
            <View>
                <Text>so para funcionar</Text>
            </View>
        );

    }
}
export default Categorias;