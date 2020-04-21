import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import { GlobalProvider } from './context/GlobalState';
import './App.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="app">
      <GlobalProvider>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/add" component={AddProduct} exact />
          <Route path="/edit/:id" component={EditProduct} exact />
        </Switch>
      </GlobalProvider>
    </div>
  );
}

export default App;
