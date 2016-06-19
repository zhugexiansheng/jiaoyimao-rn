/**
 * 图片按钮
 * @description: 图片按钮
 * @author: xiaoming
 * @date: 2016/06/13
 */

import React, {View, Image, Text, TouchableWithoutFeedback, StyleSheet, PropTypes} from 'react-native';

export default class MenuButton extends React.Component{
	constructor(props){
		super(props);
	}
	//属性验证，判断是否符合规则
	static propTypes = {
		renderIcon: PropTypes.number.isRequired,
		showText: PropTypes.string,
		tag: PropTypes.string,
		onClick: PropTypes.func
	}
	_onClick(){
		if(this.props.onClick){
			this.props.onClick(this.props.showText, this.props.tag);
		}
	}
	render(){
		return(
			<TouchableWithoutFeedback onPress={this._onClick.bind(this)}>
				<View style={{alignItems:'center',flex:1}}>
					<Image style={styles.iconImg} source={this.props.renderIcon}/>
					<Text style={{fontSize: 12, color: "#333"}}>{this.props.showText}</Text>
				</View>
			</TouchableWithoutFeedback>
		)
	}
}

const styles = StyleSheet.create({
	iconImg:{
		width: 42,
		height: 42,
		marginBottom: 10
	}
});