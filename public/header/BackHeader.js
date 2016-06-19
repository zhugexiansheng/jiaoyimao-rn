/**
 * 带有返回按钮的header
 * @author: zilong
 */

import React,{
	View,
	Text,
	Image,
	TouchableHighlight,
	StyleSheet
} from 'react-native';

export default class BackHeader extends React.Component{
	goInit(){
		
	}
	goBack(){
		let {navigator} = this.props;
		if(navigator){
			navigator.pop();
		}
	}
	render(){
		return(
			<View style={styles.header}>
				<TouchableHighlight onPress={this.goBack.bind(this)}>
					<View style={styles.btn}>
						<Image 
							source={require("../../images/arrow_l.png")} 
							style={styles.btnimg}/>
					</View>
				</TouchableHighlight>
				<View style={{flex:1,height:44,justifyContent:"center"}}>
					<Text style={styles.hfont}>{this.props.name}</Text>
				</View>
				<TouchableHighlight onPress={this.goInit.bind(this)} style={{width:40,height:44,backgroundColor:"#fff", justifyContent:"center"}}>
					<Text style={{textAlign:"center"}}>注册</Text>
				</TouchableHighlight>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	header: {
		borderBottomColor: "#ccc",
		borderBottomWidth: 0.5,
		backgroundColor: "#fff",
		flexDirection: "row"
	},
	btnimg: {
		width: 13,
		height: 21
	},
	btn: {
		width: 36,
		height: 44,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#fff"
	},
	hfont: {
		fontSize: 16,
		textAlign: "center",
	}
});