import { StylesContext } from '@material-ui/styles';
import React,{useState,useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { 
    View,
    KeyboardAvoidingView,
    Image,
    TextInput,
    Text,
    TouchableOpacity,
    StyleSheet,
    Animated,
    opacity,
    Keyboard} from 'react-native';

export default function login({navigation}){
    
    //essa constante faz o valor de x variar sem ter q criar cada valo de xy para haver a animaçao
    const [offset] = useState(new Animated.ValueXY({x:0,y:95}));
    const [opacity] = useState(new Animated.Value(0));//faz a amimaçao de estilingue começar invisivel
    const [logo] = useState(new Animated.ValueXY({x:130,y:155}));
    useEffect(()=>{//deixando o parentese varzio ele carrega a animaçao todas as vezes que o app for carregado
       KeyboardDidShowListener = Keyboard.addListener('keyboardDidShow',keyboardDidShow);//func exe quando keyb tiver aberto
       KeyboardDidHideListener = Keyboard.addListener('keyboardDidHide',keyboardDidHide);//quando tiver fechado
        Animated.parallel([//faz animaçoes diferentes serem executadas junto
            Animated.spring(offset.y,{
                toValue:0,
                speed:4,
                bounciness:20//da um efeito estilingue
            }),
            Animated.timing(opacity,{
                toValue:1,
                duration:200,
            })
        ]).start();
    },[]);//sai do valor 0 até o 80 da variavel offset na velocidade 4


        function keyboardDidShow(){

            Animated.parallel([
                Animated.timing(logo.x, {
                    toValue: 55,
                    duration: 100,        
                }),
                Animated.timing(logo.y, {
                    toValue: 65,
                    duration: 100,                
                }),
            ]).start();
        }
        function keyboardDidHide(){
            
            Animated.parallel([
                Animated.timing(logo.x, {
                    toValue: 130,
                    duration: 100,                
                }),
                Animated.timing(logo.y, {
                    toValue: 155,
                    duration: 100,                
                }),
            ]).start();
        }
        

    return(
        <KeyboardAvoidingView style={styles.background}>
        <View style={styles.containerLogo}>
            <Animated.Image 
            style={{
            width:logo.x,
            height:logo.y,
            }}
            source={require('../assets/nexusLogo.png')}//view que controla o logo da tela de login
            />
        </View>

        <Animated.View 
        style={[
            styles.container,
            {
                opacity: opacity,
                transform:[
                    {translateY: offset.y}//offset é uma varivel
                ]
            }
        ]}
        >
            <TextInput style={styles.input}
                placeholder=" Email"
                autoCorrect={false}
                onChangeText={()=>{}}//nao faz nada ainda
            />

            <TextInput style={styles.input}
                placeholder=" Senha"
                autoCorrect={false}
                onChangeText={()=>{}}//nao faz nada ainda
            />

        <TouchableOpacity onPress={()=> navigation.navigate('telaMenuPrincipal')} style={styles.btnSubmit} >
            <Text style={styles.btnSubmitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity  style={styles.btnRegister}>
            <Text style={styles.registerText}>Cadastrar</Text>
        </TouchableOpacity>
        </Animated.View>
    </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'#191919'
    },
    containerLogo:{
        flex: 1,
        justifyContent:'center',
    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:'90%',
        paddingBottom:50,
    },
    input:{
        backgroundColor:'#fff',
        width:"90%",
        marginBottom:15,
        color:'#222',
        fontSize:17,
        borderRadius:7,
        padding:10,
    },
    btnSubmit:{
        backgroundColor:'#74828F',
        width:"90%",
        height:45,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7
    },
    btnSubmitText:{
        color:'#FFF',
        fontSize:18,
    },
    btnRegister:{
        marginTop:20,
    },
    registerText:{
        color:'#FFF'
    }
});       
 