
/*import React,{
    Component,
    StyleSheet,
    Image,
} from 'react-native';*/

import React, { Component } from 'react';
import {
  /*  Component,*/
    StyleSheet,
    Image,
} from 'react-native';

export default class Launcher extends Component {


    render() {
        return (
            <Image
                source={require('../images/itsme/ic_launcher.png')}
                style={styles.backgroundImage}/>
        );
    }

}




const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null,
        resizeMode: 'cover'
    }
});
