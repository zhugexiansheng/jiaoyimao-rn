/**
 * 按钮面板
 * @description: menuBanner
 * @author: xiaoming
 * @date: 2016/06/13
 */

import React, {
	View, 
	Alert, 
	StyleSheet, 
	Text, 
	Image, 
	TouchableHighlight
} from 'react-native';
import MenuButton from "../MenuButton/index.js";
import SecondScene from "../secondScene/secondScene.js";
import Accordion from "react-native-collapsible/Accordion";

const SECTIONS = [
	{
		header: {
			img: "https://static-jiaoyimao-com.alikunlun.com/resource/public/gnk/2015/12/25/3f75c443-cd16-45aa-ad50-9df3eb5c5381.jpg",
			title: "热血传奇手机版",
			dtl: "最新发布152个账号，总有你喜欢的",
			num: 7821
		},
		content: [
			{
				name: "账号",
				dtl: "最新发布112个账号，总有你喜欢的",
			},
			{
				name: "道具",
				dtl: "赤金16勇士天魔神甲",
			},
			{
				name: "游戏币",
				dtl: "1元=12.2元宝"
			}
		]
	},
	{
		header: {
			img: "https://static-jiaoyimao-com.alikunlun.com/resource/public/shop/2016/4/15/64d79a1c-3c0e-4830-a2d5-d410e7ce5cf1.jpg",
			title: "东方不败",
			dtl: "赤金16勇士天魔神甲",
			num: 16
		},
		content: [
			{
				name: "游戏币",
				dtl: "1元=22.2元宝"
			},
			{
				name: "道具",
				dtl: "赤金16勇士天魔神甲",
			}
		]
	}
]

