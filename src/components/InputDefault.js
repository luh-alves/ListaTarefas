import React from 'react'
import { View } from 'react-native'
import { Icon } from 'react-native-elements'
import { Input } from 'react-native-elements';

const InputDefault = (props) => {
    return (
        <View>
            <Input
                placeholder={props.placeholder}
                leftIcon={
                    <Icon
                        name={props.name}
                        type={props.type}
                        size={24}
                        color='black'
                    />
                }
            />
        </View>
    )
}

export default InputDefault;