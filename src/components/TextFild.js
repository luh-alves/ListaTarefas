import React from 'react';
import { TextInput } from 'react-native';


const TextFild = () => {
    return (
        <TextInput style={styles.text}
            placeholder='seu email'
            placeholderTextColor='gray'
        />

    );
}
const styles = {
    container: {
        alignItems: 'center',
        flex: 1,
    },
    text: {
        borderColor: '#1a1423',
        height: 50,
        width: 225,
        backgroundColor: '#ebebeb',
        margin: 20,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: "center",
        fontSize: 20,
        color: '#ff6700',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        marginVertical: 8,
        marginHorizontal: 2,
        paddingLeft: 7
    }

}
export default TextFild;





