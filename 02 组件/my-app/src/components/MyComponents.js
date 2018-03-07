import React, { Component } from 'react';

//定义一个类 继承另一个类
class MyComponent extends Component{
    constructor(props){
        super(props)
        //数据
        this.state = {
            msg:'德玛西亚！！！！'
        }
    }

    //返回模板
    render(){
        return(
            <div className="MyComponent">
                {this.state.msg}
            </div>
        )

    }
}
export default MyComponent;