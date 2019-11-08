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

class Main extends Component {
    static navigationOptions = {
        tabBarIcon: () => (
            <Image
                source={require('../assets/popcorn.png')}
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
export default Main;