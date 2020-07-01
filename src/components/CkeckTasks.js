import React, { useState } from 'react'
import { CheckBox } from 'react-native-elements'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'

const CheckBoxView = (props) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <Text>{props.title}</Text>
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
                />
            </View>
        </View>
    )
}

const CheckTasks = (props) => {
    const [checked, setChecked] = useState(false)

    return (
        <View >
            <CheckBox
                title={<CheckBoxView title={props.title} />}
                checked={checked}
                onPress={() => setChecked(!checked)}
            />
        </View>
    )
}

const styles = {
    icons: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        marginLeft: 100
    }
}
export default CheckTasks;


