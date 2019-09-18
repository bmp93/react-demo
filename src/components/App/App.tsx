import React, { Component } from 'react';
import './App.css';
import Card from '../Card/Card';
import Switch from '../Switch/Switch';

// const AppContext = React.createContext({});

// class AppProvider extends Component {
//   state = {
//     number: 10,
//     inc: () => {
//       this.setState({ number: this.state.number + 1 })
//     }
//   }
//   render() {
//     return (
//       <AppContext.Provider value={this.state}>
//         {this.props.children}
//       </AppContext.Provider>
//     )
//   }
// }

// class Red extends Component<any, any> {
//   render() {
//     return (
//       <AppProvider>
//         <div className="red">
//           <AppContext.Consumer>
//             {(context: any) => context.number}
//           </AppContext.Consumer>
//           <Blue />
//         </div>
//       </AppProvider>
//     )
//   }
// }

// const Blue = () => (
//   <div className="blue">
//     <AppContext.Consumer>
//       {(context: any) => <button onClick={context.inc}>INC</button>}
//     </AppContext.Consumer>
//     <Green />
//   </div>
// )

// const Green = () => (
//   <div className="green">
//     <AppContext.Consumer>
//       {(context: any) => context.number}
//     </AppContext.Consumer>
//   </div>
// )

// const App: React.FC = () => {
//   return (
//     <Red />
//   );
// }





const App: React.FC = () => {
  return (
    <div className="App">
      <h1>React context api</h1>
      <h2>Switch Theme</h2>
      <Card />
      <Switch />
    </div>
  );
}



export default App;
