import React, { Component } from 'react';
//solve : Super expression must either be null or a function, not undefined

import{
    TouchableWithoutFeedback,
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';

//var TouchableWithoutFeedback = require('TouchableWithoutFeedback');

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
                    <View style={{marginTop: 5,borderWidth: 1,borderRadius: 5,borderStyle: this.state.showBorder ? 'dotted' : null,padding: 5 }}>
                        <Text style={{fontSize: 11}}>Dotted border style</Text>
                    </View>
                    <View style={{marginTop: 5,borderWidth: 1,borderRadius: 5,borderStyle: this.state.showBorder ? 'dotted' : null,padding: 5 }}>
                        <Text style={{fontSize: 11}}>Dotted border style</Text>
                    </View>
                    <View style={{marginTop: 5,borderWidth: 1,borderRadius: 5,borderStyle: this.state.showBorder ? 'dotted' : null,padding: 5 }}>
                        <Text style={{fontSize: 11}}>Dotted border style</Text>
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


/* <View style={{width:70}}>
 <Image source={require('../images/itsme/ic_launcher.png')} style={{alignSelf:'center',width:45,height:45}} />
 <Text style={{marginTop:5,alignSelf:'center',fontSize:11,color:'#555555',textAlign:'center'}}>电影</Text>
 </View>
 <View style={{width:70}}>
 <Image source={require('../images/itsme/ic_launcher.png')} style={{alignSelf:'center',width:45,height:45}} />
 <Text style={{marginTop:5,alignSelf:'center',fontSize:11,color:'#555555',textAlign:'center'}}>酒店</Text>
 </View>
 <View style={{width:70}}>
 <Image source={require('../images/itsme/ic_launcher.png')} style={{alignSelf:'center',width:45,height:45}} />
 <Text style={{marginTop:5,alignSelf:'center',fontSize:11,color:'#555555',textAlign:'center'}}>KTV</Text>
 </View>
 <View style={{width:70}}>
 <Image source={require('../images/itsme/ic_launcher.png')} style={{alignSelf:'center',width:45,height:45}} />
 <Text style={{marginTop:5,alignSelf:'center',fontSize:11,color:'#555555',textAlign:'center'}}>外卖</Text>
 </View>*/

/*   <View style={{flexDirection:'row',marginTop:10}}>
 <View style={{width:70}}>
 <Image source={require('../images/itsme/ic_launcher.png')} style={{alignSelf:'center',width:45,height:45}} />
 <Text style={{marginTop:5,textAlign:'center',fontSize:11,color:'#555555'}}>优惠买单</Text>
 </View>
 <View style={{width:70}}>
 <Image source={require('../images/itsme/ic_launcher.png')} style={{alignSelf:'center',width:45,height:45}} />
 <Text style={{marginTop:5,alignSelf:'center',fontSize:11,color:'#555555',textAlign:'center'}}>周边游</Text>
 </View>
 <View style={{width:70}}>
 <Image source={require('../images/itsme/ic_launcher.png')} style={{alignSelf:'center',width:45,height:45}} />
 <Text style={{marginTop:5,alignSelf:'center',fontSize:11,color:'#555555',textAlign:'center'}}>休闲娱乐</Text>
 </View>
 <View style={{width:70}}>
 <Image source={require('../images/itsme/ic_launcher.png')} style={{alignSelf:'center',width:45,height:45}} />
 <Text style={{marginTop:5,alignSelf:'center',fontSize:11,color:'#555555',textAlign:'center'}}>今日新单</Text>
 </View>
 <View style={{width:70}}>
 <Image source={require('../images/itsme/ic_launcher.png')} style={{alignSelf:'center',width:45,height:45}} />
 <Text style={{marginTop:5,alignSelf:'center',fontSize:11,color:'#555555',textAlign:'center'}}>丽人</Text>
 </View>
 </View>*/

