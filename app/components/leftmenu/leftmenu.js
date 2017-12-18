/**
 * Created by by on 2017/12/18.
 */
import React from 'react'
import './leftmenu.less'
import { Link } from 'react-router'

class Leftmenu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title1:'这是标题1',
            title2:'这是标题2',
            title3:'这是标题3',
            title4:'这是标题4'
        }
    }
    render(){
           return(
               <div>
                   <div className="left_menu_container">
                        <div className="hamberger">
                            <i className="icon"></i>
                        </div>
                        <div className="left_menu_title">
                            <div className="child_title">{this.state.title1}</div>
                            <div className="child_title">{this.state.title2}</div>
                            <div className="child_title">{this.state.title3}</div>
                            <div className="child_title">{this.state.title4}</div>
                        </div>
                   </div>
               </div>
           )
    }
}

export default Leftmenu;