/**
 * email方式登录的页面
 *
 * @author: xioaming
 * @date: 2016/07/02
 */

import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Platform,
  Image,
  Text,
  StatusBar,
  TextInput,
  TouchableNativeFeedback
} from 'react-native';

const showOrNot = false;

export default class EmailLogin extends Component{
  _goBack(){
    let {navigator} = this.props;
    if(navigator){
      navigator.pop();
    }
  }
  render(){
    return(
      <View style={styles.backView}>
        <StatusBar
          hidden={showOrNot}
        />
        <View style={styles.toolbar}>
          <TouchableNativeFeedback onPress={this._goBack.bind(this)}>
            <View style={styles.backBtn}>
              <Image source={require("../images/back_nor.png")}/>
            </View>
          </TouchableNativeFeedback>
          <Text style={styles.title}>Sign in with Email</Text>
        </View>
        <TextInput 
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput 
          style={styles.input}
          placeholder="Password"
        />
        <View style={{alignItems: "center", marginTop: 20}}>
          <View style={[styles.buttons,{backgroundColor:"#5ae8df"}]}>
            <Text style={styles.btnText}>Sign in</Text>
          </View>
          <Text style={styles.linkText}>Forget your password?</Text>
          <View style={[styles.buttons,{borderColor:"#5ae8df", borderWidth: 0.5}]}>
            <Text style={{fontSize: 18, color:"#5ae8df"}}>Sign up with Email</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  backView: {
    paddingTop: (Platform.os === 'ios')?20:0,
    backgroundColor: "#fff",
    flex:1
  },
  toolbar: {
    backgroundColor: "#5ae8df",
    flexDirection: "row",
    height: 44,
    alignItems: "center"
  },
  title: {
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    flex: 1
  },
  backBtn: {
    backgroundColor: "#5ae8df",
    width: 40,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    borderBottomColor: "#333",
    borderBottomWidth: 0.5,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 18
  },
  linkText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    marginBottom:20
  },
  buttons: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    width: 350
  },
  btnText: {
    color:"#fff",
    fontSize: 18
  }
});
