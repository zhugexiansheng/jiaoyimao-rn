/**
 * 轮播图组件
 * @description: imageSlider
 * @author: xiaoming
 * @date: 2016/06/07
 */
import React, {View, Image, StyleSheet} from 'react-native';
import ViewPager from 'react-native-viewpager';

const HOME_IMAGE = [
	require("../../images/slides/1.jpg"),
	require("../../images/slides/2.jpg"),
	require("../../images/slides/4.jpg")
]

export default class ImageSlider extends React.Component{
	constructor(props){
		super(props);
		// 用于构建DataSource对象
        let dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });
        // 实际的DataSources存放在state中  
	    this.state = {  
	        dataSource: dataSource.cloneWithPages(HOME_IMAGE)  
	    }
	}
	_renderPage(data, pageID){
		return(
			<Image 
				source={data}
				style={styles.page}/>
		)
	}
	render(){
		return(
			<ViewPager  
			    style={{height:130}}  
			    dataSource={this.state.dataSource}  
			    renderPage={this._renderPage}  
			    isLoop={true}  
			    autoPlay={true}/>
		)
	}
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
        height: 130,
        resizeMode: 'stretch'
	}
});