
import React, { Component } from 'react';
//solve : Super expression must either be null or a function, not undefined

import{
    StyleSheet,
    Image,
} from 'react-native';

import Login from './login'

const STAY_TIME = 1 * 1000;

//export default
class Launcher extends Component {

    constructor(props) {
        super(props);
        var {navigator} = props;
        
        setTimeout(() => {
            navigator.replace({name: 'login', component: Login})
        }, STAY_TIME)
    }

    render() {
        return (
            <Image
                style={
                  {alignSelf: 'center',//水平居中
                   marginTop: 50
                  }
                }
                source={require('../images/itsme/ic_launcher.png')}
            />
        );
    }

}

export default Launcher;


