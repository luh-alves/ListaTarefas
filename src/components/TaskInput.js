import React,{useState} from 'react'
import { View } from 'react-native'
import { Input } from 'react-native-elements';


const TaskInput = (props) => {
    const [task, setTask] = useState('')
    return (
        <View>
            <Input
                placeholder={props.placeholder}
                rightIcon={
                    { type: props.type, name: props.name, onPress: ()=>props.onCreateTask(task) }                   
                }
                onChangeText={task => setTask(task)}
                
            />
        </View>
    )
}


export default TaskInput;

