import React, { Component } from 'react';
//solve : Super expression must either be null or a function, not undefined

import{
    TouchableWithoutFeedback,
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';


const ItemMarginTop = 20;
const ItemPadding = 30;


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
                    <View style={{marginTop: ItemMarginTop,borderWidth: 1,borderRadius: 5,borderStyle: this.state.showBorder ? 'dotted' : null, flexDirection: 'row', marginHorizontal: 40 }}>
                        <Image source={require('../images/itsme/facebook_icon_login.png')} style={{width:45,height:45}} />
                        <Text style={{fontSize: 11, marginLeft: 50, textAlignVertical:'center'}}>facebook</Text>
                    </View>
                    <View style={{marginTop: ItemMarginTop,borderWidth: 1,borderRadius: 5,borderStyle: this.state.showBorder ? 'dotted' : null}}>
                        <Text style={{fontSize: 11}}>twitter</Text>
                    </View>
                    <View style={{marginTop: ItemMarginTop,borderWidth: 1,borderRadius: 5,borderStyle: this.state.showBorder ? 'dotted' : null}}>
                        <Text style={{fontSize: 11}}>email</Text>
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



