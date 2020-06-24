import React from 'react';
import { Text, View } from 'react-native';

const TextFieldName = (props) => {
    return (
        <View style={styles.textInput}>
            <Text style={styles.textName}>Olá, {props.title}</Text>
            <Text>Essas são suas tarefas!</Text>
        </View>
    );
}
const styles = {
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

}
export default TextFieldName;





