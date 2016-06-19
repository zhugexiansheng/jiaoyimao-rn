/**
 * tabbarItem
 * @description: 底部的tab的item
 * @author: xiaoming
 * @date: 2016/06/16
 */
import React, {
	View,
	Text,
	PropTypes,
	TouchableOpacity,
	StyleSheet
} from 'react-native';
import LoginPanel from "../../loginPanel/index.js";

export default class tabItem extends React.Component{
	constructor(props){
		super(props);
		this.goNewView = this.goNewView.bind(this);
	}
	static propTypes = {
		tabs: PropTypes.array,
		goToPage: PropTypes.func,
    	activeTab: PropTypes.number
	}
	goNewView(index){
		if(index===2||index===4){
			let{navigator} = this.props;
			if(navigator){
				navigator.push({
					name: "LoginPanel",
					component: LoginPanel
				});
			}
		}else{
			this.props.goToPage(index);
		}
	}
	render(){
		return(
			<View style={styles.tab}>
				{this.props.tabs.map((tab, index)=>{
					return(
						<TouchableOpacity key={index} onPress={()=>this.goNewView(index)} style={styles.tabs}>
							<Text style={[styles.tabfont,{color:this.props.activeTab===index?'rgb(59,89,152)' : 'rgb(204,204,204)'}]}>{tab}</Text>
						</TouchableOpacity>
					)
				})}
			</View>
		)
	}
}

var styles = StyleSheet.create({
	tab: {
		height: 45,
    	flexDirection: 'row',
    	borderTopWidth: 0.5,
    	borderTopColor: "#ccc",
	},
	tabs: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	tabfont: {
		fontSize: 12
	}
})
