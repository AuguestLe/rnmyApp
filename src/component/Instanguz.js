import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Dimensions,
  View
} from 'react-native';
import {  Button } from 'native-base';

const {width,height} = Dimensions.get('window');
import rightBack from '../source/PublicImage/fastOnlineJianTou.png';

export default class Instanguzi extends Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={[styles.instItem,styles.margint]}>
                <Text>品牌车型</Text>
                <View style={styles.instItemRit}>
                    <Text style={styles.defauFont}>请选择品牌车型</Text>
                    <Image style={styles.instItemRitImg} source ={rightBack}/>
                </View>
            </View>
            <View style={styles.instItem}>
                <Text>上牌时间</Text>
                <View style={styles.instItemRit}>
                    
                    <Text style={styles.defauFont}>请选择品牌车型</Text>
                    <Image style={styles.instItemRitImg} source ={rightBack}/>
                </View>
            </View>
            <View style={styles.instItem}>
                <Text>行驶公里</Text>
                <View style={styles.instItemRit}>
                    <TextInput 
                        style={styles.inputBox} 
                        underlineColorAndroid={'transparent'}
                        keyboardType ={'numeric'}
                        caretHidden ={true}
                        placeholder="请输入行驶公里"/>
                    <Image style={styles.instItemRitImg} source ={rightBack}/>
                </View>
            </View>
            <View style={styles.instItem}>
                <Text>上牌地区</Text>
                <View style={styles.instItemRit}>
                    <Text style={styles.defauFont}>请选择品牌车型</Text>
                    <Image style={styles.instItemRitImg} source ={rightBack}/>
                </View>
            </View>
            <Button block style={styles.inButton}>
                <Text>立即评估</Text>
            </Button>
            
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
  },
  instItem: {
    height:40,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f3f8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingLeft: width*0.04,
  },
  instItemRit: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  instItemRitImg:{
    marginLeft: 10,
    marginRight: 10,
  },
  defauFont: {
      fontSize: 12,
      color: '#999'
  },
  margint: {
        marginTop:30
  },
  inputBox: {
        borderWidth: 0,
        width:width*0.6,
        textAlign: 'right',
        fontSize: 12
  },
  inButton: {
        width: width*0.8,
        height: 60,
        borderRadius: 5,
        backgroundColor:'#4b92ec',
        //marginVertical: 'center',
  }
});

