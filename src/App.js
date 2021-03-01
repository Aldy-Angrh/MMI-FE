import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MasterKaryawan from './container/MasterKaryawan';
import AddKaryawan from './container/AddKaryawan';

function App() {
  return (
   <BrowserRouter>
   <Switch>
     <Route exact path="/" component={MasterKaryawan}   /> 
   <Route path="/add" component={AddKaryawan}    />
   </Switch>
   </BrowserRouter>
  );
}

export default App;
