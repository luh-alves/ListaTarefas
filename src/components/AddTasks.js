import React from 'react'
import { View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { Icon } from '../../node_modules/react-native-elements';


const AddTasks = (props) => {

    return (
        <View>
            <TextInput style={styles.Input}
                center
                placeholder={props.placeholder}
                onChandText={props.onChandText}
                
                iconRight={
                    <Icon
                        type='material'
                        name='add'
                        
                    />
                }

            />
        </View>
    );
}
const styles = {
    Input: {
        borderColor: '#c4c4c4',
        height: 50,
        width: 260,
        margin: 20,
        borderRadius: 3,
        paddingLeft: 5,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 10,
    },

}

export default AddTasks