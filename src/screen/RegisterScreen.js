import React from 'react'
import ButtonLogin from '../components/ButtonLogin'
import { View, Image } from 'react-native'
import logo4 from '../image/logo4.png'
import { Icon } from 'react-native-elements'
import { Input } from 'react-native-elements';



const RegisterScreen = ({ navigation }) => {

    return (
        <View style={styles.container} >
            <View style={styles.logoView}>
                <Image
                    style={styles.logo}
                    source={logo4}
                />
            </View>


            <View>
                <Input
                    placeholder='Nome'
                    leftIcon={
                        <Icon
                            name='user'
                            type='font-awesome'
                            size={24}
                            color='black'
                        />

                    }
                />
                <Input
                    placeholder='Email'
                    leftIcon={
                        <Icon
                            name='email'
                            type='material'
                            size={24}
                            color='black'
                        />
                    }
                />
            </View>
            <View style={styles.containerButton}>
                <ButtonLogin title={'Cadastrar'} onPress={() => { navigation.navigate('LoginScreen') }} />

            </View>

        </View>
    )
}
const styles = {

    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#ffffff',
    },
    containerButton: {
        flex: 2,
    },

    textInput: {
        height: 100,
        width: 350,
        backgroundColor: '#9a031e',
        borderColor: '#f6aa1c',
        borderWidth: 2,
        margin: 20,
        borderRadius: 15,
    },
    logoView: {
        justifyContent: 'center',
        alignSelf: 'center',
        flex: 1
    },
    logo: {
        padding: 20,
        width: 250,
        height: 170
    }

}
export default RegisterScreen;


