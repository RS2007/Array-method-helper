import React from "react";
import "./App.css";
import Heading from './Heading'
import FirstDrop from "./FirstDrop";
import SecondDrop from "./SecondDrop";
import ThirdDrop from "./ThirdDrop";
import Details from "./Details";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropData:'',
      isPending:true,
      firstDropSelect:'',
      secondDropDisplay:false,
      secondDropSelect:'',
      thirdDropDisplay:false,
      thirdDropSelect:'',
      displayDetails:false,
    };
  }
  componentDidMount(){
    const fetchData = async ()=>{
      const response = await fetch('http://localhost/data');
      const data =await response.json()
      this.setState({
        dropData: data,
        isPending:false
      })
      console.log(this.state.dropData[0].a)
    }
    fetchData()
  }
  
  handleSelect= (e)=>{
   this.setState({
     firstDropSelect:e.target.value,
     secondDropDisplay:true,
     thirdDropDisplay:false,
     secondDropSelect:'',
     displayDetails:false,
     thirdDropSelect:'',
   })
    
    
    
  }
  handleSelect3 = (e)=>{
    this.setState({
      thirdDropSelect:e.target.value,
      thirdDropDisplay:true,
      displayDetails:true,
    })
  }
  
  handleSelect2 = (e)=>{
    if(e.target.value === 'one item' || e.target.value ==='one or many items'){
      this.setState({
        secondDropSelect:e.target.value,
        jack:true,
        thirdDropDisplay:true,
        displayDetails:false,
        thirdDropSelect:'',
      })
      console.log(this.state.dropData.find(elem=>elem.a===this.state.firstDropSelect).b.find(elem=>elem.prop === this.state.secondDropSelect))
    }else{
    this.setState({
    secondDropSelect:e.target.value,
    thirdDropDisplay:false,
    displayDetails:true,
    thirdDropSelect:''
   
  })}

  }
  render() {
    return (
      <div>
      <Heading/>
      <FirstDrop dropData={this.state.dropData} firstDropSelect={this.state.firstDropSelect} handleSelect={this.handleSelect} isPending={this.state.isPending}/>
      {this.state.secondDropDisplay&&<SecondDrop dropData={this.state.dropData} handleSelect={this.handleSelect2} firstDropSelect={this.state.firstDropSelect} isPending={this.state.isPending} secondDropSelect={this.state.secondDropSelect}/>}
      {this.state.thirdDropDisplay&&<ThirdDrop dropData={this.state.dropData} handleSelect={this.handleSelect3} isPending={this.state.isPending} firstDropSelect={this.state.firstDropSelect} secondDropSelect={this.state.secondDropSelect} thirdDropSelect={this.state.thirdDropSelect}/>}
      {this.state.displayDetails&& <Details dropData={this.state.dropData} firstDropSelect={this.state.firstDropSelect} isPending={this.state.isPending} secondDropSelect={this.state.secondDropSelect} thirdDropSelect={this.state.thirdDropSelect} thirdDropDisplay={this.state.thirdDropDisplay}/>}
      
      </div>
    );
  }
}


export default App;
