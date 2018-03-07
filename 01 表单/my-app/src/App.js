import React, {
	Component
} from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		//组件数据
		this.state = {
			title: '这是一个标题！',
			styleObj: {
				color: 'red',
				fontSize: '20px'
			},
			name: "",
			nameResult: '',
			checked: false,
            checkedSex:true,
            checkedColor:'red',
            checkedHero:["圣枪游侠"],
            age:20,
            text:''
		}

		//改变this指向
		this.inputName = this.inputName.bind(this)
		this.toggleCheck = this.toggleCheck.bind(this)
        this.selectSex = this.selectSex.bind(this)
        this.selectColor = this.selectColor.bind(this)
        this.selectHero = this.selectHero.bind(this)
        this.selectAge = this.selectAge.bind(this)
	}
	//输入用户名的函数
	inputName(event) {
		//注意:这个值包含原来的值和新输入的值
		//console.log(event.target.value)
		//  表单显示的值，不由输入的值决定，由对应的状态决定
		var content = event.target.value;
		//用户名正则
		var uPattern = /^[a-zA-Z0-9z_-]{4,16}$/;
		//只允许输入中文
		if(!/^[\u4e00-\u9f5a]$/.test(content)) {
			this.setState({
				name: event.target.value
			})
		}
		//验证提示
		if(uPattern.test(content)) {
			this.setState({
				nameResult: "符合规则"
			})
		} else {
			this.setState({
				nameResult: "不符合规则"
			})
		}
	}

	//切换  同意与否
	toggleCheck(event) {
		console.log(event.target.value)
		//切换状态
		this.setState({
			checked: !this.state.checked
		})
	}
	//选择性别
    selectSex(event){
        console.log(event.target);
        this.setState({
            checkedSex:! this.state.checkedSex
        })
    }
    //选择颜色
    selectColor(event){
        console.log(event.target.value)
        this.setState({
            checkedColor:event.target.value
        })
    }
    //选择英雄
    selectHero(event){
        console.log(event.target.value)
        console.log(event.target.checked)
        var currentValue = event.target.value
        //判断是否被选中
        if(event.target.checked){
            this.setState({
                //如果不选中，直接插进数组
                checkedHero:[...this.state.checkedHero,currentValue]
            })
        }else{
            //如果选中，把当前选中的值从数组中过滤掉
            var filterArr = this.state.checkedHero.filter(function (ele) {
                return ele !== currentValue
            })
            this.setState({
                checkedHero:filterArr
            })
        }
    }
    selectAge(event){
        console.log(event.target.value)
        this.setState({
            age:event.target.value
        })
    }
	render() {
		return(
			<div className="App">
                {/*普通属性的绑定*/}
                <h1 title={this.state.title} className={"h1"}>表单元素</h1>
                {/*在react中只有一个特殊属性:style   style可以通过对象的方式进行绑定*/}
                {/*<div style={{color:'red',fontSize:'20px'}}>绑定样式 </div>*/}
                <div style={this.state.styleObj}>
                    绑定样式
                </div>


                <h2>1.input 输入框</h2>
                {/*
                 在react中所有表单元素都进行了特殊处理
                 在react中，input表单分为两类：

                 第一类是受控表单，如果想要改变，需要满足以下条件
                 1.必须提供一个状态，并通过value进行绑定
                 2.必须提供onChange来改变状态,onChange = 的必须是一个函数
                 可以通过1和2来实现双向数据绑定和表单验证

                 第二类是非受控表单   没有value属性  非受控表单可以正常输入内容，也可以绑定onChange事件
                 */}
                <input type="text" value={this.state.name} onChange={this.inputName}/>
                <span>{this.state.nameResult}</span>
                <br/>
                <input type="text" onChange={this.inputName}/>
                <p>{this.state.name}</p>
                <h2>2.复选框</h2>
                <div>
                    <input type="checkbox" checked={this.state.checked} onChange={this.toggleCheck}/>是否同意协议
                    <br/>
                    {
                        this.state.checked ? "同意" : "不同意"
                    }
                </div>
                <div>
                    您喜欢哪些英雄?
                    <input type="checkbox" defaultChecked={this.state.checkedHero.includes("圣枪游侠")} defaultValue={"圣枪游侠"} onChange={this.selectHero}/>圣枪游侠
                    <input type="checkbox" defaultChecked={this.state.checkedHero.includes("皮城女警")} defaultValue={"皮城女警"} onChange={this.selectHero}/>皮城女警
                    <input type="checkbox" defaultChecked={this.state.checkedHero.includes("疾风剑豪")} defaultValue={"疾风剑豪"} onChange={this.selectHero}/>疾风剑豪
                    <input type="checkbox" defaultChecked={this.state.checkedHero.includes("铸星龙王")} defaultValue={"铸星龙王"} onChange={this.selectHero}/>铸星龙王
                    <input type="checkbox" defaultChecked={this.state.checkedHero.includes("放逐之刃")} defaultValue={"放逐之刃"} onChange={this.selectHero}/>放逐之刃

                    <br/>
                    您选择的英雄是:
                    {
                        this.state.checkedHero
                    }
                </div>
                <h2>3.单选框</h2>
                <div>
                    您的性别为？
                    {/*设置默认  defaultChecked和defaultValue*/}
                    <input type="radio" name="sex" defaultChecked={this.state.checkedSex} onChange={this.selectSex}/>男
                    <input type="radio" name="sex"  onChange={this.selectSex}/>女
                    <br/>
                    您选的性别是:
                    {
                        this.state.checkedSex ? "男" : "女"
                    }
                </div>
                <div>
                    您最喜欢的颜色？
                    <input type="radio" name="colors" defaultChecked={this.state.checkedColor === 'red'} defaultValue={"red"} onChange={this.selectColor}/>红色
                    <input type="radio" name="colors" defaultValue={"pink"} onChange={this.selectColor}/>粉色
                    <input type="radio" name="colors" defaultValue={"purple"} onChange={this.selectColor}/>紫色
                    <br/>
                    您选择的颜色是:
                    {
                        this.state.checkedColor === "red" && "红色"
                    }
                    {
                        this.state.checkedColor === "pink" && "粉色"
                    }
                    {
                        this.state.checkedColor === "purple" && "紫色"
                    }
                </div>
                <h2>4.下拉菜单</h2>
                <div>
                    请选择你的年龄？
                    <select value={this.state.age} onChange={this.selectAge}>
                        {/*option[value=$]{$}*30*/}
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                    </select>
                    <br/>
                    你选择的年龄是：{this.state.age}岁
                </div>
                <h2>5.文本框</h2>
                <textarea cols="100" rows="5" value={this.state.text} onChange={
                    (event)=>{
                    this.setState({
                        text:event.target.value
                    })
                  }
                }>

                </textarea>
                <br/>
                您输入的内容是：{this.state.text}
            </div>
		);
	}
}

export default App;