import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MasterKaryawan from './container/MasterKaryawan';
import AddKaryawan from './container/AddKaryawan';
import ContainerKaryawan from './container/ContainerKaryawan';

function App() {
  return (
   <BrowserRouter>
   <Switch>
     <Route exact path="/" component={ContainerKaryawan}   /> 
   </Switch>
   </BrowserRouter>
  );
}

export default App;
