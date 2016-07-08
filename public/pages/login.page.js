/**
 * 登录界面
 * @author: xiaoming
 * @date: 2016/07/02
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableNativeFeedback,
  Alert
} from 'react-native';
import FirButton from "../components/FirButton/FirButton.js";
import LoginEmail from "./loginEmail.page.js";

const showOrNot = true;
const IMAGES = {
  LOGO: require("../images/login_app_icon.png"),
  FACEBOOK: require("../images/login_icon_facebook.png"),
  TWITTER: require("../images/login_icon_twitter.png"),
  EMAIL: require("../images/login_icon_email.png"),
}

export default class LoginPage extends Component{
    constructor(props){
      super(props);
      this._goToLink = this._goToLink.bind(this);
    }
    _goToLink(){
      let {navigator} = this.props;
      if(navigator){
        navigator.push({
          name: "LoginEmail",
          component: LoginEmail
        });
      }
    }
    render(){
        return(
            <View style={styles.container}>
                <StatusBar
                   hidden={showOrNot}
                 />
                <Image source={IMAGES.LOGO}/>
                <Text style={styles.welcome}>Sign in with </Text>
                <FirButton
                  img={IMAGES.FACEBOOK}
                  btnText="facebook"
                  press={this._goToLink}
                  />
                <FirButton
                  img={IMAGES.TWITTER}
                  btnText="twitter"
                  press={this._goToLink}
                  />
                <FirButton
                  img={IMAGES.EMAIL}
                  btnText="Email"
                  press={this._goToLink}
                  />
                <Text style={styles.footer}>
                   By singing up means you agree to 
                   <Text style={styles.linkText}>our terms</Text>
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  welcome: {
    fontSize: 18,
    textAlign: 'center',
    color: "#fff",
    marginTop: 80,
    marginBottom: 30
  },
  footer: {
    fontSize: 14,
    color: "#fff"
  },
  linkText: {
    color:"#45abde",
    textDecorationLine:"underline"
  }
});
