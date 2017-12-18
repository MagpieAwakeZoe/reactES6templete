// App.js是所有组件的集合，传到main.js整合
import React,{Component} from 'react';
import Header from './header/header';
import Leftmenu from './leftmenu/leftmenu'
export default class extends Component{

  render(){
    return(
      <div>
        <Header/>
        <Leftmenu/>
      </div>
    )
  }
}
