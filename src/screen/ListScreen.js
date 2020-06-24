import React from 'react'
import { View } from 'react-native'
import ButtonDefault from '../components/ButtonDefault'
import TextFieldName from '../components/TextFieldName';
import AddTasks from '../components/AddTasks';
import CheckTasks from '../components/CkeckTasks'


//import { turnOnOrOff } from '../actions/turnOnOrOff';

const ListScreen = ({ navigation }) => {

    return (
        <View style={styles.container} >
            {/* meu redux vai passar o nome */}
            <TextFieldName title={'Luciana'} />

            <View>
                {/* meu redux vai passar a tarefa para adicionar */}
                <AddTasks title={'O que você tem para fazer?'} />

                {/* passar miha tarefa por redux */}
                <CheckTasks style={styles.textTasks}
                 title={'algoritmos'} 
                   

                />
            </View>
            <View style={styles.containerButton}>
                <ButtonDefault title={'Sair'} onPress={() => { navigation.navigate('LoginScreen') }} />
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
    textTasks:{
        fontSize: 18
    }

}

// const mapStateToProp = (store) => {
//     return {
//         on: store.on
//     }

export default ListScreen