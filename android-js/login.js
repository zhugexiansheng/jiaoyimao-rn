import React, { Component } from 'react';
//solve : Super expression must either be null or a function, not undefined

import{
    TouchableWithoutFeedback,
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';


const styles = StyleSheet.create({
    itemView: {
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 20,
        borderStyle: null,
        flexDirection: 'row',
        marginHorizontal: 40,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20
    },
    iconImage: {
        width:35,
        height:35
    },
    iconText:{
        fontSize: 21,
        marginLeft: 75,
        textAlignVertical:'center',
        alignSelf: 'center',
    }
});


var ViewBorderStyleExample = React.createClass({

    getInitialState() {
        return {
            showBorder: false
        };
    },

    render() {
        return (
            <TouchableWithoutFeedback onPress={this._handlePress}>
                <View>
                    <View style={styles.itemView}>
                        <Image source={require('../images/itsme/facebook_icon_login.png')} style={styles.iconImage} />
                        <Text style={styles.iconText}>facebook</Text>
                    </View>
                    <View style={styles.itemView}>
                        <Image source={require('../images/itsme/twitter_icon_login.png')} style={styles.iconImage} />
                        <Text style={styles.iconText}>twitter</Text>
                    </View>
                    <View style={styles.itemView}>
                        <Image source={require('../images/itsme/email_icon_login.png')} style={styles.iconImage} />
                        <Text style={styles.iconText}>email</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    },

    _handlePress() {
       // this.setState({showBorder: !this.state.showBorder});
    }
});

export default class Login extends Component{

    render(){
        return(
               <View>
                   <Image source={require('../images/itsme/ic_launcher.png')} style={{alignSelf:'center',marginTop: 40}}/>
                   <Text style={{alignSelf: 'center', marginTop:60}}>sign in</Text>
                   <ViewBorderStyleExample />
                   <View></View>
                </View>
        );
    }

}



