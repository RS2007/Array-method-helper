import React from 'react'
class FirstDrop extends React.Component{
constructor(props){
	super(props)
	console.log(props)
}


render(){
	return(
		<div className="first-dropdown">
		<label htmlFor="FirstDrop">I have an array, I would like to </label>
    {this.props.isPending&&<div>Loading....</div>}
   { !this.props.isPending && <div>
    <select name="FirstDrop" id="FirstDrop" onChange={this.props.handleSelect} value={this.props.firstDropSelect}>
      <option value='' disabled selected="selected">...</option>
     {this.props.dropData.map((elem,index)=>(
       <option value={elem.a} key={index}>{elem.a}</option>
     ))}
    </select>
    </div>}
    </div>
	)
}
}
export default FirstDrop