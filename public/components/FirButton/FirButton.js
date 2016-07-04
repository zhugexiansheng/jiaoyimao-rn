/**
 * 按钮组件
 * @author: zilong<zxmwebroad@163.com>
 * @date: 2016/06/26
 */

import React, { Component } from 'react';
import {
	View, 
	Image, 
	Text,
	TouchableNativeFeedback,
	StyleSheet
} from 'react-native';

export default class FirButton extends Component{
	render(){
		return(
			<TouchableNativeFeedback
				onPress={this.props.press}>
				<View style={styles.button}>
		           <Image source={this.props.img}/>
		           <Text style={styles.buttonText}>{this.props.btnText}</Text>
		        </View>
			</TouchableNativeFeedback>
		)
	}
}

const styles = StyleSheet.create({
	button: {
	    borderColor: "#fff",
	    backgroundColor: '#000',
	    borderWidth: 1,
	    borderRadius: 20,
	    paddingLeft: 30,
	    paddingRight: 30,
	    paddingTop: 8,
	    paddingBottom: 8,
	    flexDirection: 'row',
	    alignItems: 'center',
	    marginBottom: 18,
	    width: 270
	},
	buttonText: {
	    fontSize: 24,
	    color: "#fff",
	    textAlign: "center",
	    flex: 1
	}
});