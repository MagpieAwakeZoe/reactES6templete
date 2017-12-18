/**
 * Created by by on 2017/12/18.
 */
import React from 'react'
import './header.less'
import { Link } from 'react-router'
class Header extends React.Component{

    render(){
        return(
            <div className="container0">
                <div className="container">
                    <div className="block block1">
                        <p className="font"><Link to="/">首页</Link></p>
                    </div>
                    <div className="block block2">
                        <p className="font"><Link to="/list2">评论</Link></p>
                    </div>
                    <div className="block block3">
                        <p className="font"><Link to="/list3">查找目录</Link></p>
                    </div>
                    <div className="block block4">
                        <p className="font"><Link to="/list4">新人必读</Link></p>
                    </div>
                    <div className="block block5">
                        <p className="font"><Link to="/list5">问题</Link></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;