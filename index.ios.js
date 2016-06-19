/**
 * 交易猫react native实践
 * 项目入口
 * @author: xiaoming
 * @date: 2016/06/07
 */

import React, {
  Navigator,
  AppRegistry,
} from 'react-native';
import indexScene from "./public/indexScene/indexScene.js";

const defaultName = "indexScene";
const defaultComponent = indexScene;

class AwesomeProject extends React.Component {
  render() {
    return(
      <Navigator
        initialRoute={{name:defaultName, component:defaultComponent}}
        renderScene={(router, navigator)=>{
          let Component = router.component;         
          return <Component {...router.params} navigator={navigator}/>
        }}
      />
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
