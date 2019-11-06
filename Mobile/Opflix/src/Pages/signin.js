import React, {
    Component,
} from 'react'

import {    
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet,
     
} from 'react-native';

const styles = StyleSheet.create({
    Input:{
        fontSize:20,
        alignSelf:"center"
    },

    button:{
        color:'red',
        fontSize:21 ,
        fontFamily: 'Agency FB',
        alignSelf: 'center',
        
    }
})




export default class SignIn extends Component {
    render() {
        return (
            <View>
                <TextInput placeholder='EMAIL'  placeholderTextColor='#000000' style={styles.Input}/>
                <TextInput placeholder='SENHA'  placeholderTextColor='#000000' style={styles.Input}/>

                <TouchableOpacity>

                    <Text style={styles.button}>Cadastrar</Text>
                </TouchableOpacity>

            </View>
        );

    }
}