/**
 * 交易猫主页
 * @description: jiaoyimao index
 * @author: xiaoming
 * @date: 2016/06/07
 */
import React,{View} from "react-native";
import styles from "./indexScene.style.js";
import TabBar from "../tabBar/index.js";

export default class indexScene extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<View style={styles.base}>
				<TabBar navigator={this.props.navigator}/>
		    </View>
		)
	}
}