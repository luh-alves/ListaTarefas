import React from 'react'
import { View, Image } from 'react-native'
import ButtonLogin from '../components/ButtonLogin'
import logo4 from '../image/logo4.png'
import { Icon } from 'react-native-elements'
import { Input } from 'react-native-elements';

const LoginScreen = ({ navigation }) => {

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

                <ButtonLogin title={'Entrar'} onPress={() => { navigation.navigate('ListScreen') }} />
                <ButtonLogin title={'Cadastrar'} onPress={() => { navigation.navigate('RegisterScreen') }} />
              
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
export default LoginScreen;