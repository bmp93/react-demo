import React, { Component, useContext } from 'react';
import './App.css';
import Card from '../Card/Card';
import Switch from '../Switch/Switch';



const AppContext = React.createContext({});

class AppProvider extends Component {
  state = {
    number: 10,
    inc: () => {
      this.setState({ number: this.state.number + 1 })
    }
  }
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}
class Red extends Component<any, any> {
  render() {
    return (
      <div>
        <AppProvider>
          <div className="red">
            <AppContext.Consumer>
              {(context: any) => context.number}
            </AppContext.Consumer>
            <Blue />
          </div>
        </AppProvider>
      </div>
    )
  }
}
class Blue extends Component {

  // If contextType is not defined, then context will be an empty object.
  static contextType = AppContext;

  componentDidMount() {
    const context = this.context;
    console.log(context);
  }
  render() {
    return (
      <div className="blue">
        <AppContext.Consumer>
          {(context: any) => <button onClick={context.inc}>INC</button>}
        </AppContext.Consumer>
        <Green />
      </div>
    )
  }
}

const Green = () => {
  const context: any = useContext(AppContext);
  return (
    <div className="green">
      {context.number}
    </div>

  )
}

const App: React.FC = () => {
  return (
    <Red />
  );
}





// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <h1>Context API</h1>
//       <h2>Switch Theme</h2>
//       <Switch />
//       <Card />
//     </div>
//   );
// }



export default App;
