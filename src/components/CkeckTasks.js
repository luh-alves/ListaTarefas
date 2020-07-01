import React, { useState } from 'react'
import { CheckBox } from 'react-native-elements'
import { View, TextInput } from 'react-native'
import { Icon } from 'react-native-elements'

const CheckTasks = (props) => {
    const [checked, setChecked] = useState(props.task.completed)
    const [editable, setEditable] = useState(false)
    const [value, setValue] = useState(props.task.description)

    const onCheckPressed = () => {
        const newChecked = !checked
        setChecked(newChecked)
        props.onUpdateTask({ ...props.task, completed: newChecked })
    }

    const onSavePress = () => {
        props.onUpdateTask({ ...props.task, description: value })
        setEditable(false)
    }
    return (
        <View style={styles.container} >
        {/* <CheckBox title={'ii'}/> */}
            <CheckBox
                checked={checked}
                onPress={onCheckPressed}
            />
            <TextInput style={styles.text}
                editable={editable}
                value={value}
                onChangeText={(text) => setValue(text)}
            >

            </TextInput>
            <View style={styles.icons}>
                {editable ?
                    <Icon
                        type='material'
                        name='done'
                        color='green'
                        onPress={onSavePress}
                    />
                    :
                    <Icon
                        type='material'
                        name='create'
                        color='gray'
                        onPress={() => setEditable(true)}
                    />
                }

                <Icon
                    type='material'
                    name='clear'
                    color='red'
                    onPress={() => props.onDeleteTask(props.task.id)}

                />
            </View>
        </View >
    )
}

const styles = {
    container: {
        flexDirection: 'row',
        flex: 500,
        borderColor: '#c4c4c4',
        height: 200,
        width: 350,
        margin: 20,
        borderRadius: 4,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: "center",
        fontSize: 20,
        backgroundColor:'#f5f5f5',
        
        
        
        
    },

    icons: {
        flexDirection: 'row',
        flex: 200,
        justifyContent: 'space-around',
        marginLeft: 30
    },
    text: {
        flex: 300,

    }
}
export default CheckTasks;
