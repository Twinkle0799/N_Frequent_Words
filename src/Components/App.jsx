import React from "react"
import axios from "axios";
import Tables from "./Table";
import "../App.css";

export default class App extends React.Component {
state = {
    number : 0,
    result: new Map(),
    isSubmit:false
}
async componentDidMount(){
    const res = await axios.get("https://raw.githubusercontent.com/invictustech/test/main/README.md")
    const Words = res.data.split(/[-:;,— .\r\n|\r|\n]+/);
    let dataToRender = new Map();
    for(let i=0;i<Words.length;i++){
    if(dataToRender.has(Words[i])){
        dataToRender.set(Words[i],dataToRender.get(Words[i])+1);
    }
    else{
        dataToRender.set(Words[i],1);
    }
    }
    let dataToRender1 = new Map([...dataToRender].sort((a, b) => String(b[1]).localeCompare(a[1])));
    this.setState({
    result: dataToRender1
    })
}


handleChange = (e)=>{
    this.setState({
    number:e.target.value,
    isSubmit:false
    })
}

handleSubmit = (e)=>{
    e.preventDefault();
    this.setState({
    isSubmit:true
    })

}
handleRefresh = ()=>{
    this.setState({
    isSubmit:false
    })
}


render() {
    return (
    <div className="App">
        <h1>N Most Frequent Words</h1>
        <h2>Fetch a list from a Doc and display it!</h2>
        <form onSubmit={this.handleSubmit}>
            <input className="input-search" type="number" value={this.state.number} placeholder="Type any Number" onChange={this.handleChange}/>
            <br/><br/>
            <button className="fetch" type="submit" >Fetch</button>
        </form>
    {this.state.isSubmit && <Tables number={this.state.number} result={this.state.result} submit={this.handleRefresh}/>}
    
    </div>
    )
}
}