export default class MenuBanner extends React.Component{
	_MenuClick(title, tag){
		const {navigator} = this.props;
		if(navigator){
			navigator.push({
				name: "SecondScene",
				component: SecondScene
			});
		}
	}
	_renderHeader(section){
		let header = section.header;
		return(
			<View style={styles.accordHeader}>
				<Image source={{uri: header.img}} style={{width: 45, height: 45, marginRight:10}}/>
				<View>
					<Text style={{marginBottom:10}}>{header.title}</Text>
					<Text style={styles.smallFont}>{header.dtl}</Text>
					<Text style={styles.smallFont}>{header.num}件商品</Text>
				</View>
			</View>
		);
	}
	_renderContent(section){
		let content = section.content;
		return(
			<View style={{padding: 10}}>
				{content.map((item,index)=>{
					return(
						<View key={index} style={styles.smallList}>
							<Text style={{width:40, color: "#666", fontSize: 12}}>{item.name}</Text>
							<Text style={{fontSize:12}}>{item.dtl}</Text>
						</View>
					)
				})}
				<View style={{flexDirection:"row", flex: 1}}>
					<TouchableHighlight style={{flex:1, marginRight:10}}>
						<Text style={styles.greenBtn}>下载游戏</Text>
					</TouchableHighlight>
					<TouchableHighlight style={{flex:1, marginLeft:10}}>
						<Text style={styles.yellowBtn}>查看更多商品</Text>
					</TouchableHighlight>
				</View>
			</View>
		);
	}
	render(){
		return(
			<View>
				<View style={styles.menuView}>
					<View style={{marginBottom: 25,flexDirection: 'row'}}>
						<MenuButton 
							renderIcon={require('../../images/menu/1.png')}
							showText={'首冲号'}
							tag={"account"}
							onClick={this._MenuClick.bind(this)}
						/>
						<MenuButton 
							renderIcon={require('../../images/menu/2.png')}
							showText={'充值中心'}
							tag={"charge"}
							onClick={this._MenuClick.bind(this)}
						/>
						<MenuButton 
							renderIcon={require('../../images/menu/3.png')}
							showText={'苹果代充'}
							tag={"pgdc"}
							onClick={this._MenuClick.bind(this)}
						/>
						<MenuButton 
							renderIcon={require('../../images/menu/4.png')}
							showText={'礼包'}
							tag={"lb"}
							onClick={this._MenuClick.bind(this)}
						/>
					</View>
					<View style={{flexDirection: 'row'}}>
						<MenuButton 
							renderIcon={require('../../images/menu/5.png')}
							showText={'游戏币'}
							tag={"yxb"}
							onClick={this._MenuClick.bind(this)}
						/>
						<MenuButton 
							renderIcon={require('../../images/menu/6.png')}
							showText={'账号'}
							tag={"zh"}
							onClick={this._MenuClick.bind(this)}
						/>
						<MenuButton 
							renderIcon={require('../../images/menu/7.png')}
							showText={'道具'}
							tag={"dj"}
							onClick={this._MenuClick.bind(this)}
						/>
						<MenuButton 
							renderIcon={require('../../images/menu/8.png')}
							showText={'特卖'}
							tag={"tm"}
							onClick={this._MenuClick.bind(this)}
						/>
					</View>
				</View>
				<View style={styles.borderTop}>
					<Image source={require("../../images/bell-disable.png")} style={styles.smallIcon}/>
					<Text style={{fontSize: 12, flex:1}}>【每周热卖】全场首充1折起</Text>
					<TouchableHighlight>
						<Text onPress={this._MenuClick.bind(this)} style={{fontSize:12, width: 50, textAlign: "right"}}>更多</Text>
					</TouchableHighlight>
				</View>
				<View style={styles.banner}>
					<Image source={require("../../images/message.png")} style={{width: 15, height: 13, marginRight: 10}}/>
					<Text style={{fontSize: 12}}>没有需要处理的订单</Text>
				</View>
				<View style={styles.banner}>
					<Image source={require("../../images/deposit.png")} style={{width:19, height: 15, marginRight: 10}}/>
					<Text style={{fontSize: 12, flex:1}}>推荐游戏</Text>
					<TouchableHighlight onPress={this._MenuClick.bind(this)}>
						<View style={{flexDirection: "row", width:100, justifyContent: "flex-end", alignItems: "center", backgroundColor: "#fff"}}>
							<Image source={require("../../images/icon_search.png")} style={{width:12, height: 12, marginRight: 5}}/>
							<Text style={{fontSize: 12}}>搜游戏</Text>
						</View>
					</TouchableHighlight>
				</View>
				<Accordion
					sections={SECTIONS}
					initiallyActiveSection={0}
					renderHeader={this._renderHeader}
					renderContent={this._renderContent}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	menuView: {
		paddingTop: 10,
		paddingBottom: 10,
		backgroundColor: "#ffffff"
	},
	borderTop:{
		borderTopColor: "#ccc",
		borderTopWidth: 0.5,
		alignItems: "center",
		height: 35,
		flexDirection: 'row',
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: "#ffffff",
	},
	smallIcon: {
		width: 13,
		height: 14,
		marginRight: 5
	},
	banner: {
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 10,
		paddingBottom: 10,
		alignItems: "center",
		flexDirection: "row",
		backgroundColor: "#fff",
		marginTop: 10
	},
	accordHeader: {
		backgroundColor: "#fff",
		flexDirection: "row",
		padding: 10,
		borderTopColor: "#f4f4f4",
		borderTopWidth: 0.5
	},
	smallFont: {
		color: "#666",
		fontSize: 12,
		marginBottom: 3
	},
	smallList: {
		paddingLeft: 5,
		paddingRight: 5,
		paddingTop: 10,
		paddingBottom: 10,
		backgroundColor: "#fff",
		flexDirection: "row",
		marginBottom: 5
	},
	greenBtn: {
		color: "#fff",
		backgroundColor: "#3484de",
		paddingTop: 10,
		paddingBottom: 10,
		borderRadius: 2,
		textAlign:"center"
	},
	yellowBtn: {
		color: "#fff",
		backgroundColor: "#e6ad66",
		paddingTop: 10,
		paddingBottom: 10,
		borderRadius: 2,
		textAlign:"center"
	}
});