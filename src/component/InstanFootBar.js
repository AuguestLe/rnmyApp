import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Instanguzi from './Instanguz'

export default class InstanFootBar extends Component {
    constructor(props){
        super(props);
        this.state= {
            selectedTab:'popular'
        }
    }
    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected= {this.state.selectedTab==='popular'}
                    tabStyle={{borderRightWidth: 1,borderRightColor: '#ccc',}}
                    title="二手车估值"
                    selectedTitleStyle={{color:'#63B8FF'}}  
                    renderIcon={()=><Image style={styles.icon} source={require('../source/UsedCarValuation/valuation_dollars_gray.png')}/>}
                    renderSelectedIcon ={() =><Image style={[styles.icon,{tintColor:'#63B8FF'}]} source={require('../source/UsedCarValuation/valuation_dollars_blue.png')}/>}
                    onPress={()=>this.setState({selectedTab:'popular'})}
                    >
                    <Instanguzi/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected= {this.state.selectedTab==='trending'}
                    title="VIN码查询"
                    selectedTitleStyle={{color:'#63B8FF'}}  
                    renderIcon={()=><Image style={styles.icon} source={require('../source/UsedCarValuation/valuatin_VIN_gray.png')}/>}
                    renderSelectedIcon ={() =><Image style={[styles.icon,{tintColor:'#63B8FF'}]} source={require('../source/UsedCarValuation/valuatin_VIN_blue.png')}/>}
                    onPress={()=>this.setState({selectedTab:'trending'})}
                    >
                    <Text>222</Text>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    footBox: {
        height:50,
        backgroundColor:'#fff'
    }
});

