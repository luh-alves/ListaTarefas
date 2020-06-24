import React from 'react'
import { View } from 'react-native'
import { CheckBox } from 'react-native-elements'


const AddTasks = (props) => {

    return (
        <View>
            <CheckBox
                center
                title={props.title}
                iconRight
                iconType='material'
                checkedIcon='clear'
                uncheckedIcon='add'
                
            />
        </View>
    );
}

export default AddTasks