// 作为启动文件
import  'react-hot-loader/patch'
// require("react-hot-loader/patch");
import React,{Component} from 'react';
import { render } from 'react-dom';
import  {AppContainer} from  'react-hot-loader';
import router from './routes/router'

render((
<AppContainer>
    {router}
</AppContainer>
), document.getElementById('root'))


if (module.hot){
    module.hot.accept('./routes/router',() =>{
        const NewRoot = require('./routes/router').default;
        render(
            <AppContainer>
                <NewRoot/>
            </AppContainer>,
            document.getElementById('root')
        );
    });
}
