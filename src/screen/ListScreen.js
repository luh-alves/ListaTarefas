import React from 'react'
import { View, Text, Image } from 'react-native'
import ButtonLogin from '../components/ButtonLogin'
import { CheckBox } from 'react-native-elements'
import { connect } from 'react-redux';
//import { turnOnOrOff } from '../actions/turnOnOrOff';

const ListScreen = ({ navigation }) => {

    return (
        <View style={styles.container} >
            <View style={styles.textInput}>
                <Text style={styles.textName}>Olá, Luciana</Text>
                <Text>Essas são suas tarefas!</Text>
            </View>
            <View>
                <CheckBox
                    center
                    title='O que você tem para fazer?'
                    iconRight
                    iconType='material'
                    checkedIcon='clear'
                    uncheckedIcon='add'
                    checkedColor='red'
                //checked={this.state.checked}
                />
                <CheckBox
                    title='Algoritmos'
                    iconRight
                    iconType='material'
                    //checkedIcon='clear'
                    uncheckedIcon='clear'
                    checkedColor='red'
                //checked={this.state.checked}
                />
                <CheckBox
                    title='Algoritmos'
                    iconRight
                    iconType='material'
                    //checkedIcon='clear'
                    uncheckedIcon='create'
                    checkedColor='red'

                //checked={this.state.checked}
                />
                <CheckBox
                    title='Algoritmos'

                //checked={this.state.checked}
                />




                {/* <CheckBox
                   
                    checked={this.state.checked}
                    onPress={() => this.setState({ checked: !this.state.checked })}
                /> */}



            </View>


            <View style={styles.containerButton}>
                <ButtonLogin title={'Sair'} onPress={() => { navigation.navigate('LoginScreen') }} />
            </View>


        </View>
    )
}
const styles = {

    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#ffffff',
    },
    containerButton: {
        flex: 2,
    },

    textInput: {
        height: 60,
        width: 238,
        margin: 20,
        fontSize: 21,
        color: '#757575',
        justifyContent: 'center',
        paddingLeft: 5,
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    textName: {
        fontSize: 23
    },

    logoView: {
        justifyContent: 'center',
        alignSelf: 'center',
        flex: 1
    },
    logo: {
        width: 250,
        height: 120
    }

}

const mapStateToProp = (store) => {
    return {
        on: store.on
    }
}
export default connect(mapStateToProp)(ListScreen);