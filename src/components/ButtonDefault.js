
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';


const ButtonDefault = (props) => {
    return (
        <TouchableOpacity style={styles.styleButton}
            onPress={props.onPress}
        >
        
            <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableOpacity>

    );
}
const styles = {
    container: {
        alignItems: 'center',
        flex: 1,
    },
    styleButton: {
        borderColor: '#c4c4c4',
        height: 50,
        width: 225,
        margin: 20,
        borderRadius: 3,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 10,
    },
    buttonText: {
        textAlign: "center",
        fontSize: 20,
        color: '#757575',
    }

}
export default ButtonDefault  