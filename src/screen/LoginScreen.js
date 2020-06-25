import React,{useState} from 'react'
import { View, Image , Alert} from 'react-native'
import ButtonDefault from '../components/ButtonDefault'
import logo4 from '../image/logo4.png'
import InputDefault from '../components/InputDefault';
import callLogin from '../api/callLogin';


const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')

    const doLogin = () => {
        callLogin(email)
            .then(function (response) {
                navigation.navigate('ListScreen')
                console.log(response);
            })
            .catch(function (error) {
                Alert.alert('Usuario Invalido!')
                console.log(error);
            });
    }

    return (
        <View style={styles.container} >
            <View style={styles.logoView}>
                <Image
                    style={styles.logo}
                    source={logo4}
                />
            </View>
            <View>
                <InputDefault placeholder={'Email'} name={'email'} type={'material'}
                    value={email}
                    onChangeText={email => setEmail(email)}
                />
            </View>

            <View style={styles.containerButton}>
                <ButtonDefault title={'Entrar'} onPress={doLogin} />
                <ButtonDefault title={'Cadastrar'} onPress={() => { navigation.navigate('RegisterScreen') }} />

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

// const mapStoreToProps = (store) => {
//     return { email: store.reducer.email }
// }

// export default connect(mapStoreToProps)(LoginScreen)
export default LoginScreen
