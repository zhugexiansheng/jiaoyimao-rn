/**
 * 登录页面
 * @author: xiaoming
 * @date: 2016/06/16
 */
import React,{
	View,
	Text,
	StyleSheet
} from 'react-native';
import BackHeader from "../header/BackHeader.js";

export default class LoginPanel extends React.Component{
	render(){
		return(
			<View style={{flex: 1, paddingTop:20}}>
				<BackHeader navigator={this.props.navigator} name={"登录"}/>
				<View style={{paddingLeft: 10,paddingRight:10, paddingTop:10}}>
					<Text style={{color:"#666", fontSize:12}}>使用UC账号登录交易猫</Text>
					
				</View>
			</View>
		)
	}
}