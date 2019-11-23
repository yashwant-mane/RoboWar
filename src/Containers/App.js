import React, {Component} from 'react';
import '../CSS/App.css';
import CardList from '../Components/CardList'
import robotarr from '../Components/robots'
import Search from '../Components/search'
import Scroll from '../Components/Scroll'
import StickyHeader from '../Components/StickHeader'
import ErrorBoundry from '../Components/ErrorBoundry'
class App extends Component{
  constructor(){
    super();
    this.state={
      roboData:[],   
      searchField:""
    }
    
   
  }
  readSearchContent= (event)=>{
      this.setState({searchField: event.target.value})
  
    }
    componentDidMount =()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(response=> this.setState({roboData: response}))
    }
          
  render() {
    const filterArray= this.state.roboData.filter((robo)=>{
        return robo.name.toLowerCase().includes(this.state.searchField.toLowerCase())
      })
      if(this.state.roboData === 0){
        return <div>
          <h1 className="tc">Fetching data</h1>
        </div>
      }else {
        return <div className="tc">
      <StickyHeader>   
      <h1>Robo War Participants</h1>
      <Search onChangeSearch= {this.readSearchContent}/> 
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filterArray}/>
        </ErrorBoundry>
      </Scroll>
      </StickyHeader> 
      
    </div>;
      }    
    
  }

 
}

export default App;
