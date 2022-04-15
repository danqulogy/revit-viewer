import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class AppMain extends Component{

  constructor(props){
    super(props);

    this.state = {
      view: null
    }
  }

  handleViewerError(error){
    console.error("Error loading viewer")
  }

  /**
   * After the viewer loads a document, we need to select which viewable
   * to display in our component
   * @param {any} doc 
   * @param {Array} viewables 
   */
  handleDocumentLoaded(doc, viewables){
    if(viewables.length === 0){
      console.error('Document contains no viewables.')
    }
    else{
      // Select the first viewable in the list to use in our viewer component
      this.setState({view: viewables[0]})
    }
  }

  handleDocumentError(viewer, error){
    console.log('Error loading a document')
  }

}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
