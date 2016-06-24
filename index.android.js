

import React, { Component } from 'react';
//solve : Super expression must either be null or a function, not undefined

import {
    AppRegistry,
    Navigator
} from 'react-native';

import Launcher from './android-js/launcher';

class AwesomeProject extends Component {

  render() {
      var defaultName = 'launcher';
      var defaultComponent = Launcher;
      
      return (
            <Navigator
                initialRoute={{ name: defaultName, component: defaultComponent }}//默认的页面

                configureScene={(route) => {//页面之间跳转时候的动画
                        return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
                    }}


                //route里其实就是我们传递的name,component这两个货
                //navigator 是一个Navigator的对象, 它有push pop jump...等方法，
                renderScene={(route, navigator) => {
                        let Component = route.component;
                        return <Component {...route.params} navigator={navigator} />
                    }}
            />
      );
  }
    
}



AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
