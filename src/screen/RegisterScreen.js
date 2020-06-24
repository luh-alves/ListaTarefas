import React from 'react'
import ButtonDefault  from '../components/ButtonDefault'
import { View, Image } from 'react-native'
import logo4 from '../image/logo4.png'
import InputDefault from '../components/InputDefault';



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
                 <InputDefault placeholder={'Nome'} name={'user'} type={'font-awesome'} />
                 <InputDefault placeholder={'Email'} name={'email'} type={'material'}/>
            </View>
            <View style={styles.containerButton}>
                <ButtonDefault title={'Cadastrar'} onPress={() => { navigation.navigate('LoginScreen') }} />

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


