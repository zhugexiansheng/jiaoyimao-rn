/**
 * 第二个页面
 * @description: second page
 * @author: xiaoming
 * @date: 2016/06/07
 */

import React, {View, TouchableOpacity, Text} from "react-native";
import styles from "../indexScene/indexScene.style.js";

export default class SecondScene extends React.Component{
	constructor(props){
		super(props);
		this.state = {};
	}
	_pressButton(){
		const {navigator} = this.props;
		if(navigator){
			navigator.pop();
		}
	}
	render(){
		return(
			<View style={styles.container}>
				<TouchableOpacity onPress={this._pressButton.bind(this)}>
					<Text>点我跳回去</Text>
				</TouchableOpacity>
			</View>
		)
	}
}