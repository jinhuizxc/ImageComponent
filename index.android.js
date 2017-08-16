/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {AppRegistry,View,Image,Text, Animated, Easing,StyleSheet} from 'react-native';

let array1 = [
    {title:'2月',data:75},
    {title:'3月',data:100},
    {title:'4月',data:35},
    {title:'5月',data:55},
    {title:'6月',data:45},
    {title:'7月',data:75},
];

export default class PillarsImageComponent extends React.PureComponent{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            itemHeight:new Animated.Value(0)
        };
    }

    componentDidMount() {
        this.startAnimated()
    }

    startAnimated(){
        Animated.timing(this.state.itemHeight,{
            toValue:1,
            duration:1000,
            easing:Easing.linear
        }).start();
    }

    render(){

        const mHeight = this.state.itemHeight.interpolate({
            inputRange:[0,1],
            outputRange:[0,80]
        });

        return(
            <View style={styles.container}>
              <View style={styles.context}>
                  {array1.map((item,i)=>{
                      return(
                          <View key={i}>
                            <View style={styles.topView}>
                              <Animated.View
                                  style={[styles.internalView,
                                      {height:this.state.itemHeight.interpolate({
                                          inputRange:[0,1],
                                          outputRange:[0,item.data]
                                      })}]}/>
                            </View>
                            <Text>{item.title}</Text>
                          </View>
                      )
                  })}
              </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgb(250,250,250)'
    },
    context:{
        width:300,
        height:400,
        backgroundColor:'rgb(255,255,255)',
        borderRadius:10,
        elevation: 20,
        shadowOffset: {width: 0, height: 0},
        shadowColor: '#ccc',
        shadowOpacity: 1,
        alignItems:'flex-end',
        justifyContent:'space-around',
        flexDirection:'row',
        paddingBottom:20
    },
    topView:{
        width:15,
        height:150,
        backgroundColor:'rgb(250,250,250)',
        marginBottom:8,
        borderRadius:5
    },
    internalView:{
        width:15,
        borderRadius:8,
        backgroundColor:'rgb(124,131,226)',
        position:'absolute',
        bottom:0
    }
});

AppRegistry.registerComponent('ImageComponent', () => PillarsImageComponent);
