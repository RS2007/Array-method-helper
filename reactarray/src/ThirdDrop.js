import React from 'react'
class ThirdDrop extends React.Component{
	constructor(props){
		super(props)
		console.log('hey')
	}
	render(){
		return(
			<div className="ThirdDrop">
			<label htmlFor="ThirdDrop">I need to find  </label>
			<select name="ThirdDrop" onChange={this.props.handleSelect} value={this.props.thirdDropSelect}>
			<option value='' disabled selected='selected'>...</option>
			{this.props.dropData.find(elem=>elem.a===this.props.firstDropSelect).b.find(elem=>elem.prop === this.props.secondDropSelect).content.map((elem,index)=>(
				<option key={index} value={elem.prop}>{elem.prop}</option>
			))}
			</select>
			</div>
		)
	}
}
export default ThirdDrop