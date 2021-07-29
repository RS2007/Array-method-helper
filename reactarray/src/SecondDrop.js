import React from 'react'
class SecondDrop extends React.Component{
constructor(props){
	super(props)
	console.log(props.isPending && props.dropData)
}
render(){
	return(
		<div className="second-dropdown" >
      {this.props.isPending&&<div>Loading....</div>}
      { !this.props.isPending && <div><label htmlFor="SecondDrop">I need to add </label>
        <select name="SecondDrop" onChange={this.props.handleSelect} value={this.props.secondDropSelect}>
          <option value='' disabled selected="selected">...</option>
          {this.props.dropData.find(elem=>elem.a === this.props.firstDropSelect).b.map((elem,index)=>(
            <option value={elem.prop}>{elem.prop}</option>
          ))}
        </select></div>}
	  </div>
	)
}
}
export default SecondDrop