/**
 * 底部的tab标签栏
 * @description: tabbar
 * @author: xiaoming
 * @date: 2016/06/13
 */
import React, {View, StyleSheet, Text, ScrollView} from 'react-native';
import JiaoyimaoHeader from "../header/header.js";
import ImageSlider from "../imageSlider/index.js";
import MenuBanner from "../menuBanner/index.js";
import TabNavigator from 'react-native-scrollable-tab-view';
import TabBar from "./tabBarItem/index.js";

const TAB_IMG = [

]

const TAB_SELECTIMG = [
]


class FirstTab extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<View style={{flex:1, backgroundColor:"#f4f4f4"}} tabLabel={this.props.tabLabel}>
				<JiaoyimaoHeader/>
				<ScrollView>
					<ImageSlider/>
					<MenuBanner navigator={this.props.navigator}/>
				</ScrollView>
			</View>
		)
	}
}

export default class TabBarView extends React.Component{
	constructor(props){
		super(props);
		this.state = {selectedTab: 'sy'};
	}
	static _createTabView(tag){
		return(
			<View style={{flex:1,backgroundColor:'#00baff',alignItems:'center',justifyContent:'center'}} tabLabel={tag}>
				<Text style={{fontSize:22}}>{tag}</Text>
			</View>
		);
	}
	render(){
		return(
			<TabNavigator 
				tabBarPosition={"bottom"} 
				initialPage={0} 
				renderTabBar={() => <TabBar navigator={this.props.navigator}/>}
				scrollWithoutAnimation={true}>
				<FirstTab navigator={this.props.navigator} tabLabel={"首页"}/>
				{TabBarView._createTabView("我要买")}
				{TabBarView._createTabView("个人中心")}
				{TabBarView._createTabView("我要卖")}
				{TabBarView._createTabView("更多")}
			</TabNavigator>
		)
	}
}

const styles = StyleSheet.create({
	navigator: {
		backgroundColor: "#fff"
	},
	tabIcon: {
		fontSize: 12,
		color: "#333"
	}
});