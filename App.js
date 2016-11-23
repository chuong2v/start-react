import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
	render(){
    let txt = this.props.txt;
		return <h1>{txt}</h1>
		// return React.createElement('h1', null, "Hello Guys")
	}
}
ReactDOM.render(
  <App txt="this is the props value"/>,
  document.getElementById('app')
)
// const App = () => <h1>Hello React</h1> 
