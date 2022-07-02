/*
import React,{Component} from 'react';
import{View,Text,StyleSheet,TouchableWithoutFeedback,Animated,Button} from  'react-native';
import {AntDesign,Entypo} from '@expo/vector-icons';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native';
//import menuPrincipal from './menuPrincipal';
export default function(props) {
    function MyBackButton() {
        const navigation = useNavigation();
      
        return (
          <Button
            title="Back"
            onPress={() => {
              navigation.navigate('adicionarProduto');
            }}
          />
        );
      }
    const navigation = useNavigation();
  
    return <MyBackButton {...props} navigation={navigation} />;
  }
  export default class FabButton extends Component{
    render(){ 
      const { navigation } = this.props;
        //const navigation = useNavigation();
        return(
            <View style={[styles.container, this.props.style]}>
                <TouchableWithoutFeedback  onPress={() =>
                  navigation.navigate('telaAdicionarProduto')}>
                 
                    <Animated.View style={[styles.button, styles.menu]}>
                    <AntDesign name ="plus" size={24} color="#fff"/>
                    </Animated.View>
                </TouchableWithoutFeedback>
              
                
            </View>
            //pq </TouchableWithoutFeedback> aparece o botao e </TouchableNativeFeedback> nao
        );
    }
  }

  const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        position: 'absolute'
    },
    button:{
      width:60,
      position:'absolute',
        height:60,
        borderRadius:60/2,
        justifyContent:'center',
        alignItems:'center',
        shadowColor:"#002138",
        shadowOpacity:0.3,
        shadowOffset:{
          height:10,
        }
      },
      menu:{
        backgroundColor:'#00213b'
      },
      
      
    });
    
    
    */