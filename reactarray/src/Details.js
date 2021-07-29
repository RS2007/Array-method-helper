import React from 'react'
class Details extends React.Component{
	constructor(props){
		super(props)
		console.log(this.props.thirdDropSelect)
	}
	
	render(){
		if(this.props.thirdDropDisplay){
			return(
				<div className="details">
				<h1>{this.props.dropData.find(elem=>elem.a===this.props.firstDropSelect).b.find(elem=>elem.prop === this.props.secondDropSelect).content.find(elem=>elem.prop=== this.props.thirdDropSelect).header}</h1>
				<p>{this.props.dropData.find(elem=>elem.a===this.props.firstDropSelect).b.find(elem=>elem.prop === this.props.secondDropSelect).content.find(elem=>elem.prop=== this.props.thirdDropSelect).body}</p>
				<a href={this.props.dropData.find(elem=>elem.a===this.props.firstDropSelect).b.find(elem=>elem.prop === this.props.secondDropSelect).content.find(elem=>elem.prop=== this.props.thirdDropSelect).url}>	See the docs </a>
			</div>
			)
		}else{
		return(
			<div className="details">
				<h1>{this.props.dropData.find(elem=>elem.a===this.props.firstDropSelect).b.find(elem=>elem.prop === this.props.secondDropSelect).header}</h1>
				<p>{this.props.dropData.find(elem=>elem.a===this.props.firstDropSelect).b.find(elem=>elem.prop === this.props.secondDropSelect).body}</p>
				<a href={this.props.dropData.find(elem=>elem.a===this.props.firstDropSelect).b.find(elem=>elem.prop === this.props.secondDropSelect).url}>	See the docs </a>
			</div>
		)}
	}
}
export default Details