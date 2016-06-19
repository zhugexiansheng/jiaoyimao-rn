/**
 * 首页样式
 * @description: index Style
 * @author: xiaoming
 * @date: 2016/06/07
 */

import React, {StyleSheet} from "react-native";

const styles = StyleSheet.create({
	base: {
		paddingTop:20,
		flex: 1
	},
	container: {
	    flex: 1,
	    flexDirection: 'row',
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#F5FCFF',
	},
	thumbnail: {
	    width: 53,
	    height: 81,
	},
	rightContainer: {
	    flex: 1,
	},
	title: {
	    fontSize: 20,
	    marginBottom: 8,
	    textAlign: 'center',
	},
	year: {
	    textAlign: 'center',
	},
});

export default styles;