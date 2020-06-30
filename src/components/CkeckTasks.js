import React, { useState } from 'react'
import { CheckBox } from 'react-native-elements'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'

const CheckBoxView = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.task.description}</Text>
            <View style={styles.icons}>
                <Icon
                    type='material'
                    name='create'
                    color='gray'
                />

                <Icon
                    type='material'
                    name='clear'
                    color='red'
                    onPress={() => props.onDeleteTask(props.task.id)}

                />
            </View>
        </View>
    )
}

const CheckTasks = (props) => {
    const [checked, setChecked] = useState(props.task.completed)
    const onCheckPressed = () => {
        console.log('check tasks', props.task)
        const newChecked = !checked
        setChecked(newChecked)
        props.onUpdateTask({ ...props.task, completed: newChecked })
    }

    return (
        <View >
            <CheckBox
                title={<CheckBoxView task={props.task}
                    onDeleteTask={props.onDeleteTask}
                    onUpdateTask={props.onUpdateTask}
                />}
                checked={checked}
                onPress={onCheckPressed}

            />
        </View>
    )
}

const styles = {
    container: {
        flexDirection: 'row',
        flex: 500,
    },

    icons: {
        flexDirection: 'row',
        flex: 200,
        justifyContent: 'space-around',
        marginLeft: 50
    },
    text: {
        flex: 300,

    }
}
export default CheckTasks;


