//test
import React from 'react';
class Voter extends React.Component{
    constructor(){
        super()
        this.state=
            {
                languages:[
                    {name:"Php",votes:0},
                    {name:"Python",votes:0},
                    {name:"Go",votes:0},
                    {name:"Java",votes:0}
                ]
            }
    }
updatePhp=()=>{
    let vs = this.state.languages[0].votes + 1
    this.setState({
        languages:[
            {name:"Php",votes:vs},
            {name:"Python",votes:this.state.languages[1].votes},
            {name:"Go",votes:this.state.languages[2].votes},
            {name:"Java",votes:this.state.languages[3].votes}
        ]
    })
}
updatePython=()=>{
    let vs = this.state.languages[1].votes + 1
    this.setState({
        languages:[
            {name:"Php",votes:this.state.languages[0].votes},
            {name:"Python",votes:vs},
            {name:"Go",votes:this.state.languages[2].votes},
            {name:"Java",votes:this.state.languages[3].votes}
        ]
    })
}
updateJava=()=>{
    let vs = this.state.languages[3].votes + 1
    this.setState({
        languages:[
            {name:"Php",votes:this.state.languages[0].votes},
            {name:"Python",votes:this.state.languages[1].votes},
            {name:"Go",votes:this.state.languages[2].votes},
            {name:"Java",votes:vs}
        ]
    })
}
updateGo=()=>{
    let vs = this.state.languages[2].votes + 1
    this.setState({
        languages:[
            {name:"Php",votes:this.state.languages[0].votes},
            {name:"Python",votes:this.state.languages[1].votes},
            {name:"Go",votes:vs},
            {name:"Java",votes:this.state.languages[3].votes}
        ]
    })
}
render(){
        return(
     <div id="root">
    <h1>Vote Your Language!</h1>
    <div className="languages">
        <div className="language">
        <div className="voteCount">{this.state.languages[0].votes}</div>
            <div className="languageName">{this.state.languages[0].name}</div>
            <button onClick={this.updatePhp } >Click Here</button></div>
        <div className="language">
            <div className="voteCount">{this.state.languages[1].votes}</div>
            <div className="languageName">{this.state.languages[1].name}</div>
            <button onClick={this.updatePython}>Click Here</button></div>
        <div className="language">
            <div className="voteCount">{this.state.languages[2].votes}</div>
            <div className="languageName">{this.state.languages[2].name}</div>
            <button onClick={this.updateGo}>Click Here</button></div>
        <div className="language"><div className="voteCount">{this.state.languages[3].votes}</div>
        <div className="languageName">{this.state.languages[3].name}</div>
        <button onClick={this.updateJava}>Click Here</button>
                    </div>
                    </div>
                    </div>
        )
    }
}
export default Voter;