/**
 * 标题栏
 * @description: navigator
 * @author: xiaoming
 * @date: 2016/06/07
 */
import React,{View, Image, Text, StyleSheet} from "react-native";

const styles = StyleSheet.create({
	header:{
		backgroundColor: "#ffffff",
		height: 44,
		flexDirection: 'row',
		alignItems: "center",
		paddingLeft: 10,
		paddingRight: 10,
		borderBottomColor: "#ccc",
		borderBottomWidth: 0.5
	},
	logo:{
		height: 26,
		width: 91
	},
	fee:{
		width: 62,
		marginLeft: 8
	}
});

export default class JiaoyimaoHeader extends React.Component{
	constructor(props){
		super(props);
		this.state = {}
	}
	render() {
		return (
			<View style={styles.header}>
				<Image source={require("../../images/logo.png")} style={styles.logo}/>
				<Image source={require("../../images/fee.png")} style={styles.fee}/>
			</View>
		)
	}
}
