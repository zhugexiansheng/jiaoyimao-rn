
import React, { Component } from 'react';
//solve : Super expression must either be null or a function, not undefined

import{
    StyleSheet,
    Image,
} from 'react-native';


//export default
class Launcher extends Component {
    
    render() {
        return (
            <Image
                source={require('../images/itsme/ic_launcher.png')}
                style={styles.backgroundImage}/>
        );
    }

}

export default Launcher;


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
