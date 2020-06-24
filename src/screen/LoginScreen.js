import React from 'react'
import { View, Image } from 'react-native'
import ButtonDefault from '../components/ButtonDefault'
import logo4 from '../image/logo4.png'
import InputDefault from '../components/InputDefault';
import { Button } from 'react-native-elements';

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
                <InputDefault placeholder={'Email'} name={'email'} type={'material'} />
            </View>

            <View style={styles.containerButton}>
                <ButtonDefault title={'Entrar'} onPress={() => { navigation.navigate('ListScreen') }} />
                <ButtonDefault title={'Cadastrar'} onPress={() => { navigation.navigate('RegisterScreen') }} />
                <Button style={styles.botton}
                    buttonStyle={styles.botton}
                    titleStyle={styles.botton}
                    title="Entrar"
                    type="outline"
                    raised
                   
                />
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
    },
    botton:{
        borderColor:'gray',
        color:'gray',
        
       
    }

}
export default LoginScreen;